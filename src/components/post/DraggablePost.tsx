'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import Matter from 'matter-js';
import { TankaSections } from '@/types/post';

interface DraggablePostProps {
    sections: TankaSections;
    onDelete: () => void;
}

export const DraggablePost = ({ sections, onDelete }: DraggablePostProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);

    const engineRef = useRef<Matter.Engine | null>(null);
    const cardBodyRef = useRef<Matter.Body | null>(null);
    const dragConstraintRef = useRef<Matter.Constraint | null>(null);

    const [isReady, setIsReady] = useState(false);

    const CARD_WIDTH = 600;
    const CARD_HEIGHT = 400;

    useEffect(() => {
        if (!cardRef.current) return;

        const cw = window.innerWidth;
        const ch = window.innerHeight;

        // 1. Setup Engine
        const engine = Matter.Engine.create();
        engine.gravity.y = 0;
        engine.gravity.x = 0;

        // 計算精度設定（標準より少し高めで安定させる）
        engine.positionIterations = 8;
        engine.velocityIterations = 8;
        engine.constraintIterations = 8;

        engineRef.current = engine;

        // 2. Create Card Body
        const cardBody = Matter.Bodies.rectangle(cw / 2, ch / 2, CARD_WIDTH, CARD_HEIGHT, {
            // ★修正: 密度を極端に軽くせず、ある程度の質量を持たせて挙動を安定させる
            density: 0.005,
            frictionAir: 0.06, // 通常時は高めの空気抵抗で「重み」と「静止性」を出す
            restitution: 0.4,
        });
        cardBodyRef.current = cardBody;

        // 慣性モーメント（回転のしにくさ）の微調整
        // デフォルトのままでも良いが、少しだけ振り回しやすくする
        Matter.Body.setInertia(cardBody, cardBody.inertia * 0.8);

        Matter.World.add(engine.world, cardBody);

        // 3. Game Loop
        let animationFrameId: number;

        const update = () => {
            Matter.Engine.update(engine, 1000 / 60);

            if (cardBody) {
                const isDragging = dragConstraintRef.current !== null;

                // ★【最重要トリック】
                // ドラッグ中は空気抵抗を極限まで下げる（0.001）。
                // これにより、バネ(Constraint)が弱くても、抵抗がないため遅れずにピタッと追従する。
                // 手を離すと元の抵抗(0.06)に戻り、重みのある滑り方をして止まる。
                cardBody.frictionAir = isDragging ? 0.001 : 0.06;

                // 回転ブレーキの制御
                // ドラッグ中もある程度の慣性を残す（0.9）ことで、マウスのターンに反応させる
                const angularDamping = isDragging ? 0.9 : 0.999;
                Matter.Body.setAngularVelocity(cardBody, cardBody.angularVelocity * angularDamping);

                // DOM反映
                if (cardRef.current) {
                    const { x, y } = cardBody.position;
                    const angle = cardBody.angle;

                    cardRef.current.style.transform = `translate(${x - CARD_WIDTH / 2}px, ${y - CARD_HEIGHT / 2}px) rotate(${angle}rad)`;

                    // 影の演出
                    const speed = cardBody.speed;
                    const shadowBlur = Math.min(speed * 2 + 10, 60);
                    const shadowOpacity = Math.min(speed * 0.005 + 0.1, 0.3);
                    const shadowOffset = Math.min(speed + 5, 25);

                    const dx = x - cw / 2;
                    const dy = y - ch / 2;
                    const dist = Math.sqrt(dx * dx + dy * dy) || 1;
                    const sx = (dx / dist) * -shadowOffset;
                    const sy = (dy / dist) * -shadowOffset + shadowOffset;

                    cardRef.current.style.boxShadow = `${sx}px ${sy}px ${shadowBlur}px rgba(0,0,0,${shadowOpacity})`;
                }

                // 画面外判定
                const margin = 400;
                const { x, y } = cardBody.position;
                if (
                    x < -margin || x > cw + margin ||
                    y < -margin || y > ch + margin
                ) {
                    onDelete();
                }
            }
            animationFrameId = requestAnimationFrame(update);
        };

        update();
        setIsReady(true);

        return () => {
            cancelAnimationFrame(animationFrameId);
            Matter.Engine.clear(engine);
        };
    }, [onDelete]);

    // マウス/タッチ操作
    const handlePointerDown = useCallback((e: React.PointerEvent) => {
        if (!cardBodyRef.current || !engineRef.current) return;

        e.stopPropagation();
        const clientX = e.clientX;
        const clientY = e.clientY;
        const body = cardBodyRef.current;

        // 掴んだ瞬間の物理速度をリセット（キャッチの安定化）
        Matter.Body.setVelocity(body, { x: 0, y: 0 });
        Matter.Body.setAngularVelocity(body, 0);

        // 起点の計算（ローカル座標）
        const bodyPos = body.position;
        const offsetVector = {
            x: clientX - bodyPos.x,
            y: clientY - bodyPos.y
        };
        const localPoint = Matter.Vector.rotate(offsetVector, -body.angle);

        // Constraintの設定
        const constraint = Matter.Constraint.create({
            pointA: { x: clientX, y: clientY },
            bodyB: body,
            pointB: localPoint,
            // ★修正: stiffnessを 1.0 -> 0.2 に戻す
            // 強いゴム程度の硬さにすることで、クリック瞬間の座標ズレ（ショック）を吸収する。
            // 「ドラッグ中の遅れ」は上記の frictionAir 操作で解消済みなので、ここは柔らかくてOK。
            stiffness: 0.2,
            damping: 0.1,
            length: 0,
            render: { visible: false }
        });

        dragConstraintRef.current = constraint;
        Matter.World.add(engineRef.current.world, constraint);

        const onPointerMove = (moveEvent: PointerEvent) => {
            if (dragConstraintRef.current) {
                // マウス位置を更新
                dragConstraintRef.current.pointA = {
                    x: moveEvent.clientX,
                    y: moveEvent.clientY
                };
            }
        };

        const onPointerUp = () => {
            if (engineRef.current && dragConstraintRef.current) {
                Matter.World.remove(engineRef.current.world, dragConstraintRef.current);
            }
            dragConstraintRef.current = null;

            window.removeEventListener('pointermove', onPointerMove);
            window.removeEventListener('pointerup', onPointerUp);
        };

        window.addEventListener('pointermove', onPointerMove);
        window.addEventListener('pointerup', onPointerUp);
    }, []);

    const sectionKeys: (keyof TankaSections)[] = ['kami1', 'kami2', 'kami3', 'shimo1', 'shimo2'];

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 overflow-hidden touch-none"
        >
            <div
                ref={cardRef}
                onPointerDown={handlePointerDown}
                className="absolute left-0 top-0 cursor-grab active:cursor-grabbing p-16 bg-[#FFFCF9] rounded-sm border border-slate-200/60 select-none will-change-transform"
                style={{
                    width: `${CARD_WIDTH}px`,
                    height: `${CARD_HEIGHT}px`,
                    opacity: isReady ? 1 : 0,
                }}
            >
                <div className="flex flex-col items-center justify-center h-full gap-y-8 pointer-events-none mix-blend-multiply">
                    <div className="flex flex-wrap justify-center items-center content-center h-full max-w-lg gap-x-6 gap-y-4">
                        {sectionKeys.map((key) => (
                            <span key={key} className="text-3xl md:text-4xl font-semibold tracking-tighter text-slate-800 whitespace-nowrap" style={{ fontFeatureSettings: '"palt"' }}>
                                {sections[key]}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="absolute inset-0 bg-slate-500 opacity-[0.03] pointer-events-none rounded-sm" />
            </div>

            <motion.p
                className="fixed bottom-12 left-0 right-0 text-center text-[10px] text-slate-300 font-light tracking-[0.2em] uppercase pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
            >
                Throw away to forget
            </motion.p>
        </div>
    );
};
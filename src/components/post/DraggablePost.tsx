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

        // ★重要: 計算精度を極限まで上げる（これでズレ・伸びを物理的に排除する）
        // 通常は6程度ですが、20まで上げることで「完全剛体」に近い結合を実現します
        engine.positionIterations = 10;
        engine.velocityIterations = 10;
        engine.constraintIterations = 20;

        engineRef.current = engine;

        // 2. Create Card Body
        const cardBody = Matter.Bodies.rectangle(cw / 2, ch / 2, CARD_WIDTH, CARD_HEIGHT, {
            frictionAir: 0.05, // 空気抵抗：高めに設定して「ネットリした重さ」を出す
            restitution: 0.4,  // 反発係数
            density: 0.01,     // 密度：重くする（0.001 -> 0.01）
        });
        cardBodyRef.current = cardBody;

        // 慣性モーメント（回転しにくさ）の調整
        // 密度を上げた分、回転しにくくなりすぎるのを防ぐため、少しだけ数値を下げる
        // これにより「重いけど、端を持つと回る」挙動になる
        Matter.Body.setInertia(cardBody, cardBody.inertia * 0.8);

        Matter.World.add(engine.world, cardBody);

        // 3. Game Loop
        let animationFrameId: number;

        const update = () => {
            // 物理時間を進める
            Matter.Engine.update(engine, 1000 / 60);

            if (cardBody) {
                const isDragging = dragConstraintRef.current !== null;

                // ■ 回転・移動の減衰コントロール
                // 掴んでいる時 (0.8): 暴れすぎないように少し抑えるが、手の動き（トルク）はしっかり伝える
                // 離している時 (0.999): 慣性で滑らせる
                const angularDamping = isDragging ? 0.8 : 0.999;

                // Matter.jsの計算値に対して手動ブレーキを適用
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

        // 掴んだ瞬間に物理速度を完全停止（キャッチの安定化）
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
            // ★ここが「ズレない」ための核心設定
            stiffness: 1,   // 最大硬度。バネではなく「棒」にする。
            damping: 0.05,  // 振動を抑えるための最小限の減衰。これ以上増やすと遅延（ズレ）の原因になる。
            length: 0,      // 距離ゼロで拘束
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
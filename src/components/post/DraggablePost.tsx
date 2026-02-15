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
        engineRef.current = engine;

        // 2. Create Card Body
        const cardBody = Matter.Bodies.rectangle(cw / 2, ch / 2, CARD_WIDTH, CARD_HEIGHT, {
            frictionAir: 0.03, // 適度な空気抵抗
            restitution: 0.5,
            density: 0.002,
        });
        cardBodyRef.current = cardBody;

        // ★修正: getInertia ではなく .inertia プロパティを使用
        // 0.2 程度に設定することで、端を持った時の回転が非常にスムーズになります
        Matter.Body.setInertia(cardBody, cardBody.inertia * 0.2);

        Matter.World.add(engine.world, cardBody);

        // 3. Game Loop
        let animationFrameId: number;
        const update = () => {
            // 物理演算を1ステップ進める
            Matter.Engine.update(engine, 1000 / 60);

            if (cardBody && cardRef.current) {
                const { x, y } = cardBody.position;
                const angle = cardBody.angle;

                // ドラッグ中かどうかで減衰を変える
                const isDragging = dragConstraintRef.current !== null;
                const angularDamping = isDragging ? 0.92 : 0.995;
                Matter.Body.setAngularVelocity(cardBody, cardBody.angularVelocity * angularDamping);

                // DOMへ描画
                cardRef.current.style.transform = `translate(${x - CARD_WIDTH / 2}px, ${y - CARD_HEIGHT / 2}px) rotate(${angle}rad)`;

                // 影の計算
                const speed = cardBody.speed;
                const shadowBlur = Math.min(speed * 2 + 10, 50);
                const shadowOpacity = Math.min(speed * 0.01 + 0.1, 0.25);
                const shadowOffset = Math.min(speed + 5, 20);
                const dx = x - cw / 2;
                const dy = y - ch / 2;
                const dist = Math.sqrt(dx * dx + dy * dy) || 1;
                cardRef.current.style.boxShadow = `${(dx / dist) * -shadowOffset}px ${(dy / dist) * -shadowOffset + shadowOffset}px ${shadowBlur}px rgba(0,0,0,${shadowOpacity})`;

                // 画面外判定
                const margin = 400;
                if (x < -margin || x > cw + margin || y < -margin || y > ch + margin) {
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

    const handlePointerDown = useCallback((e: React.PointerEvent) => {
        if (!cardBodyRef.current || !engineRef.current) return;

        const clientX = e.clientX;
        const clientY = e.clientY;
        const body = cardBodyRef.current;

        // 掴んだ瞬間の速度を少し殺して安定させる
        Matter.Body.setVelocity(body, { x: body.velocity.x * 0.5, y: body.velocity.y * 0.5 });

        // ★重要: 起点ズレを防ぐためのローカル座標計算
        const bodyPos = body.position;
        const offsetVector = { x: clientX - bodyPos.x, y: clientY - bodyPos.y };
        const localPoint = Matter.Vector.rotate(offsetVector, -body.angle);

        // ★修正: stiffness を 0.1 程度に下げ、「粘り」を持たせることで intentionallies 風の重みを出す
        // 1.0 だと遊びがなく、物理演算がカクつく原因になります
        const constraint = Matter.Constraint.create({
            pointA: { x: clientX, y: clientY },
            bodyB: body,
            pointB: localPoint,
            stiffness: 0.15, // ゴムのような粘り気のある追従
            damping: 0.05,
            length: 0,
            render: { visible: false }
        });

        dragConstraintRef.current = constraint;
        Matter.World.add(engineRef.current.world, constraint);

        const onPointerMove = (moveEvent: PointerEvent) => {
            if (dragConstraintRef.current) {
                dragConstraintRef.current.pointA = { x: moveEvent.clientX, y: moveEvent.clientY };
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
        <div ref={containerRef} className="fixed inset-0 overflow-hidden touch-none">
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
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
            >
                Throw away to forget
            </motion.p>
        </div>
    );
};
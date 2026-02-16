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
    // 初期サイズは0にしておき、計算完了まで表示しない（チラつき防止）
    const [cardSize, setCardSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        if (!cardRef.current) return;

        const cw = window.innerWidth;
        const ch = window.innerHeight;

        // ■ 共通サイズ計算ロジック（PostAnimationと完全に一致させる）
        const targetWidth = Math.min(cw * 0.9, 960);
        const targetHeight = Math.max(targetWidth * 0.55, 400);

        setCardSize({ width: targetWidth, height: targetHeight });

        // 1. Setup Engine
        const engine = Matter.Engine.create();
        engine.gravity.y = 0;
        engine.gravity.x = 0;

        engine.positionIterations = 8;
        engine.velocityIterations = 8;
        engine.constraintIterations = 8;

        engineRef.current = engine;

        // 2. Create Card Body
        const cardBody = Matter.Bodies.rectangle(cw / 2, ch / 2, targetWidth, targetHeight, {
            density: 0.005,
            frictionAir: 0.06,
            restitution: 0.4,
        });
        cardBodyRef.current = cardBody;

        Matter.Body.setInertia(cardBody, cardBody.inertia * 0.8);
        Matter.World.add(engine.world, cardBody);

        // 3. Game Loop
        let animationFrameId: number;

        const update = () => {
            Matter.Engine.update(engine, 1000 / 60);

            if (cardBody) {
                const isDragging = dragConstraintRef.current !== null;

                // ドラッグ中の挙動制御
                cardBody.frictionAir = isDragging ? 0.02 : 0.06;
                const angularDamping = isDragging ? 0.9 : 0.999;
                Matter.Body.setAngularVelocity(cardBody, cardBody.angularVelocity * angularDamping);

                // DOM反映
                if (cardRef.current) {
                    const { x, y } = cardBody.position;
                    const angle = cardBody.angle;

                    cardRef.current.style.transform = `translate(${x - targetWidth / 2}px, ${y - targetHeight / 2}px) rotate(${angle}rad)`;

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
                const margin = Math.max(targetWidth, targetHeight);
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

    const handlePointerDown = useCallback((e: React.PointerEvent) => {
        if (!cardBodyRef.current || !engineRef.current) return;
        e.stopPropagation();

        const body = cardBodyRef.current;
        Matter.Body.setVelocity(body, { x: 0, y: 0 });
        Matter.Body.setAngularVelocity(body, 0);

        const clientX = e.clientX;
        const clientY = e.clientY;
        const bodyPos = body.position;

        const offsetVector = { x: clientX - bodyPos.x, y: clientY - bodyPos.y };
        const localPoint = Matter.Vector.rotate(offsetVector, -body.angle);

        const constraint = Matter.Constraint.create({
            pointA: { x: clientX, y: clientY },
            bodyB: body,
            pointB: localPoint,
            stiffness: 0.25,
            damping: 0.1,
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
                    width: `${cardSize.width}px`,
                    height: `${cardSize.height}px`,
                    opacity: isReady ? 1 : 0, // サイズ計算と物理演算の準備ができるまで隠す
                }}
            >
                <div className="flex flex-col items-center justify-center h-full gap-y-8 pointer-events-none mix-blend-multiply">
                    <div className="flex flex-wrap justify-center items-center content-center h-full w-full gap-x-6 gap-y-4">
                        {sectionKeys.map((key) => (
                            <span key={key} className="text-3xl md:text-4xl text-slate-800 whitespace-nowrap leading-relaxed" style={{ fontFeatureSettings: '"palt"' }}>
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
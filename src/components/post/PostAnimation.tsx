'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { TankaSections } from '@/types/post';

interface PostAnimationProps {
    sections: TankaSections;
    onComplete: () => void;
}

export const PostAnimation = ({ sections, onComplete }: PostAnimationProps) => {
    const sectionKeys: (keyof TankaSections)[] = ['kami1', 'kami2', 'kami3', 'shimo1', 'shimo2'];

    // アニメーション用のグローバルインデックス（遅延計算用）
    let globalCharIndex = 0;

    // DraggablePostと同じサイズ計算（レイアウトの一致用）
    const [cardSize, setCardSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        // 1. サイズ計算
        const updateSize = () => {
            const cw = window.innerWidth;
            const targetWidth = Math.min(cw * 0.9, 960);
            const targetHeight = Math.max(targetWidth * 0.55, 400);
            setCardSize({ width: targetWidth, height: targetHeight });
        };

        updateSize();
        window.addEventListener('resize', updateSize);

        // 2. 自動遷移タイマー（文字数に基づいて計算）
        // (全文字数 * 0.05s) + (5行 * 0.2s) + 読了の余韻(2s)
        const totalChars = Object.values(sections).join('').length;
        const totalDuration = (totalChars * 50) + (5 * 200) + 2000;

        const timer = setTimeout(() => {
            onComplete();
        }, totalDuration);

        return () => {
            window.removeEventListener('resize', updateSize);
            clearTimeout(timer);
        };
    }, [onComplete, sections]);

    return (
        <motion.div
            className="fixed inset-0 flex items-center justify-center bg-white z-50 overflow-hidden"
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            {/* 透明なコンテナ（サイズと位置をカード画面と完全に一致させる） */}
            <div
                className="relative p-16 select-none"
                style={{
                    width: cardSize.width ? `${cardSize.width}px` : 'auto',
                    height: cardSize.height ? `${cardSize.height}px` : 'auto',
                    opacity: cardSize.width ? 1 : 0
                }}
            >
                <div className="flex flex-col items-center justify-center h-full gap-y-8 pointer-events-none mix-blend-multiply">
                    <div className="flex flex-wrap justify-center items-center content-center h-full w-full gap-x-6 gap-y-4">
                        {sectionKeys.map((key, sIndex) => {
                            const chars = sections[key].split('');

                            // 行単位のラッパー（DraggablePostのスタイルを継承しつつ、文字単位アニメのためにflexにする）
                            return (
                                <span
                                    key={key}
                                    className="text-3xl md:text-4xl text-slate-800 whitespace-nowrap leading-relaxed flex"
                                    style={{ fontFeatureSettings: '"palt"' }}
                                >
                                    {chars.map((char, cIndex) => {
                                        // animation.ts の遅延ロジック
                                        const delay = globalCharIndex * 0.05 + sIndex * 0.2;
                                        globalCharIndex++;

                                        return (
                                            <motion.span
                                                key={`${key}-${cIndex}`}
                                                // animation.ts のアニメーション設定
                                                initial={{ opacity: 0, x: -20, filter: 'blur(10px)' }}
                                                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                                                transition={{
                                                    duration: 0.4,
                                                    delay: delay,
                                                    ease: [0.16, 1, 0.3, 1]
                                                }}
                                            >
                                                {char}
                                            </motion.span>
                                        );
                                    })}
                                </span>
                            );
                        })}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
'use client';

import React, { useEffect, useState, useMemo } from 'react'; // useMemoを追加
import { motion } from 'framer-motion';
import { TankaSections } from '@/types/post';

interface PostAnimationProps {
    sections: TankaSections;
    onComplete: () => void;
}

export const PostAnimation = ({ sections, onComplete }: PostAnimationProps) => {
    // ★修正: useMemoを使ってsectionKeysをメモ化
    // これにより、setCardSizeによる再レンダリング時に新しい配列が生成されるのを防ぎ、
    // useEffectの無限ループを回避します。
    const sectionKeys = useMemo(() => {
        const allKeys: (keyof TankaSections)[] = ['kami1', 'kami2', 'kami3', 'shimo1', 'shimo2'];
        return allKeys.filter(key => sections[key] && sections[key]?.trim() !== '');
    }, [sections]);

    let globalCharIndex = 0;
    const [cardSize, setCardSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const updateSize = () => {
            const cw = window.innerWidth;
            const targetWidth = Math.min(cw * 0.9, 960);
            const targetHeight = Math.max(targetWidth * 0.55, 400);
            setCardSize({ width: targetWidth, height: targetHeight });
        };

        updateSize();
        window.addEventListener('resize', updateSize);

        // 文字数ベースで完了時間を計算
        // sectionKeysはメモ化されているため、依存配列に入れても無限ループしません
        const validText = sectionKeys.map(k => sections[k]).join('');
        const totalChars = validText.length;
        const totalDuration = (totalChars * 50) + (sectionKeys.length * 200) + 2000;

        const timer = setTimeout(() => {
            onComplete();
        }, totalDuration);

        return () => {
            window.removeEventListener('resize', updateSize);
            clearTimeout(timer);
        };
    }, [onComplete, sections, sectionKeys]);

    return (
        <motion.div
            className="fixed inset-0 flex items-center justify-center bg-white z-50 overflow-hidden"
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
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
                            const text = sections[key] || '';
                            const chars = text.split('');

                            return (
                                <span
                                    key={key}
                                    className="text-3xl md:text-4xl text-slate-800 whitespace-nowrap leading-relaxed flex"
                                    style={{ fontFeatureSettings: '"palt"' }}
                                >
                                    {chars.map((char, cIndex) => {
                                        const delay = globalCharIndex * 0.05 + sIndex * 0.2;
                                        globalCharIndex++;

                                        return (
                                            <motion.span
                                                key={`${key}-${cIndex}`}
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
'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { TankaSections } from '@/types/post';

interface PostAnimationProps {
    sections: TankaSections;
    onComplete?: () => void; // 追加：完了時のコールバック
}

export const PostAnimation = ({ sections, onComplete }: PostAnimationProps) => {
    const sectionKeys: (keyof TankaSections)[] = ['kami1', 'kami2', 'kami3', 'shimo1', 'shimo2'];
    let globalCharIndex = 0;

    // アニメーション総時間の計算
    // (31文字 * 0.05) + (5節 * 0.2) + 余裕を持たせて2秒後くらいに切り替え
    useEffect(() => {
        if (onComplete) {
            const totalDuration = (31 * 50) + (5 * 200) + 2000;
            const timer = setTimeout(() => {
                onComplete();
            }, totalDuration);
            return () => clearTimeout(timer);
        }
    }, [onComplete]);

    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh]">
            <div className="flex flex-wrap items-center justify-center max-w-2xl gap-y-6">
                {sectionKeys.map((key, sIndex) => {
                    const chars = sections[key].split('');

                    return (
                        <div key={key} className="flex mr-[1.5em] last:mr-0">
                            {chars.map((char, cIndex) => {
                                const delay = globalCharIndex * 0.05 + sIndex * 0.2;
                                globalCharIndex++;

                                return (
                                    <motion.span
                                        key={`${key}-${cIndex}`}
                                        className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900"
                                        initial={{ opacity: 0, x: -20, filter: 'blur(10px)' }}
                                        animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                                        transition={{
                                            duration: 0.4,
                                            delay: delay,
                                            ease: [0.16, 1, 0.3, 1],
                                        }}
                                    >
                                        {char}
                                    </motion.span>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
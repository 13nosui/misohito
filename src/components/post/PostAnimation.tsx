'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TankaSections } from '@/types/post';

interface PostAnimationProps {
    sections: TankaSections;
}

export const PostAnimation = ({ sections }: PostAnimationProps) => {
    const sectionKeys: (keyof TankaSections)[] = ['kami1', 'kami2', 'kami3', 'shimo1', 'shimo2'];

    // 文字ごとのディレイを蓄積して計算するための変数
    let globalCharIndex = 0;

    return (
        <div className="flex flex-col items-center justify-center min-h-[50vh]">
            {/* ここに将来的に「ロゴ」や「物理的な枠」が入るかもしれません。
        現在はシンプルに文字だけを表示します。
      */}
            <div className="flex flex-wrap items-center justify-center max-w-2xl gap-y-6">
                {sectionKeys.map((key, sIndex) => {
                    const chars = sections[key].split('');

                    return (
                        <div key={key} className="flex mr-[1.5em] last:mr-0"> {/* 節ごとの間隔 */}
                            {chars.map((char, cIndex) => {
                                // 中村勇吾風リズムの計算
                                // 文字間は0.05秒と高速、節の間で0.2秒のタメを作る
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
                                            ease: [0.16, 1, 0.3, 1], // 切れ味鋭いイージング
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
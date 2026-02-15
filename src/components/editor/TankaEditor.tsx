'use client';

import React, { useState } from 'react';
import * as Label from '@radix-ui/react-label';
import { useTankaEditor } from '@/hooks/useTankaEditor';
import { TankaSections } from '@/types/post';
import { PostAnimation } from '@/components/post/PostAnimation'; // ←追加

export const TankaEditor = () => {
    const { sections, inputRefs, handleChange, LIMITS } = useTankaEditor();
    const [isPosted, setIsPosted] = useState(false); // 投稿状態管理

    // 全ての節が埋まっているかチェック
    const isComplete = Object.keys(LIMITS).every(
        (key) => sections[key as keyof TankaSections].length === LIMITS[key as keyof TankaSections]
    );

    const handlePost = () => {
        if (isComplete) {
            setIsPosted(true);
        }
    };

    // 投稿済みならアニメーションを表示
    if (isPosted) {
        return <PostAnimation sections={sections} />;
    }

    return (
        <div className="flex flex-col gap-12 p-6 w-full max-w-3xl mx-auto">

            {/* 入力エリア */}
            <div className="flex flex-wrap gap-4 items-end justify-center">
                {(Object.keys(LIMITS) as Array<keyof TankaSections>).map((key) => (
                    <div key={key} className="flex flex-col items-center gap-3">
                        <Label.Root
                            className="text-[10px] text-slate-400 font-medium uppercase tracking-widest"
                            htmlFor={key}
                        >
                            {LIMITS[key]}
                        </Label.Root>
                        <input
                            ref={inputRefs[key]}
                            id={key}
                            type="text"
                            value={sections[key]}
                            onChange={(e) => handleChange(e, key)}
                            placeholder="・"
                            className={`
                text-center text-2xl font-medium border-b transition-all outline-none bg-transparent
                ${sections[key].length === LIMITS[key]
                                    ? 'border-slate-800 text-slate-900'
                                    : 'border-slate-200 text-slate-400 focus:border-slate-400'}
              `}
                            style={{
                                width: `${LIMITS[key] * 1.5 + 1}rem` // 文字数に応じた幅
                            }}
                        />
                    </div>
                ))}
            </div>

            {/* プレビュー & アクションエリア */}
            <div className="flex flex-col items-center gap-8 animate-in fade-in duration-700">
                <div className="text-center">
                    <p className="text-xs text-slate-400 mb-4 font-light tracking-widest">PREVIEW</p>
                    <p className="text-lg tracking-wider text-slate-600 font-serif">
                        {Object.values(sections).filter(Boolean).join('　')}
                    </p>
                </div>

                {/* 投稿ボタン：完了時のみ表示 */}
                <button
                    onClick={handlePost}
                    disabled={!isComplete}
                    className={`
            px-8 py-3 rounded-full text-sm font-bold tracking-widest transition-all duration-500
            ${isComplete
                            ? 'bg-slate-900 text-white hover:bg-slate-700 translate-y-0 opacity-100'
                            : 'bg-slate-200 text-slate-400 translate-y-4 opacity-0 cursor-not-allowed'}
          `}
                >
                    詠む
                </button>
            </div>
        </div>
    );
};
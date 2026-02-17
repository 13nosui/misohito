'use client';

import React, { useState } from 'react';
import { useTankaEditor } from '@/hooks/useTankaEditor';
// PostAnimation, DraggablePost のインポートは削除（page.tsxで管理するため）

// ★追加: propsを受け取るように変更
interface TankaEditorProps {
    onComplete?: (sections: any) => void;
}

// ★修正: propsを受け取る
export const TankaEditor = ({ onComplete }: TankaEditorProps) => {
    const { sections, inputRefs, handleChange, LIMITS, mode, setMode, activeKeys } = useTankaEditor();

    // ★修正: 内部的なstatus管理（animating, viewing）は削除し、単なる入力フォームに徹する

    const isComplete = activeKeys.every(
        (key) => (sections[key] ?? '').length === LIMITS[key]
    );

    const handlePost = () => {
        if (isComplete && onComplete) {
            onComplete(sections); // 親コンポーネントへデータを渡す
        }
    };

    return (
        <div className="w-full max-w-2xl mx-auto p-8 relative min-h-[60vh] flex flex-col justify-center">
            {/* ... HAIKUモード固定のため、モード切替タブを非表示 ... */}
            {/* <div className="absolute top-0 right-0 p-4 flex gap-4 text-xs font-medium tracking-widest text-slate-400">
                <button
                    onClick={() => setMode('tanka')}
                    className={`transition-colors duration-300 ${mode === 'tanka' ? 'text-slate-900 underline underline-offset-4' : 'hover:text-slate-600'}`}
                >
                    TANKA
                </button>
                <button
                    onClick={() => setMode('haiku')}
                    className={`transition-colors duration-300 ${mode === 'haiku' ? 'text-slate-900 underline underline-offset-4' : 'hover:text-slate-600'}`}
                >
                    HAIKU
                </button>
            </div> */}

            <div className="flex flex-col gap-12 mb-16">
                {activeKeys.map((key) => (
                    <div key={key} className="flex flex-col items-center gap-2">
                        <label className="text-[10px] text-slate-400 font-light tracking-[0.2em] uppercase">
                            {key.toUpperCase()}
                        </label>
                        <input
                            ref={inputRefs[key]}
                            type="text"
                            value={sections[key] ?? ''}
                            onChange={(e) => handleChange(e, key)}
                            className={`
                                text-center text-3xl md:text-4xl font-medium border-b transition-all outline-none bg-transparent
                                ${(sections[key] ?? '').length === LIMITS[key]
                                    ? 'border-slate-800 text-slate-900'
                                    : 'border-slate-200 text-slate-400 focus:border-slate-400'}
                            `}
                            style={{ width: `${LIMITS[key] * 1.5 + 1}rem` }}
                        />
                    </div>
                ))}
            </div>

            <div className="flex flex-col items-center gap-8">
                <div className="text-center">
                    <p className="text-xs text-slate-400 mb-4 font-light tracking-widest">PREVIEW</p>
                    <p className="text-lg tracking-wider text-slate-600 font-serif">
                        {activeKeys.map(key => sections[key] ?? '').filter(Boolean).join('　')}
                    </p>
                </div>

                <button
                    onClick={handlePost}
                    disabled={!isComplete}
                    className={`
                        px-8 py-3 rounded-full text-sm font-bold tracking-widest transition-all duration-500
                        ${isComplete
                            ? 'bg-slate-900 text-white hover:bg-slate-700 translate-y-0 opacity-100 shadow-lg'
                            : 'bg-slate-200 text-slate-400 translate-y-4 opacity-0 cursor-not-allowed'}
                    `}
                >
                    詠む
                </button>
            </div>
        </div>
    );
};
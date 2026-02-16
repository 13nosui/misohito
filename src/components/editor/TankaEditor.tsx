'use client';

import React, { useState } from 'react';
import { useTankaEditor, EditorMode } from '@/hooks/useTankaEditor'; // EditorModeをインポート
import { TankaSections } from '@/types/post';
import { PostAnimation } from '@/components/post/PostAnimation';
import { DraggablePost } from '@/components/post/DraggablePost';

type EditorStatus = 'editing' | 'animating' | 'viewing';

export const TankaEditor = () => {
    // mode, setMode, activeKeys を受け取る
    const { sections, inputRefs, handleChange, LIMITS, mode, setMode, activeKeys } = useTankaEditor();
    const [status, setStatus] = useState<EditorStatus>('editing');

    // ★修正: activeKeys（現在のモードで必要なキー）だけで入力完了を判定する
    const isComplete = activeKeys.every(
        (key) => sections[key].length === LIMITS[key]
    );

    const handlePost = () => {
        if (isComplete) {
            setStatus('animating');
        }
    };

    const handleAnimationComplete = () => {
        setStatus('viewing');
    };

    const handleDiscard = () => {
        setStatus('editing');
    };

    // 編集画面でない時は、それぞれのコンポーネントを表示
    if (status === 'animating') {
        return <PostAnimation sections={sections} onComplete={handleAnimationComplete} />;
    }

    if (status === 'viewing') {
        return <DraggablePost sections={sections} onDelete={handleDiscard} />;
    }

    return (
        <div className="w-full max-w-2xl mx-auto p-8 relative min-h-[60vh] flex flex-col justify-center">

            {/* ★追加: モード切り替えスイッチ */}
            <div className="absolute top-0 right-0 p-4 flex gap-4 text-xs font-medium tracking-widest text-slate-400">
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
            </div>

            <div className="flex flex-col gap-12 mb-16">
                {/* ★修正: activeKeys を使って入力欄を動的に生成 */}
                {activeKeys.map((key) => (
                    <div key={key} className="flex flex-col items-center gap-2">
                        <label className="text-[10px] text-slate-400 font-light tracking-[0.2em] uppercase">
                            {key.toUpperCase()}
                        </label>
                        <input
                            ref={inputRefs[key]}
                            type="text"
                            value={sections[key]}
                            onChange={(e) => handleChange(e, key)}
                            className={`
                                text-center text-3xl md:text-4xl font-medium border-b transition-all outline-none bg-transparent
                                ${sections[key].length === LIMITS[key]
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
                        {/* activeKeysに基づいてプレビューを表示 */}
                        {activeKeys.map(key => sections[key]).filter(Boolean).join('　')}
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
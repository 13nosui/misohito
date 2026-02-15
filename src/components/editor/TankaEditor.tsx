'use client';

import React, { useState } from 'react';
import * as Label from '@radix-ui/react-label';
import { useTankaEditor } from '@/hooks/useTankaEditor';
import { TankaSections } from '@/types/post';
import { PostAnimation } from '@/components/post/PostAnimation';
import { DraggablePost } from '@/components/post/DraggablePost'; // ← 追加

// 状態の定義
type EditorStatus = 'editing' | 'animating' | 'viewing';

export const TankaEditor = () => {
    const { sections, inputRefs, handleChange, LIMITS } = useTankaEditor();
    const [status, setStatus] = useState<EditorStatus>('editing'); // 状態管理

    const isComplete = Object.keys(LIMITS).every(
        (key) => sections[key as keyof TankaSections].length === LIMITS[key as keyof TankaSections]
    );

    const handlePost = () => {
        if (isComplete) {
            setStatus('animating');
        }
    };

    // アニメーション完了後の処理
    const handleAnimationComplete = () => {
        setStatus('viewing');
    };

    // 投げ捨てられた（削除された）時の処理
    const handleDiscard = () => {
        // 本当はここでデータをクリアする処理などを入れる
        // 今回はデモとして入力状態に戻すだけ（文字は残したままにするか、消すか）
        // 文字を消す場合は useTankaEditor に reset 関数を追加する必要がありますが、
        // いったん「投げ捨てた快感」のあとに、また編集画面に戻る動きにします。
        setStatus('editing');
    };

    // ■ 状態：アニメーション中
    if (status === 'animating') {
        return <PostAnimation sections={sections} onComplete={handleAnimationComplete} />;
    }

    // ■ 状態：鑑賞 & 物理演算モード
    if (status === 'viewing') {
        return <DraggablePost sections={sections} onDelete={handleDiscard} />;
    }

    // ■ 状態：入力中 (デフォルト)
    return (
        <div className="flex flex-col gap-12 p-6 w-full max-w-3xl mx-auto animate-in fade-in duration-500">
            <div className="flex flex-wrap gap-4 items-end justify-center">
                {(Object.keys(LIMITS) as Array<keyof TankaSections>).map((key) => (
                    <div key={key} className="flex flex-col items-center gap-3">
                        <Label.Root className="text-[10px] text-slate-400 font-medium uppercase tracking-widest">
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
                            style={{ width: `${LIMITS[key] * 1.5 + 1}rem` }}
                        />
                    </div>
                ))}
            </div>

            <div className="flex flex-col items-center gap-8">
                <div className="text-center">
                    <p className="text-xs text-slate-400 mb-4 font-light tracking-widest">PREVIEW</p>
                    <p className="text-lg tracking-wider text-slate-600 font-serif">
                        {Object.values(sections).filter(Boolean).join('　')}
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
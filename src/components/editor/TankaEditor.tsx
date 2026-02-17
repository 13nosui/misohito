'use client';

import React from 'react';
import { useTankaEditor } from '@/hooks/useTankaEditor';

interface TankaEditorProps {
    onComplete?: (sections: any) => void;
}

export const TankaEditor = ({ onComplete }: TankaEditorProps) => {
    const {
        sections,
        inputRefs,
        handleChange,
        handleCompositionStart,
        handleCompositionEnd,
        LIMITS,
        activeKeys
    } = useTankaEditor('HAIKU');

    const isComplete = activeKeys.every(
        (key) => (sections[key] ?? '').length === LIMITS[key]
    );

    const handlePost = () => {
        if (isComplete && onComplete) {
            onComplete(sections);
        }
    };

    return (
        <div className="w-full max-w-lg mx-auto p-6 flex flex-col justify-center min-h-[60vh]">
            <div className="mb-12">
                <h2 className="text-xs font-mono text-gray-400 mb-8 text-center tracking-widest">
                    NEW ENTRY
                </h2>

                <div className="flex flex-col items-center gap-8">
                    {activeKeys.map((key) => (
                        <div key={key} className="relative flex flex-col items-center w-full">
                            <input
                                ref={inputRefs[key]}
                                type="text"
                                value={sections[key] ?? ''}
                                onChange={(e) => handleChange(e, key)}
                                onCompositionStart={handleCompositionStart}
                                onCompositionEnd={(e) => handleCompositionEnd(e, key)}
                                placeholder={"_ ".repeat(LIMITS[key])}
                                className={`
                                    text-center text-2xl font-sans font-bold bg-transparent outline-none transition-colors duration-200
                                    ${(sections[key] ?? '').length === LIMITS[key]
                                        ? 'text-gray-900 dark:text-white'
                                        : 'text-gray-400'}
                                `}
                                // 全角幅に合わせる計算
                                style={{ width: `${LIMITS[key] + 1}em`, maxWidth: '100%' }}
                            />
                            {/* 文字数カウンターのような下線装飾 */}
                            <div className={`h-0.5 mt-2 transition-all duration-300 ${(sections[key] ?? '').length === LIMITS[key]
                                    ? 'w-full bg-blue-500'
                                    : 'w-1/3 bg-gray-200'
                                }`} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-center">
                <button
                    onClick={handlePost}
                    disabled={!isComplete}
                    className={`
                        px-12 py-4 rounded-lg text-sm font-bold tracking-widest transition-all duration-200
                        ${isComplete
                            ? 'bg-blue-600 text-white shadow-lg hover:bg-blue-500 transform hover:-translate-y-0.5'
                            : 'bg-gray-200 text-gray-400 cursor-not-allowed'}
                    `}
                >
                    RECORD
                </button>
            </div>
        </div>
    );
};
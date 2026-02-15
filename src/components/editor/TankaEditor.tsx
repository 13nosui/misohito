'use client';

import React from 'react';
import * as Label from '@radix-ui/react-label';
import { useTankaEditor } from '@/hooks/useTankaEditor';
import { TankaSections } from '@/types/post';

export const TankaEditor = () => {
    const { sections, inputRefs, handleChange, LIMITS } = useTankaEditor();

    return (
        <div className="flex flex-col gap-8 p-6 max-w-2xl mx-auto bg-white/50 backdrop-blur-sm rounded-xl">
            <div className="flex gap-2 items-end justify-center">
                {(Object.keys(LIMITS) as Array<keyof TankaSections>).map((key, index) => (
                    <div key={key} className="flex flex-col items-center gap-2">
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
                w-12 h-16 text-center text-xl font-medium border-b-2 transition-all outline-none
                ${sections[key].length === LIMITS[key]
                                    ? 'border-slate-900 text-slate-900'
                                    : 'border-slate-200 text-slate-400 focus:border-slate-400'}
              `}
                        />
                    </div>
                ))}
            </div>

            {/* プレビューエリア（全角スペース区切り） */}
            <div className="mt-8 p-4 text-center border-t border-slate-100">
                <p className="text-sm text-slate-400 mb-2 font-light">Preview</p>
                <p className="text-lg tracking-wider text-slate-800 break-all">
                    {Object.values(sections).filter(Boolean).join('　')}
                </p>
            </div>
        </div>
    );
};
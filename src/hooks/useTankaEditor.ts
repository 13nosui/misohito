import { useState, useRef, ChangeEvent } from 'react';
import { TankaSections } from '@/types/post';

const LIMITS: Record<keyof TankaSections, number> = {
    kami1: 5,
    kami2: 7,
    kami3: 5,
    shimo1: 7,
    shimo2: 7,
};

export const useTankaEditor = () => {
    const [sections, setSections] = useState<TankaSections>({
        kami1: '', kami2: '', kami3: '', shimo1: '', shimo2: ''
    });

    // 【修正点】useRef は必ずトップレベルで個別に呼び出す
    const kami1Ref = useRef<HTMLInputElement>(null);
    const kami2Ref = useRef<HTMLInputElement>(null);
    const kami3Ref = useRef<HTMLInputElement>(null);
    const shimo1Ref = useRef<HTMLInputElement>(null);
    const shimo2Ref = useRef<HTMLInputElement>(null);

    // 参照用にまとめる
    const inputRefs = {
        kami1: kami1Ref,
        kami2: kami2Ref,
        kami3: kami3Ref,
        shimo1: shimo1Ref,
        shimo2: shimo2Ref,
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>, key: keyof TankaSections) => {
        const value = e.target.value;
        const limit = LIMITS[key];

        // 文字数制限内であれば更新
        if (value.length <= limit) {
            setSections(prev => ({ ...prev, [key]: value }));
        }

        // ぴったり埋まったら次のフィールドへ自動フォーカス
        if (value.length === limit) {
            const keys = Object.keys(LIMITS) as (keyof TankaSections)[];
            const currentIndex = keys.indexOf(key);
            const nextKey = keys[currentIndex + 1];

            if (nextKey) {
                inputRefs[nextKey].current?.focus();
            }
        }
    };

    return { sections, inputRefs, handleChange, LIMITS };
};
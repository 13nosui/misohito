import { useState, useRef, ChangeEvent, CompositionEvent } from 'react';
import { TankaSections } from '@/types/post';

export type EditorMode = 'tanka' | 'haiku';

const LIMITS: Record<keyof TankaSections, number> = {
    kami1: 5,
    kami2: 7,
    kami3: 5,
    shimo1: 7,
    shimo2: 7,
};

export const useTankaEditor = (initialMode: EditorMode = 'haiku') => {
    // 変換中かどうかを同期的に追跡するためのRef
    const isComposingRef = useRef(false);
    const [mode, setMode] = useState<EditorMode>(initialMode);
    const [sections, setSections] = useState<TankaSections>({
        kami1: '', kami2: '', kami3: '', shimo1: '', shimo2: ''
    });

    const kami1Ref = useRef<HTMLInputElement>(null);
    const kami2Ref = useRef<HTMLInputElement>(null);
    const kami3Ref = useRef<HTMLInputElement>(null);
    const shimo1Ref = useRef<HTMLInputElement>(null);
    const shimo2Ref = useRef<HTMLInputElement>(null);

    const inputRefs = {
        kami1: kami1Ref,
        kami2: kami2Ref,
        kami3: kami3Ref,
        shimo1: shimo1Ref,
        shimo2: shimo2Ref,
    };

    const activeKeys: (keyof TankaSections)[] = mode === 'tanka'
        ? ['kami1', 'kami2', 'kami3', 'shimo1', 'shimo2']
        : ['kami1', 'kami2', 'kami3'];

    const handleCompositionStart = () => {
        isComposingRef.current = true;
    };

    const handleCompositionEnd = (e: any, key: keyof TankaSections) => {
        isComposingRef.current = false;

        // 変換確定時の最終的な値をセット
        const finalValue = e.currentTarget.value;
        const trimmedValue = finalValue.slice(0, LIMITS[key]);

        setSections(prev => ({ ...prev, [key]: trimmedValue }));

        // 確定した結果、文字数が上限に達していたら次のフィールドへ
        if (trimmedValue.length >= LIMITS[key]) {
            const nextIndex = activeKeys.indexOf(key) + 1;
            if (nextIndex < activeKeys.length) {
                // 少しだけ遅延させてフォーカスを移動（IMEの確定処理との競合を避ける）
                setTimeout(() => {
                    inputRefs[activeKeys[nextIndex]].current?.focus();
                }, 10);
            }
        }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>, key: keyof TankaSections) => {
        const value = e.target.value;

        // 変換中の場合は、文字数制限をかけずに状態を更新する
        // （「とうこう」などの長いひらがなを入力できるようにするため）
        if (isComposingRef.current) {
            setSections(prev => ({ ...prev, [key]: value }));
            return;
        }

        // 変換中でない通常入力の場合は制限をかける
        const trimmedValue = value.slice(0, LIMITS[key]);
        setSections(prev => ({ ...prev, [key]: trimmedValue }));

        // 制限に達したら次のフォームへ移動
        if (trimmedValue.length === LIMITS[key]) {
            const nextIndex = activeKeys.indexOf(key) + 1;
            if (nextIndex < activeKeys.length) {
                inputRefs[activeKeys[nextIndex]].current?.focus();
            }
        }
    };

    return {
        sections,
        inputRefs,
        handleChange,
        handleCompositionStart,
        handleCompositionEnd,
        LIMITS,
        mode,
        setMode,
        activeKeys
    };
};
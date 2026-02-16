import { useState, useRef, ChangeEvent } from 'react';
import { TankaSections } from '@/types/post';

// モードの型定義
export type EditorMode = 'tanka' | 'haiku';

const LIMITS: Record<keyof TankaSections, number> = {
    kami1: 5,
    kami2: 7,
    kami3: 5,
    shimo1: 7,
    shimo2: 7,
};

export const useTankaEditor = () => {
    // モード切り替え用のstate
    const [mode, setMode] = useState<EditorMode>('tanka');

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

    // モードに応じて、有効なセクションのキー配列を返す
    const activeKeys: (keyof TankaSections)[] = mode === 'tanka'
        ? ['kami1', 'kami2', 'kami3', 'shimo1', 'shimo2']
        : ['kami1', 'kami2', 'kami3'];

    const handleChange = (e: ChangeEvent<HTMLInputElement>, key: keyof TankaSections) => {
        const value = e.target.value;
        const limit = LIMITS[key];

        if (value.length <= limit) {
            setSections(prev => ({ ...prev, [key]: value }));
        }

        // 自動フォーカス移動ロジック
        if (value.length === limit) {
            const nextFieldMap: Record<string, keyof TankaSections | null> = {
                kami1: 'kami2',
                kami2: 'kami3',
                // 俳句モードなら kami3 で終了、短歌なら shimo1 へ
                kami3: mode === 'tanka' ? 'shimo1' : null,
                shimo1: 'shimo2',
                shimo2: null,
            };

            const nextKey = nextFieldMap[key];
            if (nextKey && inputRefs[nextKey]?.current) {
                inputRefs[nextKey].current?.focus();
            }
        }
    };

    // 俳句モードに切り替えた時、不要な下の句データを消去したい場合はここで処理する
    // 今回は「切り替えてもデータは残る（戻せば復活する）」仕様にしておく
    const handleModeChange = (newMode: EditorMode) => {
        setMode(newMode);
    };

    return {
        sections,
        inputRefs,
        handleChange,
        LIMITS,
        mode,
        setMode: handleModeChange,
        activeKeys, // UI側でループ処理に使うキー配列
    };
};
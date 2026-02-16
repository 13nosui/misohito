/**
 * MISOHITO 投稿データの型定義
 */

// スタンプの型定義
export type Stamp = {
    id: string;
    emojiId?: string; // 内部的な識別子。将来的な自作スタンプ用
    label: string;    // 「座布団」「雅」などのラベル
    isPremium: boolean;
    count: number;    // 表示はしないが、裏側で集計や「残響」演出に利用
};

// 5節（5・7・5・7・7）の各セクション
export type TankaSections = {
    kami1: string; // 五
    kami2: string; // 七
    kami3: string; // 五
    shimo1?: string; // 七
    shimo2?: string; // 七
};

// 投稿データのメイン型
export type MisohitoPost = {
    id: string;
    authorName: string;      // 雅号（ペンネーム）
    sections: TankaSections; // 5節に分割されたテキスト
    fullText: string;        // 全角スペースで結合された31文字（表示・検索用）
    createdAt: Date;
    stamps: Stamp[];         // 付与されたスタンプの配列
    isAdvertisement: boolean; // 公式広告（画像あり）かどうかのフラグ
    imageUrl?: string;       // 広告用画像URL（一般ユーザーはundefined）

    // 引用（連鎖）のコンテキスト
    parentPostId?: string;   // 引用元の投稿ID（連作・大喜利用）
};
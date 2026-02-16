'use client';

import React, { useState } from 'react';
import { motion, useAnimation, PanInfo } from 'framer-motion';
import { Post } from '@/types/post';
import { Heart, Trash2 } from 'lucide-react'; // アイコンライブラリ

interface TimelinePostProps {
    post: Post;
    onDelete: (id: string) => void;
}

export const TimelinePost = ({ post, onDelete }: TimelinePostProps) => {
    const controls = useAnimation();
    const [isDragging, setIsDragging] = useState(false);

    // ドラッグ終了時の物理演算判定
    const handleDragEnd = async (event: any, info: PanInfo) => {
        setIsDragging(false);
        const threshold = 200; // 投げ捨て判定の距離
        const velocity = Math.abs(info.velocity.x);

        // 一定距離以上ドラッグ、または勢いよく投げられた場合
        if (Math.abs(info.offset.x) > threshold || velocity > 800) {
            // 画面外へ飛ばすアニメーション
            await controls.start({
                x: info.offset.x > 0 ? 1000 : -1000, // 左右どちらに飛ぶか
                opacity: 0,
                rotate: info.offset.x > 0 ? 45 : -45,
                transition: { duration: 0.4, ease: "easeIn" }
            });
            onDelete(post.id);
        } else {
            // 元の位置に戻る（バネの動き）
            controls.start({ x: 0, opacity: 1, rotate: 0 });
        }
    };

    const sectionKeys = ['kami1', 'kami2', 'kami3', 'shimo1', 'shimo2'] as const;

    return (
        <motion.div
            layout
            drag="x" // 横方向のみドラッグ可能
            dragConstraints={{ left: 0, right: 0 }} // 制約を設けてバネ戻りを有効化
            dragElastic={0.7} // バネの強さ
            onDragStart={() => setIsDragging(true)}
            onDragEnd={handleDragEnd}
            animate={controls}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative w-full max-w-xl mx-auto bg-white p-6 rounded-sm border border-slate-100 shadow-sm mb-6 cursor-grab active:cursor-grabbing touch-pan-y"
            style={{ userSelect: 'none' }}
        >
            {/* ユーザー情報ヘッダー */}
            <div className="flex items-center gap-3 mb-6 border-b border-slate-50 pb-4">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-slate-100 border border-slate-200">
                    {post.author.photoURL ? (
                        <img src={post.author.photoURL} alt={post.author.name} className="w-full h-full object-cover" />
                    ) : (
                        <div className="w-full h-full bg-slate-200" />
                    )}
                </div>
                <div className="flex-1">
                    <p className="text-xs font-bold text-slate-800">{post.author.name}</p>
                    <p className="text-[10px] text-slate-400 tracking-wider">
                        {post.createdAt.toLocaleDateString('ja-JP')}
                    </p>
                </div>
                {/* 投げ捨てガイドアイコン */}
                <div className={`text-slate-200 transition-opacity duration-300 ${isDragging ? 'opacity-100' : 'opacity-0'}`}>
                    <Trash2 size={20} />
                </div>
            </div>

            {/* 短歌本文 */}
            <div className="flex flex-wrap justify-center items-center content-center w-full gap-x-4 gap-y-2 py-4 mb-6">
                {sectionKeys.map((key) => {
                    const text = post.sections[key];
                    if (!text) return null;
                    return (
                        <span key={key} className="text-xl md:text-2xl text-slate-800 font-serif whitespace-nowrap leading-relaxed" style={{ fontFeatureSettings: '"palt"' }}>
                            {text}
                        </span>
                    );
                })}
            </div>

            {/* アクションフッター（スタンプ代わり） */}
            <div className="flex items-center justify-end gap-4 pt-2">
                <button className="flex items-center gap-2 text-slate-400 hover:text-red-400 transition-colors group">
                    <Heart size={18} className="group-hover:fill-red-400" />
                    <span className="text-xs">{post.likes}</span>
                </button>
            </div>
        </motion.div>
    );
};
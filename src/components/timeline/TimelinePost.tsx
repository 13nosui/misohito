'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Post } from '@/types/post';
import { Heart, Trash2 } from 'lucide-react';

interface TimelinePostProps {
    post: Post;
    onDelete: (id: string) => void;
}

export const TimelinePost = ({ post, onDelete }: TimelinePostProps) => {
    // 575のキー配列
    const sectionKeys: (keyof typeof post.sections)[] = ['kami1', 'kami2', 'kami3'];

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="w-full bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-md p-4 mb-3 shadow-sm"
        >
            {/* ヘッダー：日付と削除ボタン */}
            <div className="flex justify-between items-start mb-3 border-b border-gray-100 dark:border-zinc-800 pb-2">
                <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">
                        LOG ID: {post.id.slice(0, 8)}
                    </span>
                    <span className="text-xs text-gray-500 font-sans">
                        {post.createdAt.toLocaleDateString('ja-JP')} {post.createdAt.toLocaleTimeString('ja-JP', { hour: '2-digit', minute: '2-digit' })}
                    </span>
                </div>
                <button
                    onClick={() => onDelete(post.id)}
                    className="text-gray-300 hover:text-red-500 transition-colors p-1"
                    title="削除"
                >
                    <Trash2 size={14} />
                </button>
            </div>

            {/* 本文：横書きリスト表示 */}
            <div className="flex flex-col gap-1 mb-3">
                {sectionKeys.map((key, index) => {
                    const text = post.sections[key];
                    if (!text) return null;
                    return (
                        <div key={key} className="flex items-center gap-3">
                            <span className="text-[10px] text-gray-300 font-mono w-4">
                                {index === 0 ? '01' : index === 1 ? '02' : '03'}
                            </span>
                            <span className="text-base text-gray-800 dark:text-gray-200 font-sans font-medium">
                                {text}
                            </span>
                        </div>
                    );
                })}
            </div>

            {/* フッター：アクション等 */}
            <div className="flex justify-end pt-1">
                <div className="flex items-center gap-1 text-gray-400">
                    <Heart size={14} />
                    <span className="text-[10px] font-mono">{post.likes || 0}</span>
                </div>
            </div>
        </motion.div>
    );
};
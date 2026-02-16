'use client';

import React, { useState } from 'react';
import { TimelinePost } from './TimelinePost';
import { Post } from '@/types/post';
import { motion, AnimatePresence } from 'framer-motion';
import { PenTool } from 'lucide-react';

// モックデータ生成（動作確認用）
const generateMockPosts = (): Post[] => {
    return Array.from({ length: 5 }).map((_, i) => ({
        id: `post-${i}`,
        author: {
            id: `user-${i}`,
            name: i === 0 ? '自分' : `詠み人知らず${i}`,
            photoURL: '', // 画像があればURLを入れる
        },
        sections: {
            kami1: '春過ぎて',
            kami2: '夏来にけらし',
            kami3: '白妙の',
            shimo1: '衣干すてふ',
            shimo2: '天の香具山',
        },
        createdAt: new Date(),
        likes: Math.floor(Math.random() * 20),
    }));
};

interface TimelineProps {
    onOpenEditor: () => void;
}

export const Timeline = ({ onOpenEditor }: TimelineProps) => {
    const [posts, setPosts] = useState<Post[]>(generateMockPosts());

    const handleDelete = (id: string) => {
        // アニメーション後にリストから削除
        setTimeout(() => {
            setPosts((prev) => prev.filter((p) => p.id !== id));
        }, 500);
    };

    return (
        <div className="w-full min-h-screen pt-24 pb-24 px-4 bg-[#fafafa]">
            <div className="max-w-2xl mx-auto space-y-4">
                {/* ヘッダー的な装飾 */}
                <div className="text-center mb-12">
                    <p className="text-[10px] text-slate-300 tracking-[0.3em] uppercase">Timeline</p>
                </div>

                <AnimatePresence mode='popLayout'>
                    {posts.map((post) => (
                        <TimelinePost key={post.id} post={post} onDelete={handleDelete} />
                    ))}
                </AnimatePresence>

                {posts.length === 0 && (
                    <p className="text-center text-slate-300 text-sm mt-20 font-light">
                        塵ひとつなし<br />
                        <span className="text-[10px] opacity-60">No posts remaining.</span>
                    </p>
                )}
            </div>

            {/* 投稿ボタン (FAB) */}
            <motion.button
                onClick={onOpenEditor}
                className="fixed bottom-8 right-8 w-14 h-14 bg-slate-900 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-slate-700 transition-colors z-40"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <PenTool size={24} />
            </motion.button>
        </div>
    );
};
'use client';

import React from 'react'; // useState削除
import { TimelinePost } from './TimelinePost';
import { Post } from '@/types/post';
import { motion, AnimatePresence } from 'framer-motion';
import { PenTool } from 'lucide-react';

// プロップスでデータと操作を受け取る形に変更
interface TimelineProps {
    posts: Post[];
    onDelete: (id: string) => void;
    onLike?: (id: string) => void; // いいね用に追加
    onOpenEditor: () => void;
}

export const Timeline = ({ posts, onDelete, onLike, onOpenEditor }: TimelineProps) => {
    // モックデータ生成ロジックは削除

    return (
        <div className="w-full min-h-screen pt-24 pb-24 px-4 bg-[#fafafa]">
            <div className="max-w-2xl mx-auto space-y-4">
                <div className="text-center mb-12">
                    <p className="text-[10px] text-slate-300 tracking-[0.3em] uppercase">Timeline</p>
                </div>

                <AnimatePresence mode='popLayout'>
                    {posts.map((post) => (
                        <TimelinePost
                            key={post.id}
                            post={post}
                            onDelete={onDelete}
                        // TimelinePost側でonLike対応が必要ならここに追加
                        />
                    ))}
                </AnimatePresence>

                {posts.length === 0 && (
                    <div className="text-center text-slate-300 text-sm mt-20 font-light">
                        <p>塵ひとつなし</p>
                        <span className="text-[10px] opacity-60">No posts yet.</span>
                    </div>
                )}
            </div>

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
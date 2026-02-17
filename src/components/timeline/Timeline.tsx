'use client';

import React from 'react';
import { TimelinePost } from './TimelinePost';
import { Post } from '@/types/post';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react'; // アイコンをペンからプラスに変更

interface TimelineProps {
    posts: Post[];
    onDelete: (id: string) => void;
    onLike?: (id: string) => void;
    onOpenEditor: () => void;
    currentUser: any;
}

export const Timeline = ({ posts, onDelete, onLike, onOpenEditor, currentUser }: TimelineProps) => {
    return (
        <div className="w-full min-h-screen pt-20 pb-24 px-4 bg-gray-50 dark:bg-black">
            <div className="max-w-md mx-auto">
                <div className="flex justify-between items-end mb-6 px-1">
                    <h1 className="text-xs font-bold text-gray-400 tracking-widest uppercase">
                        System Logs
                    </h1>
                    <span className="text-[10px] text-gray-300 font-mono">
                        {posts.length} RECORDS
                    </span>
                </div>

                <AnimatePresence mode='popLayout'>
                    {posts.map((post) => (
                        <TimelinePost
                            key={post.id}
                            post={post}
                            onDelete={onDelete}
                        />
                    ))}
                </AnimatePresence>

                {posts.length === 0 && (
                    <div className="flex flex-col items-center justify-center mt-20 text-gray-300 gap-2">
                        <span className="text-4xl opacity-20">∅</span>
                        <p className="text-xs font-mono">NO DATA FOUND</p>
                    </div>
                )}
            </div>

            {/* 新規投稿ボタン */}
            <motion.button
                onClick={onOpenEditor}
                className="fixed bottom-8 right-8 w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-xl hover:bg-blue-500 transition-colors z-50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <Plus size={28} />
            </motion.button>
        </div>
    );
};
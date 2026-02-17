'use client';

import React, { useState } from 'react';
import { TankaEditor } from "@/components/editor/TankaEditor";
import { UserMenu } from "@/components/auth/UserMenu";
import { LoginScreen } from "@/components/auth/LoginScreen";
import { Timeline } from "@/components/timeline/Timeline";
import { useAuth } from "@/hooks/useAuth";
import { usePosts } from "@/hooks/usePosts";
import { AnimatePresence, motion } from "framer-motion";
import { TankaSections } from '@/types/post';

export default function Home() {
  const { user, loading: authLoading } = useAuth();
  const { posts, addPost, deletePost } = usePosts();

  // 画面状態: 'timeline' | 'editor'
  const [view, setView] = useState<'timeline' | 'editor'>('timeline');

  // エディタで「RECORD」が押された時の処理（保存して戻る）
  const handleEditorComplete = async (sections: TankaSections) => {
    if (!user) return;

    try {
      await addPost(sections, {
        id: user.uid,
        name: user.displayName || 'Anonymous',
        photoURL: user.photoURL || '',
      });
      // 即座にタイムラインへ戻る
      setView('timeline');
    } catch (error) {
      console.error("Failed to post:", error);
      alert("投稿に失敗しました。");
    }
  };

  if (authLoading) {
    return <div className="min-h-screen flex items-center justify-center text-xs font-mono text-gray-400">LOADING SYSTEM...</div>;
  }

  if (!user) {
    return <LoginScreen />;
  }

  return (
    <div className="relative min-h-screen bg-gray-50 dark:bg-black font-sans overflow-hidden">
      <UserMenu user={user} />

      <AnimatePresence mode="wait">
        {/* タイムライン画面 */}
        {view === 'timeline' && (
          <motion.div
            key="timeline"
            className="absolute inset-0 overflow-y-auto"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
          >
            <Timeline
              posts={posts}
              onDelete={deletePost}
              onOpenEditor={() => setView('editor')}
              currentUser={user}
            />
          </motion.div>
        )}

        {/* エディタ画面 */}
        {view === 'editor' && (
          <motion.div
            key="editor"
            className="absolute inset-0 bg-white dark:bg-black z-40 flex flex-col"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.2 }}
          >
            <button
              onClick={() => setView('timeline')}
              className="absolute top-6 left-6 text-xs font-bold text-gray-400 hover:text-gray-800 dark:hover:text-white tracking-widest z-50 transition-colors"
            >
              ← CANCEL
            </button>
            <main className="flex-1 flex flex-col items-center justify-center">
              <TankaEditor onComplete={handleEditorComplete} />
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
'use client';

import React, { useState } from 'react';
import { TankaEditor } from "@/components/editor/TankaEditor";
import { UserMenu } from "@/components/auth/UserMenu";
import { LoginScreen } from "@/components/auth/LoginScreen";
import { Timeline } from "@/components/timeline/Timeline";
import { PostAnimation } from '@/components/post/PostAnimation'; // アニメーション用
import { useAuth } from "@/hooks/useAuth";
import { usePosts } from "@/hooks/usePosts"; // 作成したフック
import { AnimatePresence, motion } from "framer-motion";
import { TankaSections } from '@/types/post';

export default function Home() {
  const { user, loading: authLoading } = useAuth();
  const { posts, addPost, deletePost } = usePosts();

  // 画面状態: 'timeline' | 'editor' | 'animating'
  const [view, setView] = useState<'timeline' | 'editor' | 'animating'>('timeline');

  // 投稿用の一時データ保持
  const [tempSections, setTempSections] = useState<TankaSections | null>(null);

  // 1. エディタで「詠む」が押された時
  const handleEditorComplete = (sections: TankaSections) => {
    setTempSections(sections);
    setView('animating'); // アニメーション画面へ
  };

  // 2. アニメーション完了時 -> Firestoreに保存してタイムラインへ
  const handleAnimationComplete = async () => {
    if (tempSections && user) {
      await addPost(tempSections, {
        id: user.uid,
        name: user.displayName || '詠み人知らず',
        photoURL: user.photoURL || undefined
      });
      setTempSections(null);
      setView('timeline');
    }
  };

  if (authLoading) {
    return (
      <div className="min-h-screen bg-[#fafafa] flex items-center justify-center">
        <div className="w-2 h-2 bg-slate-300 rounded-full animate-ping" />
      </div>
    );
  }

  if (!user) {
    return <LoginScreen />;
  }

  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)] bg-[#fafafa]">
      <UserMenu />

      <AnimatePresence mode="wait">
        {/* タイムライン画面 */}
        {view === 'timeline' && (
          <motion.div
            key="timeline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Timeline
              posts={posts}
              onDelete={deletePost}
              onOpenEditor={() => setView('editor')}
            />
          </motion.div>
        )}

        {/* エディタ画面 */}
        {view === 'editor' && (
          <motion.div
            key="editor"
            className="relative z-40 min-h-screen bg-[#fafafa] flex flex-col"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
          >
            <button
              onClick={() => setView('timeline')}
              className="absolute top-6 left-6 text-xs text-slate-400 hover:text-slate-800 tracking-widest z-50"
            >
              ← BACK
            </button>
            <main className="flex-1 flex flex-col items-center justify-center">
              <TankaEditor onComplete={handleEditorComplete} />
            </main>
          </motion.div>
        )}

        {/* 投稿アニメーション画面 */}
        {view === 'animating' && tempSections && (
          <PostAnimation
            sections={tempSections}
            onComplete={handleAnimationComplete}
          />
        )}
      </AnimatePresence>

      {view === 'timeline' && (
        <footer className="fixed bottom-4 left-0 w-full text-center text-[10px] text-slate-300 tracking-[0.2em] pointer-events-none">
          MISOHITO
        </footer>
      )}
    </div>
  );
}

// 既存のTankaEditorは内部状態を持っているので、
// page.tsxから制御しやすいようにラップするか、TankaEditor自体を修正するのが理想です。
// 今回は既存コードへの影響を最小限にするため、TankaEditor自体を少し改修することをお勧めします。
// 以下の「補足：TankaEditorの修正」を行ってください。
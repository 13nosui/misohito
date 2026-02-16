'use client';

import React, { useState } from 'react';
import { TankaEditor } from "@/components/editor/TankaEditor";
import { UserMenu } from "@/components/auth/UserMenu";
import { LoginScreen } from "@/components/auth/LoginScreen";
import { Timeline } from "@/components/timeline/Timeline"; // 追加
import { useAuth } from "@/hooks/useAuth";
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  const { user, loading } = useAuth();
  // 'timeline' か 'editor' かの状態管理
  const [view, setView] = useState<'timeline' | 'editor'>('timeline');

  if (loading) {
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

      {/* 画面切り替え */}
      <AnimatePresence mode="wait">
        {view === 'timeline' ? (
          <motion.div
            key="timeline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Timeline onOpenEditor={() => setView('editor')} />
          </motion.div>
        ) : (
          <motion.div
            key="editor"
            className="relative z-50 min-h-screen bg-[#fafafa] flex flex-col"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
          >
            {/* エディタを閉じるボタン */}
            <button
              onClick={() => setView('timeline')}
              className="absolute top-6 left-6 text-xs text-slate-400 hover:text-slate-800 tracking-widest z-50"
            >
              ← BACK
            </button>
            <main className="flex-1 flex flex-col items-center justify-center">
              <TankaEditor />
            </main>
          </motion.div>
        )}
      </AnimatePresence>

      {/* フッターはタイムライン表示時のみ、または共通で出すか調整 */}
      {view === 'timeline' && (
        <footer className="fixed bottom-4 left-0 w-full text-center text-[10px] text-slate-300 tracking-[0.2em] pointer-events-none">
          MISOHITO
        </footer>
      )}
    </div>
  );
}
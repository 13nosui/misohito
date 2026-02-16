'use client';

import { TankaEditor } from "@/components/editor/TankaEditor";
import { UserMenu } from "@/components/auth/UserMenu";
import { LoginScreen } from "@/components/auth/LoginScreen"; // 新しく作ったコンポーネント
import { useAuth } from "@/hooks/useAuth";

export default function Home() {
  const { user, loading } = useAuth();

  // 1. 認証状態の確認中はローディング表示（真っ白な画面を防ぐ）
  if (loading) {
    return (
      <div className="min-h-screen bg-[#fafafa] flex items-center justify-center">
        <div className="w-2 h-2 bg-slate-300 rounded-full animate-ping" />
      </div>
    );
  }

  // 2. 未ログイン時はログイン画面（ランディングページ）を表示
  if (!user) {
    return <LoginScreen />;
  }

  // 3. ログイン時はエディタ画面を表示
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)] bg-[#fafafa]">
      <UserMenu />
      <main className="flex flex-col items-center justify-center min-h-screen">
        <TankaEditor />
      </main>
      <footer className="fixed bottom-4 w-full text-center text-[10px] text-slate-300 tracking-[0.2em]">
        MISOHITO
      </footer>
    </div>
  );
}
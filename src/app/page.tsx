import { TankaEditor } from "@/components/editor/TankaEditor";
import { UserMenu } from "@/components/auth/UserMenu"; // ★追加

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)] bg-[#fafafa]">
      <UserMenu /> {/* ★追加: 左上に表示されます */}
      <main className="flex flex-col items-center justify-center min-h-screen">
        <TankaEditor />
      </main>
      <footer className="fixed bottom-4 w-full text-center text-[10px] text-slate-300 tracking-[0.2em]">
        MISOHITO
      </footer>
    </div>
  );
}
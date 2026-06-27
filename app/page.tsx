import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col bg-black text-white">
      {/* BG Glow: Gold only, top center */}
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-[#FFD700]/8 blur-[200px]" />

      {/* LOGO CENTER */}
      <section className="flex flex-1 items-center justify-center px-6 pt-8 pb-32">
        <Image 
          src="/logo-full.png" 
          alt="Luminar Genesis" 
          width={500} 
          height={500}
          priority
          className="h-auto w-full max-w-[420px] object-contain drop-shadow-[0_0_40px_rgba(255,215,0,.3)]"
        />
      </section>

      {/* 3 BUTTONS: MOBILE APP MODE */}
      <footer className="fixed bottom-0 left-0 right-0 border-t border-white/10 bg-black/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-md items-center justify-around px-4 py-3">
          <Link href="/dashboard" className="flex flex-col items-center gap-1 text-xs font-medium text-white/80 hover:text-[#FFD700]">
            <span className="text-xl">🏠</span> Home
          </Link>
          <Link href="/ai" className="flex flex-col items-center gap-1 text-xs font-medium text-white/80 hover:text-[#00D9FF]">
            <span className="text-xl">⚡</span> AI
          </Link>
          <Link href="/profile" className="flex flex-col items-center gap-1 text-xs font-medium text-white/80 hover:text-[#FFD700]">
            <span className="text-xl">👤</span> Profile
          </Link>
        </nav>
      </footer>
    </main>
  );
      }

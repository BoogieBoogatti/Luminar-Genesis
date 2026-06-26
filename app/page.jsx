import Link from 'next/link';

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-black">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.25),rgba(255,255,255,0))]" />
      <div className="z-10 flex-col items-center gap-6 p-8 text-center">
        <h1 className="text-6xl font-black tracking-tight bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent">
          LUMINAR GENESIS
        </h1>
        <p className="max-w-md text-zinc-400">Foundation AI. Faster than v0. Cleaner than Replit.</p>
        <Link href="/login" className="rounded-xl bg-white/10 px-8 py-3 text-lg font-bold backdrop-blur-xl transition hover:bg-white/20">
          Enter System →
        </Link>
      </div>
    </main>
  );
}

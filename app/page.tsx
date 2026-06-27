import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 pt-12 pb-24">
      <div className="mx-auto max-w-md">
        
        {/* LOGO */}
        <div className="mb-10">
          <Image src="/logo-full.png" alt="Luminar Genesis" width={600} height={600} priority className="w-full h-auto drop-shadow-[0_0_40px_rgba(255,215,0,.25)]"/>
        </div>

        {/* 3 BOXES */}
        <div className="space-y-5">
          <div className="rounded-3xl bg-[#0A0A0F] p-7 text-center border border-white/5">
            <h3 className="text-[#FFB800] text-2xl font-bold">Fast</h3>
            <p className="text-white/70 mt-2 text-sm">Next.js 14 + Vercel. Deploy in seconds.</p>
          </div>
          <div className="rounded-3xl bg-[#0A0A0F] p-7 text-center border-white/5">
            <h3 className="text-[#00D9FF] text-2xl font-bold">Clean</h3>
            <p className="text-white/70 mt-2 text-sm">Minimal, premium, no clutter. Just works.</p>
          </div>
          <div className="rounded-3xl bg-[#0A0A0F] p-7 text-center border-white/5">
            <h3 className="text-white text-2xl font-bold">Secure</h3>
            <p className="text-white/70 mt-2 text-sm">Built for scale. Trusted by pros.</p>
          </div>
        </div>

        {/* ENTER DASHBOARD */}
        <Link href="/dashboard" className="mt-10 block w-full rounded-full bg-gradient-to-r from-[#FFD700] to-[#00D9FF] py-4 text-center text-base font-bold text-black">
          Enter Dashboard →
        </Link>
      </div>
    </main>
  );
              }

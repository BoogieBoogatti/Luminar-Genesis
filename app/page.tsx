import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const modules = [
    { title: "Luminary (Lum.i)", description: "Your AI companion for learning, productivity and life.", href: "/luminary" },
    { title: "Lumi Passport", description: "Your secure digital identity and global citizen passport.", href: "/passport" },
    { title: "Genesis Marketplace", description: "Discover services, digital products and opportunities.", href: "/marketplace" },
    { title: "Genesis Knowledge Bank", description: "Learn AI, business, finance and emerging technologies.", href: "/knowledge-bank" },
    { title: "Genesis Constellation", description: "Build your network, community and professional reputation.", href: "/constellation" },
    { title: "Genesis Air", description: "Travel, relocation, visas and global opportunities.", href: "/air" },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,#FFD70008,transparent_60%)]" />
      <div className="pointer-events-none absolute left-0 top-0 h-[600px] w-[600px] rounded-full bg-[#FFD700]/5 blur-[200px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-[600px] w-[600px] rounded-full bg-[#00F0FF]/5 blur-[200px]" />

      <section className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 py-24">

        {/* LOGO EXACT: From your photo */}
        <div className="mb-12 flex w-full max-w-[700px] items-center justify-center">
          <Image 
            src="/logo-full.png" 
            alt="Luminar Genesis" 
            width={700} 
            height={700}
            priority
            sizes="(max-width: 768px) 90vw, 700px"
            className="h-auto w-full object-contain drop-shadow-[0_0_50px_rgba(255,215,0,.3)]"
          />
        </div>

        {/* PHOTO CARDS: Fast + Clean */}
        <div className="w-full max-w-lg space-y-6">
          <div className="rounded-3xl border-white/10 bg-white/5 p-8 backdrop-blur-xl text-center">
            <h3 className="text-3xl font-bold text-[#FFD700]">Fast</h3>
            <p className="mt-3 text-white/70">Next.js 14 + Vercel. Deploy in seconds.</p>
          </div>
          <div className="rounded-3xl border-white/10 bg-white/5 p-8 backdrop-blur-xl text-center">
            <h3 className="text-3xl font-bold text-[#00F0FF]">Clean</h3>
            <p className="mt-3 text-white/70">Minimal, premium, no clutter. Just works.</p>
          </div>
        </div>

        {/* MAIN BUTTON */}
        <Link
          href="/dashboard"
          className="group mt-12 rounded-full border-[#FFD700]/30 bg-[#FFD700]/5 px-12 py-4 text-lg font-semibold backdrop-blur-xl transition-all duration-300 hover:border-[#00F0FF] hover:bg-[#00F0FF]/10 hover:shadow-[0_0_40px_#00F0FF] active:scale-95"
        >
          Enter Dashboard →
        </Link>

        {/* 6 MODULE CARDS */}
        <div className="mt-24 grid w-full gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((item) => (
            <Link key={item.title} href={item.href} className="group rounded-3xl border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:border-[#FFD700]/50 hover:shadow-[0_0_35px_rgba(255,215,0,.25)]">
              <h2 className="text-2xl font-bold group-hover:text-[#FFD700] transition-colors">{item.title}</h2>
              <p className="mt-4 text-white/70">{item.description}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-[#00F0FF] group-hover:gap-3 transition-all">Explore →</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

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
    <main className="relative min-h-screen overflow-hidden bg-[#03030A] text-white">
      {/* Background Glows - Untouched */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,#00F0FF15,transparent_60%)]" />
      <div className="pointer-events-none absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[180px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[180px]" />

      <section className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 py-24">

        {/* LOGO HERO: 4X BIGGER = Replaces H1 + Subheading */}
        <div className="mb-12 flex h-[28rem] w-[28rem] md:h-[32rem] md:w-[32rem] items-center justify-center">
          {/* 32rem = ~512px. That's ~4X bigger than the old 144px */}
          <Image 
            src="/logo.png" // <-- This file must have "LUMINAR GENESIS" + "YOUR PLACE..." inside it
            alt="Luminar Genesis" 
            width={512} 
            height={512}
            priority
            sizes="(max-width: 768px) 448px, 512px"
            className="h-full w-full object-contain drop-shadow-[0_0_60px_rgba(0,240,255,.4)]"
          />
        </div>

        {/* Tagline Only - Kept because photo has it. Delete if you want pure logo */}
        <p className="mt-2 max-w-3xl text-center text-base md:text-lg leading-8 text-white/70">
          A next-generation digital ecosystem where identity, artificial intelligence, learning, travel, business and opportunity converge into one unified experience.
        </p>

        {/* MAIN BUTTON: Untouched */}
        <Link
          href="/dashboard"
          aria-label="Enter Luminar Genesis Dashboard"
          className="group mt-12 rounded-full border-cyan-400/30 bg-white/5 px-10 py-4 font-semibold backdrop-blur-xl transition-all duration-300 hover:border-cyan-300 hover:bg-cyan-400/10 hover:shadow-[0_0_35px_#00F0FF] focus:outline-none focus:ring-2 focus:ring-[#00F0FF] active:scale-95 will-change-transform"
        >
          Enter Dashboard →
        </Link>

        {/* 6 CARDS: Untouched */}
        <div className="mt-20 md:mt-24 grid w-full gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              aria-label={`Explore ${item.title}`}
              className="group rounded-3xl border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:border-cyan-400/50 hover:shadow-[0_0_35px_rgba(0,240,255,.25)] focus:outline-none focus:ring-2 focus:ring-[#00F0FF]"
            >
              <h2 className="text-2xl font-bold group-hover:text-[#00F0FF] transition-colors">{item.title}</h2>
              <p className="mt-4 text-white/70">
                {item.description}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-cyan-300 group-hover:gap-3 transition-all">
                Explore →
              </span>
            </Link>
          ))}
        </div>

      </section>
    </main>
  );
}

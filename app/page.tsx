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
      {/* Background Glows - Same as photo */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,#00F0FF15,transparent_60%)]" />
      <div className="pointer-events-none absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[180px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[180px]" />

      <section className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 py-24">

        {/* LOGO: Matches your photo top circle */}
        <div className="mb-10 flex h-28 w-28 items-center justify-center rounded-full border-cyan-400/30 bg-white/5 backdrop-blur-xl shadow-[0_0_60px_rgba(0,240,255,.4)]">
          <Image 
            src="/logo.png" 
            alt="Luminar Genesis Logo" 
            width={96} 
            height={96}
            priority
            className="object-contain"
          />
        </div>

        {/* TITLE: Gold/Cyan Gradient = Exact photo match */}
        <h1 className="bg-gradient-to-r from-[#FFD700] via-white to-[#00F0FF] bg-clip-text text-center text-5xl font-black uppercase tracking-[0.30em] text-transparent md:text-7xl">
          LUMINAR<br/>GENESIS
        </h1>

        <p className="mt-6 text-center text-sm md:text-base tracking-[0.25em] text-cyan-200 font-light">
          YOUR PLACE IN THE WORLD YOU CHOSE
        </p>

        <p className="mt-6 max-w-2xl text-center text-sm md:text-base leading-7 text-white/70">
          A next-generation digital ecosystem where identity, artificial intelligence, learning, travel, business and opportunity converge into one unified experience.
        </p>

        {/* BUTTON: Glass + Cyan Glow = Premium like photo */}
        <Link
          href="/dashboard"
          className="mt-10 rounded-full border-cyan-400/30 bg-white/5 px-8 py-3 text-sm font-semibold backdrop-blur-xl transition-all duration-300 hover:border-cyan-300 hover:bg-cyan-400/10 hover:shadow-[0_0_30px_#00F0FF] active:scale-95"
        >
          Enter Dashboard →
        </Link>

        {/* 6 CARDS: Glass style to match photo */}
        <div className="mt-16 grid w-full gap-4 md:gap-6 sm:grid-cols-2">
          {modules.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="rounded-2xl border-white/10 bg-white/5 p-6 backdrop-blur-xl transition duration-300 hover:border-cyan-400/50 hover:shadow-[0_0_25px_rgba(0,240,255,.25)]"
            >
              <h2 className="text-xl font-bold">{item.title}</h2>
              <p className="mt-3 text-sm text-white/70">
                {item.description}
              </p>
              <span className="mt-4 inline-block text-sm text-cyan-300">
                Explore →
              </span>
            </Link>
          ))}
        </div>

      </section>
    </main>
  );
}

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
      {/* Background Glows - Untouched, premium */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,#00F0FF15,transparent_60%)]" />
      <div className="pointer-events-none absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[180px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-500  return (
    <main className="relative min-h-screen overflow-hidden bg-[#03030A] text-white">

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#00F0FF15,transparent_60%)]" />

      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[180px]" />

      <section className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6">

        {/* Logo Placeholder */}
        <div className="mb-8 flex h-36 w-36 items-center justify-center rounded-full border border-cyan-400/30 bg-white/5 backdrop-blur-xl shadow-[0_0_80px_rgba(0,240,255,.3)]">

          ✦

        </div>

        <h1 className="bg-gradient-to-r from-[#FFD700] via-white to-[#00F0FF] bg-clip-text text-center text-6xl font-black uppercase tracking-[0.30em] text-transparent md:text-8xl">
          Luminar Genesis
        </h1>

        <p className="mt-6 text-center text-xl tracking-[0.25em] text-cyan-200">
          YOUR PLACE IN THE WORLD YOU CHOSE
        </p>

        <p className="mt-8 max-w-3xl text-center text-lg leading-8 text-white/70">
          A next-generation digital ecosystem where identity, artificial
          intelligence, learning, travel, business and opportunity converge
          into one unified experience.
        </p>

        <Link
          href="/dashboard"
          className="mt-12 rounded-full border border-cyan-400/30 bg-white/5 px-10 py-4 font-semibold backdrop-blur-xl transition-all duration-300 hover:border-cyan-300 hover:bg-cyan-400/10 hover:shadow-[0_0_35px_#00F0FF]"
        >
          Enter Dashboard →
        </Link>

        {/* Ecosystem */}
        <div className="mt-24 grid w-full gap-6 md:grid-cols-2 lg:grid-cols-3">

          {modules.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:border-cyan-400/50 hover:shadow-[0_0_35px_rgba(0,240,255,.25)]"
            >
              <h2 className="text-2xl font-bold">{item.title}</h2>

              <p className="mt-4 text-white/70">
                {item.description}
              </p>

              <span className="mt-6 inline-block text-cyan-300">
                Explore →
              </span>
            </Link>
          ))}

        </div>

      </section>

    </main>
  );
}

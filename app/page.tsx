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
    <main className="relative min-h-screen overflow-hidden bg-black text-white"> {/* Exact photo BG */}
      {/* Background Glows - Match photo: Gold/Cyan */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,#FFD70008,transparent_60%)]" />
      <div className="pointer-events-none absolute left-0 top-0 h-[600px] w-[600px] rounded-full bg-[#FFD700]/5 blur-[200px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-[600px] w-[600px] rounded-full bg-[#00F0FF]/5 blur-[200px]" />

      <section className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 py-24">

        {/* LOGO EXACT: Full photo as one image, 3.5X bigger */}
        <div className="mb-16 flex w-[90vw] max-w-[800px] items-center justify-center">
          <Image 
            src="/logo-full.png" // <-- This is your uploaded photo
            alt="Luminar Genesis - Your place in the world you chose" 
            width={800} 
            height={800}
            priority
            sizes="(max-width: 768px) 90vw, 800px"
            className="h-auto w-full object-contain drop-shadow-[0_0_50px_rgba(255,215,0,.3)]" // Gold glow to match
          />
        </div>

        {/* NO H1, NO SUBH1. Photo carries everything. */}

        {/* MAIN BUTTON: Match photo Gold/Cyan */}
        <Link
          href="/dashboard"
          aria-label="Enter Luminar Genesis Dashboard"
          className="group mt-4 rounded-full border-[#FFD700]/30 bg-[#FFD700]/5 px-12 py-4 text-lg font-semibold backdrop-blur-xl transition-all duration-300 hover:border-[#00F0FF] hover:bg-[#00F0FF]/10 hover:shadow-[0_0_40px_#00F0FF] focus:outline-none focus:ring-2 focus:ring-[#FFD700] active:scale-95 will-change-transform"
        >
          Enter Dashboard →
        </Link>

        {/* 6 CARDS: Gold border on hover to match logo */}
        <div className="mt-24 grid w-full gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              aria-label={`Explore ${item.title}`}
              className="group rounded-3xl border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:border-[#FFD700]/50 hover:shadow-[0_0_35px_rgba(255,215,0,.25)] focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
            >
              <h2 className="text-2xl font-bold group-hover:text-[#FFD700] transition-colors">{item.title}</h2> {/* Gold on hover */}
              <p className="mt-4 text-white/70">
                {item.description}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-[#00F0FF] group-hover:gap-3 transition-all">
                Explore →
              </span>
            </Link>
          ))}
        </div>

      </section>
    </main>
  );
          }

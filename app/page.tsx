import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* BG Glow: Gold top, Cyan bottom - matches photo */}
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[700px] w-[700px] rounded-full bg-[#FFD700]/5 blur-[250px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-[600px] w-[600px] rounded-full bg-[#00F0FF]/5 blur-[200px]" />

      <section className="relative z-10 mx-auto flex min-h-screen max-w-md flex-col items-center justify-start px-6 pt-16 pb-24">

        {/* LOGO EXACT: Full photo with text inside */}
        <div className="mb-12 w-full">
          <Image 
            src="/logo-full.png" // <-- Must be this filename in /public
            alt="Luminar Genesis - Your place in the world you chose" 
            width={600} 
            height={600}
            priority
            sizes="100vw"
            className="h-auto w-full object-contain drop-shadow-[0_0_40px_rgba(255,215,0,.25)]"
          />
        </div>

        {/* PHOTO CARDS: Fast + Clean */}
        <div className="w-full space-y-6">
          <div className="rounded-3xl bg-[#0A0A0F] p-8 text-center border-white/5">
            <h3 className="text-3xl font-bold text-[#FFB800]">Fast</h3>
            <p className="mt-3 text-base text-white/70">
              Next.js 14 + Vercel. Deploy in seconds.
            </p>
          </div>
          <div className="rounded-3xl bg-[#0A0A0F] p-8 text-center border-white/5">
            <h3 className="text-3xl font-bold text-[#00D9FF]">Clean</h3>
            <p className="mt-3 text-base text-white/70">
              Minimal, premium, no clutter. Just works.
            </p>
          </div>
        </div>
        
      </section>
    </main>
  );
}

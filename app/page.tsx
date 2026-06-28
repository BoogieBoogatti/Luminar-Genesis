import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 pt-16 pb-16">
      <div className="mx-auto max-w-md text-center">
        
        {/* 1. LOGO - KEEP */}
        <Image 
          src="/logo-full.png" 
          alt="Luminar Genesis" 
          width={500} 
          height={500} 
          priority 
          className="mx-auto w-full max-w-[380px] h-auto drop-shadow-[0_0_40px_rgba(255,215,0,.25)] mb-3"
        />

        {/* 2. SMALL TAGLINE - KEEP ONLY THIS ONE */}
        <p className="text-sm tracking-[0.3em] text-[#00D9FF] font-medium mb-8">
          YOUR PLACE IN THE WORLD YOU CHOSE...
        </p>

        {/* 3. IMAGE - FIXED PATH */}
        <Image 
          src="/metaverse-hero.jpg" 
          alt="Luminar Genesis Metaverse" 
          width={1200} 
          height={600} 
          className="w-full rounded-3xl mb-8 border-white/10"
          priority
          unoptimized
        />

        {/* 4. PARAGRAPH - KEEP */}
        <p className="text-base text-white/70 leading-relaxed">
          A next-generation digital ecosystem where identity, AI, learning, travel, business and opportunity converge into one unified experience.
        </p>

        {/* 5. 3 BOXES - KEEP */}
        <div className="mt-12 space-y-5 text-left">
          <div className="rounded-3xl bg-[#0A0A0F] p-6 border-white/5">
            <h3 className="text-[#FFB800] text-xl font-bold">Fast</h3>
            <p className="text-white/70 mt-2 text-sm">Next.js 14 + Vercel. Deploy in seconds.</p>
          </div>
          <div className="rounded-3xl bg-[#0A0A0F] p-6 border-white/5">
            <h3 className="text-[#00D9FF] text-xl font-bold">Clean</h3>
            <p className="text-white/70 mt-2 text-sm">Minimal, premium, no clutter. Just works.</p>
          </div>
          <div className="rounded-3xl bg-[#0A0A0F] p-6 border-white/5">
            <h3 className="text-white text-xl font-bold">Secure</h3>
            <p className="text-white/70 mt-2 text-sm">Built for scale. Trusted by pros.</p>
          </div>
        </div>
        
      </div>
    </main>
  );
}

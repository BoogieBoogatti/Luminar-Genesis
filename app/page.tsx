import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 pt-16 pb-16">
      <div className="mx-auto max-w-md text-center">
        
        {/* 1. LOGO - KEEP. Tagline is baked inside this PNG */}
        <Image 
          src="/logo-full.png" 
          alt="Luminar Genesis" 
          width={500} 
          height={500} 
          priority 
          className="mx-auto w-full max-w-[380px] h-auto drop-shadow-[0_0_40px_rgba(255,215,0,.25)] mb-8"
        />

        {/* 2. TAGLINE DELETED - No duplicate now */}

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

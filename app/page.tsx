export default function Home() {
  return (
    <main className="min-h-screen bg-black flex-col items-center justify-center px-6 py-16">
      <div className="w-full max-w-2xl flex-col items-center text-center">
        <img 
          src="/logo.png" 
          alt="Luminar Genesis Logo" 
          className="w-full max-w-md h-auto mb-8"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-8">
          <div className="rounded-2xl bg-slate-900/60 backdrop-blur p-6 border-slate-800">
            <h3 className="text-xl font-bold text-amber-400 mb-2">Fast</h3>
            <p className="text-slate-300">Next.js 14 + Vercel. Deploy in seconds.</p>
          </div>
          <div className="rounded-2xl bg-slate-900/60 backdrop-blur p-6 border-slate-800">
            <h3 className="text-xl font-bold text-cyan-400 mb-2">Clean</h3>
            <p className="text-slate-300">TypeScript + Tailwind. 100% responsive.</p>
          </div>
          <div className="rounded-2xl bg-slate-900/60 backdrop-blur p-6 border-slate-800">
            <h3 className="text-xl font-bold text-amber-400 mb-2">Ready</h3>
            <p className="text-slate-300">Production baseline. Extend to SaaS.</p>
          </div>
        </div>

        <a href="/dashboard" className="mt-10 inline-block text-sm font-semibold text-cyan-400 hover:text-cyan-300 underline">
          Enter Dashboard →
        </a>
      </div>
    </main>
  );
}

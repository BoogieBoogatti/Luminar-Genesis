export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <nav className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
        <div className="text-2xl font-extrabold tracking-tight text-slate-900">
          Luminar<span className="text-indigo-600">Genesis</span>
        </div>
        <a href="/dashboard" className="text-sm font-semibold text-indigo-600 hover:text-indigo-700 underline">
          Dashboard →
        </a>
      </nav>

      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">
            Build. Ship. Scale.
          </h1>
          <p className="mt-3 text-lg text-slate-600 max-w-2xl">
            The genesis platform for launching modern web apps. Tailwind powered, TypeScript verified.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Fast</h3>
            <p className="text-slate-700">Next.js 14 + Vercel. Deploy in seconds, not hours.</p>
          </div>
          <div className="rounded-2xl border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Clean</h3>
            <p className="text-slate-700">TypeScript + Tailwind. Zero CSS bugs, 100% responsive.</p>
          </div>
          <div className="rounded-2xl border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Ready</h3>
            <p className="text-slate-700">Production baseline. Extend to SaaS, Auth, DB.</p>
          </div>
        </div>
      </div>
    </main>
  );
}

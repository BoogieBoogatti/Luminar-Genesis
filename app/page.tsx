export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-3xl font-bold mb-6 text-slate-900">My Card Grid</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-xl border bg-white p-6 shadow-sm text-slate-800">
            First card content goes here.
          </div>
          <div className="rounded-xl border bg-white p-6 shadow-sm text-slate-800">
            Second card content goes here.
          </div>
          <div className="rounded-xl border bg-white p-6 shadow-sm text-slate-800">
            Third card content goes here.
          </div>
        </div>
      </div>
    </main>
  );
}

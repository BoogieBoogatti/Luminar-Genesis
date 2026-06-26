export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-6 md:p-10">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-3xl font-bold mb-6">Luminar Genesis</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <h2 className="font-semibold mb-2">Card 1</h2>
            <p className="text-gray-600">Mobile = 1 column</p>
          </div>
          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <h2 className="font-semibold mb-2">Card 2</h2>
            <p className="text-gray-600">Desktop = 3 columns</p>
          </div>
          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <h2 className="font-semibold mb-2">Card 3</h2>
            <p className="text-gray-600">This is correct</p>
          </div>
        </div>
        <a href="/dashboard" className="mt-6 inline-block text-blue-600 underline">
          Go to Dashboard →
        </a>
      </div>
    </main>
  );
}

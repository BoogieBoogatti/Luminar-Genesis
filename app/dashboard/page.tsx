export default function Dashboard() {
  return (
    <main className="min-h-screen bg-gray-100 p-6 md:p-10">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
        <p className="text-gray-600 mb-6">Welcome to your dashboard.</p>
        
        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <p>This is the dashboard page. No 404 here.</p>
        </div>

        <a href="/" className="mt-6 inline-block text-blue-600 underline">
          ← Back to Home
        </a>
      </div>
    </main>
  );
}

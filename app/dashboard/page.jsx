const Card = ({ children }) => (
  <div className="rounded-xl border-white/10 bg-white/5 p-6 backdrop-blur-xl">
    {children}
  </div>
);

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-black p-8">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-black">Dashboard</h1>
        <p className="mt-2 text-zinc-400">Luminar Genesis is online.</p>
        <div className="mt-8 grid-cols-1 gap-4 md:grid-cols-3">
          <Card>Module 1</Card>
          <Card>Module 2</Card>
          <Card>Module 3</Card>
        </div>
      </div>
    </main>
  );
}

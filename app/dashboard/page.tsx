"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("luminar_user");
    if (!storedUser) {
      router.push("/auth"); // <-- THE LOCK
    } else {
      setUser(storedUser);
      setLoading(false);
    }
  }, [router]);

  const handleSignOut = () => {
    localStorage.removeItem("luminar_user");
    router.push("/auth");
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <p>Checking auth...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <button
            onClick={handleSignOut}
            className="px-4 py-2 rounded-lg border-zinc-700 hover:bg-zinc-900 text-sm"
          >
            Sign Out
          </button>
        </div>
        
        <div className="bg-zinc-900 p-6 rounded-xl">
          <p className="text-zinc-400 text-sm">Logged in as</p>
          <p className="text-xl font-semibold break-all">{user}</p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl">
          <p className="text-zinc-500">Demo content. Wire Supabase here next.</p>
        </div>
      </div>
    </main>
  );
}

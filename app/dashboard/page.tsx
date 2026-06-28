'use client';
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const [auth, setAuth] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const isAuth = localStorage.getItem('luminar_auth');
    if (!isAuth) router.push('/auth');
    else setAuth(true);
  }, [router]);

  if (!auth) return null;

  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-md mx-auto text-center">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-[#FFB800] to-[#00D9FF] bg-clip-text text-transparent">
          Welcome to Luminar
        </h1>
        <p className="text-white/70 mt-4">You are authenticated ✅</p>
        <button 
          onClick={() => {localStorage.removeItem('luminar_auth'); router.push('/auth');}}
          className="mt-8 px-6 py-3 bg-white/10 rounded-xl text-sm hover:bg-white/20"
        >
          Logout
        </button>
      </div>
    </main>
  );
}

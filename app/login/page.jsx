"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const router = useRouter();

  return (
    <main className="min-h-screen bg-black flex items-center justify-center p-6">
      <div className="w-full max-w-sm rounded-2xl border-white/10 bg-white/5 p-8 backdrop-blur-xl">
        <h1 className="text-2xl font-black">Genesis Access</h1>
        <input 
          value={id} onChange={(e) => setId(e.target.value)} 
          placeholder="Access ID" 
          className="mt-6 w-full rounded-lg bg-white/5 p-3"
        />
        <input 
          type="password" value={pw} onChange={(e) => setPw(e.target.value)} 
          placeholder="Passkey" 
          className="mt-3 w-full rounded-lg bg-white/5 p-3"
        />
        <button 
          onClick={() => router.push("/dashboard")}
          className="mt-6 w-full rounded-lg bg-white text-black p-3 font-bold"
        >
          Enter
        </button>
      </div>
    </main>
  );
}

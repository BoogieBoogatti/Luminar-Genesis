"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AuthPage() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleEmailLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) return alert("Enter valid email");
    // TODO: Replace with Supabase/NextAuth later
    localStorage.setItem("luminar_user", email);
    router.push("/dashboard?v=1");
  };

  const handleGoogleLogin = () => {
    // TODO: Replace with NextAuth Google Provider later
    localStorage.setItem("luminar_user", "google@demo.com");
    router.push("/dashboard?v=1");
  };

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="w-full max-w-sm space-y-6">
        <h1 className="text-3xl font-bold text-center">Sign In</h1>
        
        <form onSubmit={handleEmailLogin} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-lg bg-zinc-900 border-zinc-700 focus:outline-none focus:border-white"
            required
          />
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-white text-black font-semibold hover:bg-zinc-200 transition"
          >
            Continue with Email
          </button>
        </form>

        <div className="flex items-center gap-4 text-zinc-500">
          <div className="h-px bg-zinc-800 flex-1" />
          <span className="text-sm">or</span>
          <div className="h-px bg-zinc-800 flex-1" />
        </div>

        <button
          onClick={handleGoogleLogin}
          className="w-full py-3 rounded-lg border-zinc-700 font-semibold hover:bg-zinc-900 transition"
        >
          Continue with Google
        </button>

        <p className="text-xs text-zinc-500 text-center">
          Demo only. No real auth yet.
        </p>
      </div>
    </main>
  );
}

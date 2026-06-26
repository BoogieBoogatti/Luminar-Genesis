'use client';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  return (
    <main className="flex min-h-screen items-center justify-center bg-black p-4">
      <div className="w-full max-w-sm rounded-2xl border-white/10 bg-white/5 p-8 backdrop-blur-2xl">
        <h2 className="mb-6 text-center text-3xl font-bold">Access Granted</h2>
        <button onClick={() => router.push('/dashboard')} className="w-full rounded-xl bg-white py-3 text-lg font-bold text-black transition hover:scale-[1.02]">
          Sign In
        </button>
      </div>
    </main>
  );
}

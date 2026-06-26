'use client';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  return (
    <main className="flex min-h-screen items-center justify-center bg-black text-white">
      <button 
        onClick={() => router.push('/dashboard')} 
        className="rounded bg-white px-8 py-3 text-black text-xl font-bold"
      >
        Sign In
      </button>
    </main>
  );
}

'use client'
import { createClient } from '@/lib/supabase/client'
import { useState } from 'react'

export default function Auth() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const supabase = createClient()

  const signUp = async () => {
    await supabase.auth.signUp({ email, password })
    alert('Check email to confirm')
  }
  
  const signIn = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (!error) window.location.href = '/'
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <div className="w-80 space-y-4">
        <input className="w-full p-2 rounded bg-gray-800 text-white" placeholder="Email" onChange={e => setEmail(e.target.value)} />
        <input className="w-full p-2 rounded bg-gray-800 text-white" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
        <button className="w-full p-2 bg-white text-black rounded" onClick={signIn}>Login</button>
        <button className="w-full p-2 border rounded text-white" onClick={signUp}>Sign Up</button>
      </div>
    </div>
  )
}

'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

type Note = {
  id: number
  content: string
  created_at: string
}

export default function Home() {
  const [user, setUser] = useState<any>(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [notes, setNotes] = useState<Note[]>([])
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(false)

  // 1. Check if user is logged in
  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user)
      if (user) fetchNotes()
    })
  }, [])

  // 2. Fetch notes for this user only - RLS handles it
  async function fetchNotes() {
    const { data } = await supabase.from('notes').select('*').order('created_at', { ascending: false })
    if (data) setNotes(data)
  }

  // 3. Login
  async function signIn() {
    setLoading(true)
    await supabase.auth.signInWithPassword({ email, password })
    const { data: { user } = await supabase.auth.getUser()
    setUser(user)
    if (user) fetchNotes()
    setLoading(false)
  }

  // 4. Logout
  async function signOut() {
    await supabase.auth.signOut()
    setUser(null)
    setNotes([])
  }

  // 5. Create Note
  async function addNote() {
    if (!content) return
    const { error } = await supabase.from('notes').insert([{ content, user_id: user.id }])
    if (!error) {
      setContent('')
      fetchNotes() // Refresh list
    }
  }

  // 6. Delete Note
  async function deleteNote(id: number) {
    await supabase.from('notes').delete().eq('id', id)
    fetchNotes()
  }

  // AUTH SCREEN
  if (!user) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-4">
        <h1 className="text-2xl font-bold">Login</h1>
        <input className="border p-2 text-black" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <input className="border p-2 text-black" placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
        <button className="bg-green-600 text-white px-4 py-2 rounded" onClick={signIn} disabled={loading}>
          {loading ? 'Loading...' : 'Sign In'}
        </button>
      </main>
    )
  }

  // NOTES APP SCREEN
  return (
    <main className="max-w-xl mx-auto p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">My Notes</h1>
        <button className="text-sm underline" onClick={signOut}>Logout</button>
      </div>
      
      <div className="flex gap-2 mb-6">
        <input 
          className="border p-2 flex-1 text-black" 
          placeholder="Type a note..." 
          value={content} 
          onChange={e => setContent(e.target.value)} 
        />
        <button className="bg-blue-600 text-white px-4 rounded" onClick={addNote}>Add</button>
      </div>

      <ul className="space-y-2">
        {notes.map(note => (
          <li key={note.id} className="border p-3 rounded flex justify-between items-center">
            <span>{note.content}</span>
            <button className="text-red-500 text-sm" onClick={() => deleteNote(note.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </main>
  )
    }

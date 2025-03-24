import { useState, useEffect } from 'react'

export default function Navbar() {
  const [dark, setDark] = useState(() => localStorage.getItem('theme') === 'dark')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow-md dark:shadow-zinc-700">
      <h1 className="text-xl font-bold">CrackCode</h1>
      <button
        onClick={() => setDark(!dark)}
        className="border px-3 py-1 rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-800"
      >
        {dark ? '☀️ Light' : '🌙 Dark'}
      </button>
    </nav>
  )
}
'use client'

import { useEffect, useState } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false)

  // טעינה ראשונית מ־localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
      document.documentElement.classList.add('dark')
      setIsDark(true)
    } else {
      document.documentElement.classList.remove('dark')
      setIsDark(false)
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark'
    setIsDark(!isDark)

    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    localStorage.setItem('theme', newTheme)
  }

  return (
    <button
      onClick={toggleTheme}
      className="text-xl p-2 rounded-full hover:bg-accent-muted transition-colors"
      aria-label="Toggle theme"
    >
      {isDark ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-accent" />}
    </button>
  )
}

export default ThemeToggle

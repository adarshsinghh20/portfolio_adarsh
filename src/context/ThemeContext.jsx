import { createContext, useContext, useEffect, useState } from 'react'
import { applyTheme, getStoredTheme } from '../lib/theme'

const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => getStoredTheme())

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((current) => {
      const next = current === 'dark' ? 'light' : 'dark'
      applyTheme(next)
      return next
    })
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}

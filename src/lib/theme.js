const STORAGE_KEY = 'theme'

export function getStoredTheme() {
  if (typeof window === 'undefined') return 'dark'
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'light' || stored === 'dark') return stored
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

/** Apply theme to <html> immediately (used on toggle and on load). */
export function applyTheme(theme) {
  const root = document.documentElement
  const isDark = theme === 'dark'
  root.classList.toggle('dark', isDark)
  root.dataset.theme = theme
  root.style.colorScheme = theme
  localStorage.setItem(STORAGE_KEY, theme)
}

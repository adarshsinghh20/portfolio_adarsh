import { useEffect, useState } from 'react'
import { navLinks, profile } from '../data/portfolio'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const scrollTo = (id) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen ? 'header-bar' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-4 sm:px-8 lg:px-12">
        <button
          type="button"
          onClick={() => scrollTo('hero')}
          className="rounded-md transition opacity-90 hover:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          aria-label={`${profile.name} — home`}
        >
          <img
            src={profile.logo}
            alt={`${profile.name} logo`}
            className="h-14 w-auto sm:h-16 md:h-[4.5rem]"
            width={200}
            height={72}
            decoding="async"
          />
        </button>

        <nav className="hidden items-center gap-6 md:flex lg:gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => scrollTo(link.id)}
              className="text-sm font-medium text-muted transition hover:text-heading"
            >
              {link.label}
            </button>
          ))}
          <ThemeToggle />
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white transition hover:bg-accent-light"
          >
            Hire me
          </a>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-theme text-muted"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-theme bg-white px-5 pb-6 pt-2 dark:bg-ink-950 md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => scrollTo(link.id)}
                className="rounded-lg px-3 py-3 text-left text-body hover-surface hover:text-heading"
              >
                {link.label}
              </button>
            ))}
            <a
              href={`mailto:${profile.email}`}
              className="mt-2 rounded-full bg-accent px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Hire me
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

import { profile } from '../data/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer border-t border-theme px-5 py-8 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-ink-400 dark:text-ink-500 sm:flex-row">
        <p>
          © {year} {profile.name}. Built with React & Tailwind CSS.
        </p>
        <div className="flex gap-6">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-heading"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-heading"
          >
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="hover:text-heading">
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}

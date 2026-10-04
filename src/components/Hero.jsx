import { profile } from '../data/portfolio'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden px-5 pb-10 pt-24 sm:px-8 lg:px-12 lg:pb-0"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(13,148,136,0.2),transparent)] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(13,148,136,0.28),transparent)]"
        aria-hidden
      />
      <div className="section-container relative z-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-16">
        <div className="order-2 mt-6 min-w-0 self-start sm:mt-10 lg:order-1 lg:mt-20 xl:mt-24">
          <p className="availability-badge mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-semibold">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-600 opacity-75 dark:bg-emerald-400" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600 dark:bg-emerald-400" />
            </span>
            Open for internships, freelance & full-time
          </p>

          <h1 className="font-serif text-4xl leading-tight text-heading sm:text-5xl lg:text-6xl">
            Hi, I&apos;m{' '}
            <span className="text-accent">{profile.name}</span>
          </h1>
          <p className="mt-2 text-xl font-medium text-muted sm:text-2xl">
            {profile.title}
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {profile.availability.map((item) => (
              <span
                key={item}
                className="rounded-lg border border-theme bg-teal-50/90 px-3 py-1.5 text-sm text-body dark:bg-white/5"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-accent-dark px-7 py-3 text-sm font-semibold text-white transition hover:bg-accent dark:bg-white dark:text-ink-900 dark:hover:bg-ink-100"
            >
              View projects
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full border border-theme px-7 py-3 text-sm font-semibold text-heading transition hover-surface"
            >
              Get in touch
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm text-muted">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition hover:text-heading"
            >
              <GitHubIcon />
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition hover:text-heading"
            >
              <LinkedInIcon />
              LinkedIn
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2 transition hover:text-heading"
            >
              <MailIcon />
              {profile.email}
            </a>
          </div>
        </div>

        <div className="order-1 flex shrink-0 justify-center leading-[0] lg:order-2 lg:justify-end">
          <img
            src={profile.image}
            alt={profile.name}
            className="block h-[min(32rem,78vw)] w-auto max-w-[min(100%,22rem)] object-contain object-bottom lg:h-[min(44rem,88vh)] lg:max-w-md"
            width={400}
            height={580}
            decoding="async"
          />
        </div>
      </div>
    </section>
  )
}

function GitHubIcon() {
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
      />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  )
}

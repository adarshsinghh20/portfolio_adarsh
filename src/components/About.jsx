import SectionHeading from './SectionHeading'
import { profile } from '../data/portfolio'

export default function About() {
  return (
    <section className="section-padding border-t border-theme bg-section-alt">
      <div className="section-container">
        <SectionHeading
          id="about"
          title="About me"
          subtitle="A focused full-stack developer who ships secure backends and thoughtful frontends."
        />
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-4 text-body leading-relaxed">
            <p>
              I&apos;m {profile.name}, pursuing B.Tech in Information Technology. I specialize in
              building full-stack web applications with the MERN stack—REST APIs,
              authentication, and data modeling that scales with real users.
            </p>
            <p>
              From e-commerce and finance trackers to healthcare backends for field
              workers, I enjoy owning features end to end: API design, validation,
              database structure, and polished user experiences. I complement product
              work with consistent DSA practice and a Meta Full-Stack Web Developer
              Professional Certificate on Coursera.
            </p>
            <p>
              I&apos;m actively looking for{' '}
              <strong className="font-medium text-heading">internships</strong>,{' '}
              <strong className="font-medium text-heading">freelance</strong>{' '}
              collaborations, and{' '}
              <strong className="font-medium text-heading">entry-level full-time</strong>{' '}
              roles where I can contribute quickly and grow with your team.
            </p>
          </div>
          <aside className="rounded-2xl border border-theme bg-card p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">
              Quick facts
            </h3>
            <ul className="mt-4 space-y-4 text-sm">
              <li>
                <span className="text-ink-400 dark:text-ink-500">Location</span>
                <p className="text-heading">{profile.location}</p>
              </li>
              <li>
                <span className="text-ink-400 dark:text-ink-500">Phone</span>
                <p>
                  <a
                    href={`tel:${profile.phone.replace(/\s/g, '')}`}
                    className="text-heading hover:text-accent"
                  >
                    {profile.phone}
                  </a>
                </p>
              </li>
              <li>
                <span className="text-ink-400 dark:text-ink-500">Education</span>
                <p className="text-heading">B.Tech IT · 2023–2027</p>
              </li>
              <li>
                <span className="text-ink-400 dark:text-ink-500">Focus</span>
                <p className="text-heading">MERN · REST · JWT · MongoDB</p>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  )
}

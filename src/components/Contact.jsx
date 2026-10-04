import SectionHeading from './SectionHeading'
import { profile } from '../data/portfolio'

export default function Contact() {
  return (
    <section className="section-padding">
      <div className="section-container">
        <div className="contact-panel overflow-hidden rounded-3xl border border-theme bg-gradient-to-br from-white to-teal-50 p-8 dark:from-ink-900 dark:to-ink-950 sm:p-12 lg:p-16">
          <SectionHeading
            id="contact"
            title="Let's work together"
            subtitle="Have an internship, freelance gig, or junior developer role? I'd love to hear from you."
          />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <ContactCard
              label="Email"
              href={`mailto:${profile.email}`}
              value={profile.email}
            />
            <ContactCard
              label="Phone"
              href={`tel:${profile.phone.replace(/\s/g, '')}`}
              value={profile.phone}
            />
            <ContactCard
              label="LinkedIn"
              href={profile.linkedin}
              value="Connect on LinkedIn"
              external
            />
            <ContactCard
              label="GitHub"
              href={profile.github}
              value="View repositories"
              external
            />
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={`mailto:${profile.email}?subject=Opportunity%20for%20Adarsh%20Singh`}
              className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-accent-light"
            >
              Send an email
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-theme px-8 py-3.5 text-sm font-semibold text-heading transition hover-surface"
            >
              Message on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactCard({ label, href, value, external }) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="block rounded-2xl border border-theme bg-card p-5 transition hover:border-accent/40"
    >
      <span className="text-xs font-semibold uppercase tracking-wider text-ink-400 dark:text-ink-500">
        {label}
      </span>
      <p className="mt-2 break-all text-sm font-medium text-heading">{value}</p>
    </a>
  )
}

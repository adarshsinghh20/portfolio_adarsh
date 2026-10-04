import SectionHeading from './SectionHeading'
import { skills } from '../data/portfolio'

export default function Skills() {
  return (
    <section className="section-padding">
      <div className="section-container">
        <SectionHeading
          id="skills"
          title="Technical skills"
          subtitle="Tools and technologies I use to build production-ready web applications."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl border border-theme bg-card-muted p-6 transition hover:border-accent/40"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
                {group.category}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md bg-teal-50 px-2.5 py-1 text-sm text-body dark:bg-white/5"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

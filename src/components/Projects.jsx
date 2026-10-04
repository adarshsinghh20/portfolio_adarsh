import SectionHeading from './SectionHeading'
import { projects, profile } from '../data/portfolio'

export default function Projects() {
  return (
    <section className="section-padding border-t border-theme bg-section-alt">
      <div className="section-container">
        <SectionHeading
          id="projects"
          title="Selected projects"
          subtitle="Full-stack work spanning e-commerce, finance, and healthcare systems."
        />
        <div className="space-y-6">
          {projects.map((project, index) => (
            <article
              key={project.name}
              className="group rounded-2xl border border-theme bg-card p-6 transition hover:border-accent/30 sm:p-8"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <span className="text-xs font-medium uppercase tracking-wider text-ink-400">
                    Project {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-1 font-serif text-2xl text-heading">
                    {project.name}
                  </h3>
                  <p className="text-muted">{project.subtitle}</p>
                </div>
                <time
                  dateTime={project.date}
                  className="shrink-0 text-sm text-ink-400 dark:text-ink-500"
                >
                  {project.date}
                </time>
              </div>
              <ul className="mt-6 space-y-2 text-body">
                {project.highlights.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-theme px-3 py-1 text-xs font-medium text-body"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-ink-400 dark:text-ink-500">
          More experiments and coursework on{' '}
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </section>
  )
}

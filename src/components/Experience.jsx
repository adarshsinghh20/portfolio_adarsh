import SectionHeading from './SectionHeading'
import { experience, certifications, achievements } from '../data/portfolio'

export default function Experience() {
  return (
    <section className="section-padding">
      <div className="section-container">
        <SectionHeading
          id="experience"
          title="Experience & credentials"
          subtitle="Internship experience, professional certification, and continuous learning."
        />
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="mb-6 text-lg font-semibold text-heading">Work experience</h3>
            {experience.map((job) => (
              <div
                key={job.company}
                className="rounded-2xl border border-theme bg-card-muted p-6"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="font-medium text-heading">{job.role}</p>
                  <span className="text-sm text-ink-400 dark:text-ink-500">{job.period}</span>
                </div>
                <p className="mt-1 text-accent">{job.company}</p>
                <ul className="mt-4 space-y-2 text-sm text-body">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="text-ink-400">—</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="mb-6 text-lg font-semibold text-heading">Certifications</h3>
              {certifications.map((cert) => (
                <div
                  key={cert.title}
                  className="rounded-2xl border border-theme bg-card-muted p-6"
                >
                  <p className="font-medium text-heading">{cert.title}</p>
                  <p className="mt-1 text-sm text-accent">{cert.issuer}</p>
                  <p className="mt-3 text-sm text-muted">{cert.detail}</p>
                </div>
              ))}
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold text-heading">Achievements</h3>
              <ul className="space-y-3 text-sm text-body">
                {achievements.map((item) => (
                  <li
                    key={item}
                    className="rounded-xl border border-theme bg-card px-4 py-3"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

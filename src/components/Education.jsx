import SectionHeading from './SectionHeading'
import { education } from '../data/portfolio'

export default function Education() {
  const college = education[0]

  return (
    <section className="section-padding border-t border-theme bg-section-alt">
      <div className="section-container">
        <SectionHeading
          id="education"
          title="Education"
          subtitle="Undergraduate studies in information technology."
        />
        <div className="rounded-2xl border border-theme bg-card p-6 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="font-serif text-2xl text-heading">{college.school}</h3>
              <p className="mt-2 text-lg text-body">{college.degree}</p>
              <p className="mt-1 text-accent">{college.detail}</p>
            </div>
            <div className="shrink-0 text-sm text-ink-400 dark:text-ink-500 sm:text-right">
              <p className="font-medium text-heading">{college.period}</p>
              <p>{college.location}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

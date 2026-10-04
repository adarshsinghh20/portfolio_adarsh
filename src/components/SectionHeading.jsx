export default function SectionHeading({ id, title, subtitle }) {
  return (
    <div id={id} className="mb-12 scroll-mt-28">
      <h2 className="font-serif text-3xl text-heading sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 max-w-2xl text-muted">{subtitle}</p>}
    </div>
  )
}

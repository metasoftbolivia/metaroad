type SectionPlaceholderProps = {
  id: string
  title: string
  description: string
}

export function SectionPlaceholder({
  id,
  title,
  description,
}: SectionPlaceholderProps) {
  const headingId = `${id}-title`

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="scroll-mt-24 border-b border-border px-5 py-14 sm:px-8 sm:py-20"
    >
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-[minmax(12rem,0.7fr)_1.3fr] md:items-start">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Sección preparada
          </p>
          <h2 id={headingId} className="text-2xl font-bold sm:text-3xl">
            {title}
          </h2>
        </div>
        <p className="max-w-2xl leading-7 text-muted-foreground">{description}</p>
      </div>
    </section>
  )
}

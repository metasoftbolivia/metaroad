import { siteContent } from "@/data/site-content"

export function Modules() {
  const { modules } = siteContent

  return (
    <section
      id="modulos"
      aria-labelledby="modules-title"
      className="scroll-mt-24 border-b border-border px-5 py-16 sm:px-8 sm:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
          METAROAD
        </p>
        <h2 id="modules-title" className="text-3xl font-bold sm:text-4xl">
          {modules.title}
        </h2>
        <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
          {modules.description}
        </p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {modules.items.map((item) => (
            <li key={item.href}>
              <a
                className="group flex min-h-16 items-center justify-between gap-4 rounded-lg border border-border bg-surface px-5 py-4 font-semibold transition-colors hover:border-accent focus-visible:border-accent"
                href={item.href}
              >
                <span>{item.label}</span>
                <span
                  aria-hidden="true"
                  className="text-accent transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

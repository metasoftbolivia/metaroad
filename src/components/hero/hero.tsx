import { siteContent } from "@/data/site-content"

export function Hero() {
  const { hero } = siteContent

  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden border-b border-border px-5 py-20 sm:px-8 sm:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 -z-10 w-2/3 bg-[radial-gradient(ellipse_at_70%_50%,rgb(251_201_0_/_12%),transparent_68%)]"
      />
      <div className="mx-auto max-w-7xl">
        <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-accent">
          {hero.eyebrow}
        </p>
        <h1
          id="hero-title"
          className="max-w-4xl text-5xl font-black tracking-tight text-foreground sm:text-7xl"
        >
          {hero.title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
          {hero.description}
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <a
            className="inline-flex min-h-12 items-center justify-center rounded-md bg-accent px-5 py-3 font-bold text-background transition-colors hover:bg-accent/90"
            href="#modulos"
          >
            {hero.primaryCta}
          </a>
          <a
            className="inline-flex min-h-12 items-center justify-center rounded-md border border-border px-5 py-3 font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
            href="#contacto"
          >
            {hero.secondaryCta}
          </a>
        </div>
        <p className="mt-8 max-w-xl text-sm leading-6 text-muted-foreground">
          El contenido comercial, las demostraciones y los datos de contacto se
          completarán cuando estén validados.
        </p>
      </div>
    </section>
  )
}

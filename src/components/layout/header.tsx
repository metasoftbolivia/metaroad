import { siteContent } from "@/data/site-content"

export function Header() {
  return (
    <>
      <a
        className="sr-only fixed left-4 top-4 z-50 rounded bg-accent px-4 py-2 font-semibold text-background focus:not-sr-only"
        href="#contenido"
      >
        Saltar al contenido
      </a>
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <a
            href="#inicio"
            className="w-fit text-lg font-black tracking-[0.16em] text-foreground"
            aria-label={`${siteContent.brand}, ir al inicio`}
          >
            {siteContent.brand}
          </a>
          <nav aria-label="Navegación principal">
            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
              {siteContent.navigation.map((item) => (
                <li key={item.href}>
                  <a
                    className="rounded-sm transition-colors hover:text-accent focus-visible:text-accent"
                    href={item.href}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

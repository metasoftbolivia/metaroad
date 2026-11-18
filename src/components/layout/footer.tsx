import { siteContent } from "@/data/site-content"

export function Footer() {
  return (
    <footer className="border-t border-border px-5 py-7 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>{siteContent.brand}</p>
        <a className="w-fit rounded-sm hover:text-accent" href="#inicio">
          Volver al inicio
        </a>
      </div>
    </footer>
  )
}

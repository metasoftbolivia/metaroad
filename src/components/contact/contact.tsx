import { MapPin } from "lucide-react"
import { siteContent } from "@/data/site-content"

export function Contact() {
  const { contact } = siteContent

  return (
    <section
      id="contacto"
      aria-labelledby="contact-title"
      className="scroll-mt-24 px-5 py-16 sm:px-8 sm:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
          METAROAD
        </p>
        <h2 id="contact-title" className="text-3xl font-bold sm:text-4xl">
          {contact.title}
        </h2>
        <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
          {contact.description}
        </p>

        <div className="mt-9 grid gap-8 lg:grid-cols-2">
          <form
            action={contact.formActionUrl ?? undefined}
            method="post"
            aria-describedby="contact-form-status"
            className="flex flex-col gap-5 rounded-xl border border-border bg-surface p-5 sm:p-7"
          >
            <div className="flex flex-col gap-2">
              <label className="font-medium" htmlFor="contact-name">
                Nombre
              </label>
              <input
                autoComplete="name"
                className="min-h-12 rounded-md border border-border bg-background px-3 text-foreground placeholder:text-muted-foreground"
                id="contact-name"
                name="name"
                placeholder=""
                required
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-medium" htmlFor="contact-email">
                Correo electrónico
              </label>
              <input
                autoComplete="email"
                className="min-h-12 rounded-md border border-border bg-background px-3 text-foreground placeholder:text-muted-foreground"
                id="contact-email"
                name="email"
                placeholder=""
                required
                type="email"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-medium" htmlFor="contact-message">
                Mensaje
              </label>
              <textarea
                className="min-h-32 resize-y rounded-md border border-border bg-background px-3 py-3 text-foreground placeholder:text-muted-foreground"
                id="contact-message"
                name="message"
                required
                rows={5}
              />
            </div>
            <button
              className="min-h-12 rounded-md bg-accent px-5 py-3 font-bold text-background disabled:cursor-not-allowed disabled:opacity-60"
              disabled={!contact.formActionUrl}
              type="submit"
            >
              Envío pendiente de configuración
            </button>
            <p className="text-sm text-muted-foreground" id="contact-form-status" role="status">
              El formulario no está conectado y no envía información.
            </p>
          </form>

          <div className="flex flex-col gap-5">
            {contact.mapEmbedUrl ? (
              <iframe
                className="min-h-72 w-full rounded-xl border border-border"
                loading="lazy"
                referrerPolicy="no-referrer"
                src={contact.mapEmbedUrl}
                title="Mapa de ubicación METAROAD"
              />
            ) : (
              <div
                aria-label="Mapa pendiente de una ubicación verificada"
                className="flex min-h-72 flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-border bg-surface px-6 text-center text-muted-foreground"
                role="img"
              >
                <MapPin aria-hidden="true" className="size-7 text-accent" />
                <p>Mapa pendiente de una ubicación verificada</p>
              </div>
            )}

            {contact.whatsappUrl ? (
              <a
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-accent px-5 py-3 font-semibold text-accent transition-colors hover:bg-accent hover:text-background"
                href={contact.whatsappUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                Abrir WhatsApp
              </a>
            ) : (
              <button
                className="min-h-12 cursor-not-allowed rounded-md border border-border px-5 py-3 font-semibold text-muted-foreground"
                disabled
                type="button"
              >
                WhatsApp pendiente de configuración
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

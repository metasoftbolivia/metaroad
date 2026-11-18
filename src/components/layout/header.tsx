import Image from "next/image"
import { siteContent } from "@/data/site-content"
import { WhatsAppCta } from "@/components/layout/whatsapp-cta"

export function Header() {
  return (
    <>
      <a className="skip-link sr-only focus:not-sr-only" href="#contenido">
        Saltar al contenido
      </a>
      <header className="site-header">
        <div className="site-header__inner">
          <a
            href="#inicio"
            className="site-header__brand"
            aria-label={`${siteContent.brand}, ir al inicio`}
          >
            <Image
              src="/imágenes_web/logo/metaroad_wordmark_recreacion.svg"
              alt={siteContent.brand}
              width={194}
              height={50}
              priority
            />
          </a>
          <nav className="site-header__nav" aria-label="Navegación principal">
            {siteContent.navigation.map((item) => (
              <a className="site-header__link" href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <WhatsAppCta
            className="site-header__cta"
            label="Solicitar demo"
            statusId="header-whatsapp-status"
          />
        </div>
      </header>
    </>
  )
}

import { Play } from "lucide-react"
import { ModuleExperience } from "@/components/hero/module-experience"
import { WhatsAppCta } from "@/components/layout/whatsapp-cta"
import { siteContent } from "@/data/site-content"

export function Hero() {
  const { hero } = siteContent
  const [firstLine, secondLine] = hero.title.split(". ")
  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title">
      <div className="hero__backdrop" aria-hidden="true" />
      <div className="hero__container">
        <div className="hero__copy">
          <p className="hero__eyebrow">{hero.eyebrow}</p>
          <h1 id="hero-title" className="hero__title">
            {firstLine}. <span>{secondLine}</span>
          </h1>
          <p className="hero__description">{hero.description}</p>
          <div className="hero__actions">
            <WhatsAppCta
              className="hero__primary-cta"
              label={hero.primaryCta}
              statusId="hero-whatsapp-status"
            />
            <a className="hero-cta" href="#demo">
              <Play aria-hidden="true" />
              <span>{hero.secondaryCta}</span>
            </a>
          </div>
          {!siteContent.contact.whatsappUrl && (
            <p className="hero__whatsapp-note">
              El enlace oficial de WhatsApp se activará cuando se configure el número de contacto.
            </p>
          )}
        </div>
        <div className="hero__visual">
          <ModuleExperience />
        </div>
      </div>
    </section>
  )
}

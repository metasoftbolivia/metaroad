"use client"

import { useState } from "react"
import {
  BarChart3,
  Bus,
  CircleDollarSign,
  Package,
  Ticket,
  Users,
} from "lucide-react"
import { HeroSystem } from "@/components/metaroad/hero/HeroSystem"
import { HeroNavbar } from "@/components/metaroad/hero/HeroNavbar"
import { HeroScene } from "@/components/metaroad/hero/HeroScene"
import type { HeroModuleDefinition } from "@/components/metaroad/hero/SystemModulePanel"
import { WhatsAppCta } from "@/components/layout/whatsapp-cta"
import { siteContent } from "@/data/site-content"

const heroModules: HeroModuleDefinition[] = [
  {
    id: "pasajes",
    label: "Venta de pasajes",
    icon: Ticket,
    position: { x: 43, y: 34, rotation: "-8deg" },
  },
  {
    id: "encomiendas",
    label: "Encomiendas",
    icon: Package,
    position: { x: 53, y: 24, rotation: "-5deg" },
  },
  {
    id: "caja",
    label: "Caja y egresos",
    icon: CircleDollarSign,
    position: { x: 63, y: 18, rotation: "0deg" },
  },
  {
    id: "usuarios",
    label: "Usuarios y permisos",
    icon: Users,
    position: { x: 73, y: 18, rotation: "5deg" },
  },
  {
    id: "unidades",
    label: "Unidades y flota",
    icon: Bus,
    position: { x: 83, y: 24, rotation: "7deg" },
  },
  {
    id: "reportes",
    label: "Reportes",
    icon: BarChart3,
    position: { x: 93, y: 34, rotation: "9deg" },
  },
]

export function MetaroadHero() {
  const [activeModuleId, setActiveModuleId] = useState(heroModules[0].id)
  const [firstLine, ...remainingLines] = siteContent.hero.title.split(". ")
  const secondLine = remainingLines.join(". ")
  const headingFirstLine = firstLine.endsWith(".") ? firstLine : `${firstLine}.`

  return (
    <>
      <HeroNavbar />
      <main id="contenido">
        <section className="metaroad-hero" aria-labelledby="hero-title" id="inicio">
          <div className="metaroad-hero__viewport">
            <HeroScene />
            <div className="metaroad-hero__shade" aria-hidden="true" />
            <div className="metaroad-hero__content">
              <div className="metaroad-hero__copy-position">
                <div className="metaroad-hero__copy-scroll" data-scroll-copy>
                  <div className="metaroad-hero__copy" data-copy-entry id="software">
                    <p className="metaroad-hero__eyebrow">{siteContent.hero.eyebrow}</p>
                    <h1 id="hero-title" className="metaroad-hero__title">
                      {headingFirstLine}
                      <span>{secondLine}</span>
                    </h1>
                    <p className="metaroad-hero__description" id="beneficios">
                      {siteContent.hero.description}
                    </p>
                    <div className="metaroad-hero__actions" id="contacto">
                      <WhatsAppCta
                        className="metaroad-hero__whatsapp"
                        label={siteContent.hero.primaryCta}
                        statusId="metaroad-hero-whatsapp-status"
                      />
                      <a className="metaroad-hero__secondary" href="#modulos">
                        <span>{siteContent.hero.secondaryCta}</span>
                        <span aria-hidden="true">↘</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <HeroSystem
                modules={heroModules}
                activeModuleId={activeModuleId}
                onSelectModule={setActiveModuleId}
              />

              <a className="metaroad-hero__scroll-cue" data-scroll-cue href="#modulos">
                <span>Desplázate y explora</span>
                <span className="metaroad-hero__scroll-icon" aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { WhatsAppCta } from "@/components/layout/whatsapp-cta"

const navigationItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Software", href: "#software" },
  { label: "Módulos", href: "#modulos" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Clientes", href: "#clientes" },
  { label: "Contacto", href: "#contacto" },
]

export function HeroNavbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    let frame = 0

    function updateHeader() {
      if (frame) window.cancelAnimationFrame(frame)
      frame = window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > 28)
        frame = 0
      })
    }

    updateHeader()
    window.addEventListener("scroll", updateHeader, { passive: true })

    return () => {
      window.removeEventListener("scroll", updateHeader)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <>
      <a className="skip-link sr-only focus:not-sr-only" href="#contenido">
        Saltar al contenido
      </a>
      <header
        className={`metaroad-navbar${scrolled ? " is-scrolled" : ""}`}
        data-hero-navbar
      >
        <div className="metaroad-navbar__inner">
          <a className="metaroad-navbar__brand" href="#inicio" aria-label="METAROAD, ir al inicio">
            <Image
              src="/imágenes_web/hero/metaroad-logo.png"
              alt="METAROAD"
              width={340}
              height={114}
              priority
              sizes="(max-width: 640px) 144px, 188px"
            />
          </a>

          <nav
            className={`metaroad-navbar__nav${menuOpen ? " is-open" : ""}`}
            id="metaroad-navigation"
            aria-label="Navegación principal"
          >
            {navigationItems.map((item) => (
              <a
                className="metaroad-navbar__link"
                href={item.href}
                key={item.href}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="metaroad-navbar__actions">
            <WhatsAppCta
              className="metaroad-navbar__cta"
              label="Solicitar demo"
              statusId="metaroad-header-whatsapp-status"
            />
            <button
              className="metaroad-navbar__menu"
              type="button"
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={menuOpen}
              aria-controls="metaroad-navigation"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

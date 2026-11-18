"use client"

import { useLayoutEffect, useRef, useState, type PointerEvent } from "react"
import {
  BarChart3,
  Bus,
  CircleDollarSign,
  Package,
  Ticket,
  Users,
} from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { HeroBus } from "@/components/metaroad/hero/HeroBus"
import { HeroConnections } from "@/components/metaroad/hero/HeroConnections"
import { HeroModuleDefinition } from "@/components/metaroad/hero/HeroModuleCard"
import { HeroOrbit } from "@/components/metaroad/hero/HeroOrbit"
import { HeroParticles } from "@/components/metaroad/hero/HeroParticles"
import { HeroPlatform } from "@/components/metaroad/hero/HeroPlatform"
import { HeroNavbar } from "@/components/metaroad/hero/HeroNavbar"
import { HeroScene } from "@/components/metaroad/hero/HeroScene"
import { WhatsAppCta } from "@/components/layout/whatsapp-cta"
import { siteContent } from "@/data/site-content"
import { heroCardMotion, heroMotion } from "@/lib/hero-motion"
import { useReducedMotion } from "@/lib/use-reduced-motion"

const heroModules: HeroModuleDefinition[] = [
  {
    id: "pasajes",
    label: "Venta de pasajes",
    icon: Ticket,
    position: { x: 43, y: 34, rotation: "-8deg", depth: 1.6 },
    ...heroCardMotion[0],
  },
  {
    id: "encomiendas",
    label: "Encomiendas",
    icon: Package,
    position: { x: 53, y: 24, rotation: "-5deg", depth: 1.4 },
    ...heroCardMotion[1],
  },
  {
    id: "caja",
    label: "Caja y egresos",
    icon: CircleDollarSign,
    position: { x: 63, y: 18, rotation: "0deg", depth: 1.2 },
    ...heroCardMotion[2],
  },
  {
    id: "usuarios",
    label: "Usuarios y permisos",
    icon: Users,
    position: { x: 73, y: 18, rotation: "5deg", depth: 1.2 },
    ...heroCardMotion[3],
  },
  {
    id: "unidades",
    label: "Unidades y flota",
    icon: Bus,
    position: { x: 83, y: 24, rotation: "7deg", depth: 1.4 },
    ...heroCardMotion[4],
  },
  {
    id: "reportes",
    label: "Reportes",
    icon: BarChart3,
    position: { x: 93, y: 34, rotation: "9deg", depth: 1.6 },
    ...heroCardMotion[5],
  },
]

export function MetaroadHero() {
  const sectionRef = useRef<HTMLElement>(null)
  const viewportRef = useRef<HTMLDivElement>(null)
  const pointerFrameRef = useRef<number | null>(null)
  const pointerPositionRef = useRef({ x: 0, y: 0 })
  const reducedMotion = useReducedMotion()
  const [activeModuleId, setActiveModuleId] = useState(heroModules[0].id)
  const activeModule = heroModules.find((module) => module.id === activeModuleId)
  const [firstLine, ...remainingLines] = siteContent.hero.title.split(". ")
  const secondLine = remainingLines.join(". ")
  const headingFirstLine = firstLine.endsWith(".") ? firstLine : `${firstLine}.`

  useLayoutEffect(() => {
    const section = sectionRef.current
    if (!section) return

    gsap.registerPlugin(ScrollTrigger)

    const context = gsap.context(() => {
      if (reducedMotion) return

      const intro = gsap.timeline({ defaults: { ease: "power3.out" } })
      const navbar = document.querySelector<HTMLElement>("[data-hero-navbar]")
      const cardEntries = gsap.utils.toArray<HTMLElement>("[data-orbit-entry]", section)
      const connectionLines = gsap.utils.toArray<SVGPathElement>("[data-connection-line]", section)

      if (navbar) {
        intro.fromTo(
          navbar,
          { autoAlpha: 0, y: -14 },
          { autoAlpha: 1, y: 0, duration: 0.48 },
          heroMotion.intro.navbar,
        )
      }

      intro.fromTo(
        "[data-background-drift]",
        { autoAlpha: 0, scale: 1.02 },
        { autoAlpha: 1, scale: 1, duration: 0.9 },
        heroMotion.intro.background,
      )
      intro.fromTo(
        "[data-copy-entry]",
        { autoAlpha: 0, x: -25, y: 15 },
        { autoAlpha: 1, x: 0, y: 0, duration: 0.72 },
        heroMotion.intro.copy,
      )
      intro.fromTo(
        "[data-platform-entry]",
        { autoAlpha: 0, scale: 0.96 },
        { autoAlpha: 1, scale: 1, duration: 0.7 },
        heroMotion.intro.platform,
      )
      intro.fromTo(
        "[data-road-entry]",
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 0.65 },
        heroMotion.intro.road,
      )
      intro.fromTo(
        "[data-bus-entry]",
        { autoAlpha: 0, x: 90, scale: 0.94, filter: "blur(5px)" },
        { autoAlpha: 1, x: 0, scale: 1, filter: "blur(0px)", duration: 1.5 },
        heroMotion.intro.bus,
      )
      intro.fromTo(
        "[data-rings-entry]",
        { autoAlpha: 0, scale: 0.98 },
        { autoAlpha: 0.82, scale: 1, duration: 0.8 },
        heroMotion.intro.rings,
      )
      intro.fromTo(
        connectionLines,
        { autoAlpha: 0, strokeDashoffset: 100 },
        {
          autoAlpha: 0.82,
          strokeDashoffset: 0,
          duration: 0.85,
          stagger: 0.08,
        },
        heroMotion.intro.connections,
      )
      intro.fromTo(
        cardEntries,
        {
          autoAlpha: 0,
          scale: 0.82,
          x: (_index, target) => Number(target.dataset.entryX ?? 0),
          y: (_index, target) => Number(target.dataset.entryY ?? 0),
          rotation: (_index, target) => Number(target.dataset.entryRotation ?? 0),
        },
        {
          autoAlpha: 1,
          scale: 1,
          x: 0,
          y: 0,
          rotation: 0,
          duration: 0.62,
          stagger: heroMotion.cardStagger,
        },
        heroMotion.intro.cards,
      )
      intro.fromTo(
        "[data-particle-entry]",
        { autoAlpha: 0 },
        { autoAlpha: 0.58, duration: 0.75 },
        heroMotion.intro.particles,
      )
      intro.fromTo(
        "[data-scroll-cue]",
        { autoAlpha: 0, y: 10 },
        { autoAlpha: 1, y: 0, duration: 0.5 },
        heroMotion.intro.scrollCue,
      )

      gsap.to("[data-background-drift]", {
        scale: 1.04,
        y: -8,
        duration: 18,
        delay: heroMotion.ambientStart,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      })
      gsap.to("[data-road-drift]", {
        xPercent: 1,
        opacity: 0.92,
        duration: 8,
        delay: heroMotion.ambientStart,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      })
      gsap.to("[data-rings-drift]", {
        scale: 1.02,
        rotation: 1,
        opacity: 0.95,
        duration: 11,
        delay: heroMotion.ambientStart,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      })
      gsap.to("[data-platform-float]", {
        scale: 1.012,
        filter: "brightness(1.08)",
        duration: 6,
        delay: heroMotion.ambientStart,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      })
      gsap.to("[data-bus-float]", {
        y: -4,
        duration: 6,
        delay: heroMotion.ambientStart,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      })
      gsap.to("[data-particle-drift]", {
        x: 4,
        y: -8,
        opacity: 0.72,
        duration: 9,
        delay: heroMotion.ambientStart,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      })

      cardEntries.forEach((entry, index) => {
        const float = entry.querySelector<HTMLElement>("[data-orbit-float]")
        if (!float) return

        gsap.to(float, {
          y: Number(float.dataset.floatY ?? 8),
          rotation: Number(float.dataset.floatRotation ?? 1),
          duration: Number(float.dataset.floatDuration ?? 5),
          delay: heroMotion.ambientStart + index * 0.12,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        })
      })

      const media = gsap.matchMedia(section)
      media.add("(min-width: 1280px)", () => {
        const scrollTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: `+=${heroMotion.scrollDistance}`,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        })

        scrollTimeline
          .to("[data-scroll-copy]", { y: -30, opacity: 0.78, ease: "none" }, 0)
          .to("[data-scroll-background]", { scale: 1.05, ease: "none" }, 0)
          .to("[data-bus-scroll]", { scale: 0.93, ease: "none" }, 0)
          .to("[data-platform-scroll]", { y: 18, ease: "none" }, 0)
          .to("[data-particle-scroll]", { opacity: 0.18, ease: "none" }, 0)
          .to(
            cardEntries,
            { x: (index) => (index - 2.5) * 5, y: (index) => (index % 2 === 0 ? -5 : 5), ease: "none" },
            0,
          )
          .to("[data-scroll-cue]", { autoAlpha: 0, y: 8, ease: "none" }, 0)
      })
    }, sectionRef)

    return () => context.revert()
  }, [reducedMotion])

  function updateParallax(event: PointerEvent<HTMLDivElement>) {
    if (reducedMotion || event.pointerType !== "mouse" || window.matchMedia("(max-width: 1279px)").matches) {
      return
    }

    const bounds = event.currentTarget.getBoundingClientRect()
    pointerPositionRef.current = {
      x: ((event.clientX - bounds.left) / bounds.width - 0.5) * 10,
      y: ((event.clientY - bounds.top) / bounds.height - 0.5) * 6,
    }

    if (pointerFrameRef.current !== null) return

    pointerFrameRef.current = window.requestAnimationFrame(() => {
      const section = sectionRef.current
      if (!section) return

      section.querySelectorAll<HTMLElement>("[data-parallax-depth]").forEach((target) => {
        const depth = Number(target.dataset.parallaxDepth ?? 1)
        target.style.setProperty("--parallax-x", `${pointerPositionRef.current.x * depth}px`)
        target.style.setProperty("--parallax-y", `${pointerPositionRef.current.y * depth}px`)
      })
      pointerFrameRef.current = null
    })
  }

  function resetParallax() {
    if (pointerFrameRef.current !== null) {
      window.cancelAnimationFrame(pointerFrameRef.current)
      pointerFrameRef.current = null
    }
    sectionRef.current?.querySelectorAll<HTMLElement>("[data-parallax-depth]").forEach((target) => {
      target.style.setProperty("--parallax-x", "0px")
      target.style.setProperty("--parallax-y", "0px")
    })
  }

  useLayoutEffect(() => () => {
    if (pointerFrameRef.current !== null) {
      window.cancelAnimationFrame(pointerFrameRef.current)
    }
  }, [])

  return (
    <>
      <HeroNavbar />
      <main id="contenido">
        <section
          ref={sectionRef}
          className="metaroad-hero"
          aria-labelledby="hero-title"
          id="inicio"
        >
          <div
            ref={viewportRef}
            className="metaroad-hero__viewport"
            onPointerMove={updateParallax}
            onPointerLeave={resetParallax}
          >
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

              <div className="metaroad-hero__stage" role="group" aria-label="Módulos METAROAD alrededor del autobús">
                <HeroConnections modules={heroModules} activeModuleId={activeModuleId} />
                <HeroPlatform />
                <HeroBus />
                <HeroOrbit
                  modules={heroModules}
                  activeModuleId={activeModuleId}
                  reducedMotion={reducedMotion}
                  onSelect={setActiveModuleId}
                />
                <HeroParticles />
              </div>

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

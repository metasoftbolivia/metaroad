"use client"

import gsap from "gsap"
import { useLayoutEffect, useRef, useState } from "react"
import { HeroBus } from "@/components/metaroad/hero/HeroBus"
import { HeroConnections } from "@/components/metaroad/hero/HeroConnections"
import { HeroOrbit } from "@/components/metaroad/hero/HeroOrbit"
import { HeroPlatform } from "@/components/metaroad/hero/HeroPlatform"
import { SystemBoot } from "@/components/metaroad/hero/SystemBoot"
import { SystemCore } from "@/components/metaroad/hero/SystemCore"
import { SystemDataBus } from "@/components/metaroad/hero/SystemDataBus"
import { SystemPulse } from "@/components/metaroad/hero/SystemPulse"
import { SystemScanner } from "@/components/metaroad/hero/SystemScanner"
import type { HeroModuleDefinition } from "@/components/metaroad/hero/SystemModulePanel"

export type HeroMode = "boot" | "scan" | "core" | "pulse" | "assemble" | "connected"

type HeroSystemProps = {
  modules: HeroModuleDefinition[]
  activeModuleId: string
  onSelectModule: (moduleId: string) => void
}

const corePosition = { x: 64, y: 71.5 }

export function HeroSystem({ modules, activeModuleId, onSelectModule }: HeroSystemProps) {
  const stageRef = useRef<HTMLDivElement>(null)
  const [mode, setMode] = useState<HeroMode>("boot")

  useLayoutEffect(() => {
    const stage = stageRef.current
    if (!stage) return

    const scene = stage.closest(".metaroad-hero__viewport") ?? stage
    let timeline: gsap.core.Timeline | null = null
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)")

    const finishSequence = () => {
      timeline?.kill()
      setMode("connected")
      gsap.set("[data-system-bus]", { autoAlpha: 1, filter: "brightness(1)" })
      gsap.set("[data-system-platform]", { filter: "brightness(1)" })
      gsap.set("[data-system-road]", { opacity: 0.56, filter: "brightness(1)" })
      gsap.set("[data-system-rings]", { opacity: 0.82 })
      gsap.set("[data-boot-screen], [data-system-scanner], [data-scan-marker]", { autoAlpha: 0 })
      gsap.set("[data-system-core-ring]", { autoAlpha: 0.82, scale: 1 })
      gsap.set("[data-system-core-center]", { autoAlpha: 1, scale: 1 })
      gsap.set("[data-core-pulse]", { autoAlpha: 0, scale: 1 })
      gsap.set("[data-data-bus]", { autoAlpha: 0.82, strokeDashoffset: 0 })
      gsap.set("[data-connection-base]", {
        autoAlpha: 0.24,
        strokeDasharray: "100 100",
        strokeDashoffset: 0,
      })
      gsap.set("[data-connection-pulse]", {
        autoAlpha: 0.86,
        strokeDasharray: "5 95",
        strokeDashoffset: 0,
      })
      gsap.set("[data-panel-surface]", { autoAlpha: 1 })
      gsap.set("[data-panel-frame]", { autoAlpha: 1, strokeDasharray: "100 100", strokeDashoffset: 0 })
      gsap.set("[data-panel-icon], [data-panel-copy]", {
        autoAlpha: 1,
        clipPath: "inset(0% 0% 0% 0%)",
      })
      gsap.set("[data-energy-rail]", { autoAlpha: 1, scaleX: 1 })
      gsap.set("[data-panel-fragment]", { autoAlpha: 0, x: 0, y: 0 })
    }

    const context = gsap.context(() => {
      const bus = stage.querySelector<HTMLElement>("[data-system-bus]")
      const platform = stage.querySelector<HTMLElement>("[data-system-platform]")
      const road = scene.querySelector<HTMLElement>("[data-system-road]")
      const rings = scene.querySelector<HTMLElement>("[data-system-rings]")
      const scanner = stage.querySelector<HTMLElement>("[data-system-scanner]")
      const scanMask = stage.querySelector<HTMLElement>("[data-system-scan-mask]")
      const scanBeam = stage.querySelector<HTMLElement>("[data-system-scan-beam]")
      const scanMarkers = gsap.utils.toArray<HTMLElement>("[data-scan-marker]", stage)
      const dataBus = gsap.utils.toArray<SVGElement>("[data-data-bus]", stage)
      const coreRings = gsap.utils.toArray<HTMLElement>("[data-system-core-ring]", stage)
      const coreCenter = stage.querySelector<HTMLElement>("[data-system-core-center]")
      const corePulses = gsap.utils.toArray<SVGElement>("[data-core-pulse]", stage)
      const baseLines = gsap.utils.toArray<SVGPathElement>("[data-connection-base]", stage)
      const pulseLines = gsap.utils.toArray<SVGPathElement>("[data-connection-pulse]", stage)
      const panels = gsap.utils.toArray<HTMLElement>("[data-panel-card]", stage)
      const fragments = gsap.utils.toArray<HTMLElement>("[data-panel-fragment]", stage)
      const boot = stage.querySelector<HTMLElement>("[data-boot-screen]")
      const stageBounds = stage.getBoundingClientRect()
      const isSmallScreen = window.matchMedia("(max-width: 640px)").matches

      if (reducedMotionQuery.matches) {
        finishSequence()
        return
      }

      gsap.set(bus, { autoAlpha: 0.82, filter: "brightness(0.84)" })
      gsap.set(platform, { filter: "brightness(0.9)" })
      gsap.set(road, { opacity: 0.52, filter: "brightness(0.92)" })
      gsap.set(rings, { opacity: 0.34 })
      gsap.set(boot, { autoAlpha: 1 })
      gsap.set(scanner, { autoAlpha: 0 })
      gsap.set(scanMarkers, { autoAlpha: 0, scale: 0.65 })
      gsap.set(coreRings, { autoAlpha: 0, scale: 0.72 })
      gsap.set(coreCenter, { autoAlpha: 0, scale: 0.72 })
      gsap.set(corePulses, { autoAlpha: 0, scale: 0.82 })
      gsap.set(dataBus, { autoAlpha: 0, strokeDashoffset: 100 })
      gsap.set(baseLines, {
        autoAlpha: 0,
        strokeDasharray: "10 90",
        strokeDashoffset: 100,
      })
      gsap.set(pulseLines, { autoAlpha: 0, strokeDasharray: "5 95", strokeDashoffset: 100 })
      gsap.set(panels.map((panel) => panel.querySelector("[data-panel-surface]")), { autoAlpha: 0 })
      gsap.set(stage.querySelectorAll("[data-panel-frame]"), {
        autoAlpha: 1,
        strokeDasharray: "100 100",
        strokeDashoffset: 100,
      })
      gsap.set(stage.querySelectorAll("[data-panel-icon], [data-panel-copy]"), {
        autoAlpha: 0,
        clipPath: "inset(0% 100% 0% 0%)",
      })
      gsap.set(stage.querySelectorAll("[data-energy-rail]"), {
        autoAlpha: 0,
        scaleX: 0,
        transformOrigin: "0% 50%",
      })
      gsap.set(fragments, { autoAlpha: 0, x: 0, y: 0 })

      const sequence = gsap.timeline()
      timeline = sequence
      sequence.call(() => setMode("boot"), [], 0)
      sequence.call(() => setMode("scan"), [], 0.86)
      sequence.set(scanner, { autoAlpha: 1 }, 0.86)
      if (scanMask) {
        sequence.fromTo(
          scanMask,
          { maskPosition: "0% 0%", webkitMaskPosition: "0% 0%" },
          {
            maskPosition: "100% 0%",
            webkitMaskPosition: "100% 0%",
            duration: 0.9,
            ease: "sine.inOut",
          },
          0.88,
        )
      }
      if (scanBeam) {
        const scanDistance = scanBeam.parentElement?.getBoundingClientRect().width ?? stageBounds.width
        sequence.fromTo(
          scanBeam,
          { x: -24, autoAlpha: 0.9 },
          { x: scanDistance + 24, autoAlpha: 0, duration: 0.9, ease: "sine.inOut" },
          0.88,
        )
      }
      sequence.fromTo(
        scanMarkers,
        { autoAlpha: 0, scale: 0.65 },
        { autoAlpha: 0.88, scale: 1, duration: 0.12, stagger: 0.08 },
        1.12,
      )
      sequence.to(scanMarkers, { autoAlpha: 0, duration: 0.12 }, 1.62)
      sequence.to(bus, { filter: "brightness(1.26)", duration: 0.2, yoyo: true, repeat: 1 }, 1.12)
      sequence.to(baseLines, { autoAlpha: 0.3, strokeDashoffset: 91, duration: 0.24, stagger: 0.035 }, 1.2)
      sequence.to(boot, { autoAlpha: 0, duration: 0.18 }, 1.58)
      sequence.to(scanner, { autoAlpha: 0, duration: 0.08 }, 1.76)

      sequence.call(() => setMode("core"), [], 1.82)
      sequence.fromTo(
        coreRings,
        { autoAlpha: 0, scale: 0.72 },
        { autoAlpha: 0.84, scale: 1, duration: 0.3, stagger: 0.1, ease: "power2.out" },
        1.84,
      )
      sequence.fromTo(
        coreCenter,
        { autoAlpha: 0, scale: 0.72 },
        { autoAlpha: 1, scale: 1, duration: 0.24, ease: "power2.out" },
        2.08,
      )
      sequence.to(platform, { filter: "brightness(1.18)", duration: 0.26, yoyo: true, repeat: 1 }, 1.9)
      sequence.to(road, { opacity: 0.9, filter: "brightness(1.28)", duration: 0.24, yoyo: true, repeat: 1 }, 1.92)
      sequence.to(dataBus, { autoAlpha: 0.82, duration: 0.24, stagger: 0.08 }, 2.12)
      gsap.to(dataBus, {
        strokeDashoffset: -100,
        duration: isSmallScreen ? 7 : 10,
        ease: "none",
        repeat: -1,
        delay: isSmallScreen ? 1.38 : 2.12,
        stagger: 0.7,
      })

      sequence.call(() => setMode("pulse"), [], 2.28)
      sequence.fromTo(
        corePulses,
        { autoAlpha: 0, scale: 0.82 },
        { autoAlpha: 0.72, scale: 1.72, duration: 0.34, stagger: 0.09, ease: "power2.out" },
        2.28,
      )
      sequence.to(corePulses, { autoAlpha: 0, scale: 2.15, duration: 0.2 }, 2.58)
      sequence.call(() => setMode("assemble"), [], 2.52)

      panels.forEach((panel, index) => {
        const moduleId = panel.dataset.moduleId
        const moduleX = Number(panel.dataset.moduleX ?? 50)
        const moduleY = Number(panel.dataset.moduleY ?? 50)
        const line = baseLines.find((path) => path.dataset.moduleId === moduleId)
        const packet = pulseLines.find((path) => path.dataset.moduleId === moduleId)
        const surface = panel.querySelector<HTMLElement>("[data-panel-surface]")
        const frame = panel.querySelector<SVGPathElement>("[data-panel-frame]")
        const icon = panel.querySelector<HTMLElement>("[data-panel-icon]")
        const copy = panel.querySelector<HTMLElement>("[data-panel-copy]")
        const rail = panel.querySelector<HTMLElement>("[data-energy-rail]")
        const panelFragments = gsap.utils.toArray<HTMLElement>("[data-panel-fragment]", panel)
        const lineStart = 2.42 + index * 0.06
        const arrivalX = ((corePosition.x - moduleX) / 100) * stageBounds.width
        const arrivalY = ((corePosition.y - moduleY) / 100) * stageBounds.height

        if (line) {
          sequence.fromTo(
            line,
            { autoAlpha: 0.2, strokeDasharray: "100 100", strokeDashoffset: 100 },
            { autoAlpha: 0.28, strokeDashoffset: 0, duration: 0.34, ease: "power2.out" },
            lineStart,
          )
        }
        if (packet) {
          sequence.fromTo(
            packet,
            { autoAlpha: 0, strokeDashoffset: 100 },
            { autoAlpha: 0.92, strokeDashoffset: -8, duration: 0.3, ease: "power1.inOut" },
            lineStart + 0.28,
          )
        }
        if (panelFragments.length && !isSmallScreen) {
          panelFragments.forEach((fragment, fragmentIndex) => {
            const vectorX = fragmentIndex % 2 === 0 ? -1 : 1
            const vectorY = fragmentIndex < 2 ? -1 : 1
            sequence.fromTo(
              fragment,
              {
                autoAlpha: 0,
                x: arrivalX + vectorX * 32,
                y: arrivalY + vectorY * 24,
                rotation: vectorX * 14,
              },
              { autoAlpha: 1, x: 0, y: 0, rotation: 0, duration: 0.42, ease: "power2.out" },
              lineStart - 0.05 + fragmentIndex * 0.025,
            )
          })
        }
        if (surface && frame) {
          sequence.to(surface, { autoAlpha: 1, duration: 0.16 }, lineStart + 0.58)
          sequence.fromTo(
            frame,
            { strokeDasharray: "100 100", strokeDashoffset: 100 },
            { strokeDashoffset: 0, duration: 0.42, ease: "power2.out" },
            lineStart + 0.58,
          )
        }
        if (panelFragments.length) {
          sequence.to(panelFragments, { autoAlpha: 0, duration: 0.12 }, lineStart + 0.9)
        }
        if (icon) {
          sequence.fromTo(
            icon,
            { autoAlpha: 0, clipPath: "inset(100% 0% 0% 0%)" },
            { autoAlpha: 1, clipPath: "inset(0% 0% 0% 0%)", duration: 0.22, ease: "power1.out" },
            lineStart + 1.02,
          )
        }
        if (copy) {
          sequence.fromTo(
            copy,
            { autoAlpha: 0, clipPath: "inset(0% 100% 0% 0%)" },
            { autoAlpha: 1, clipPath: "inset(0% 0% 0% 0%)", duration: 0.24, ease: "power1.out" },
            lineStart + 1.12,
          )
        }
        if (rail) {
          sequence.fromTo(
            rail,
            { autoAlpha: 0, scaleX: 0 },
            { autoAlpha: 1, scaleX: 1, duration: 0.18, ease: "power2.out" },
            lineStart + 1.24,
          )
        }
      })

      sequence.to(bus, { autoAlpha: 1, filter: "brightness(1)", duration: 0.28 }, 3.82)
      sequence.to(platform, { filter: "brightness(1)", duration: 0.24 }, 3.82)
      sequence.to(road, { opacity: 0.56, filter: "brightness(1)", duration: 0.24 }, 3.82)
      sequence.to(rings, { opacity: 0.82, duration: 0.24 }, 3.82)
      sequence.call(() => setMode("connected"), [], 4.2)
      if (isSmallScreen) sequence.timeScale(1.55)

      gsap.to(stage.querySelectorAll("[data-panel-signal]"), {
        autoAlpha: 0.42,
        duration: 0.2,
        repeat: -1,
        yoyo: true,
        repeatDelay: 3.4,
        stagger: 0.65,
        delay: isSmallScreen ? 2.8 : 4.2,
      })
    }, scene)

    const handleReducedMotionChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        context.add(() => finishSequence())
      }
    }

    reducedMotionQuery.addEventListener("change", handleReducedMotionChange)

    return () => {
      reducedMotionQuery.removeEventListener("change", handleReducedMotionChange)
      context.revert()
    }
  }, [])

  return (
    <div
      ref={stageRef}
      className="metaroad-hero__stage"
      data-hero-mode={mode}
      role="group"
      aria-label="Sistema METAROAD y sus módulos"
    >
      <HeroConnections modules={modules} activeModuleId={activeModuleId} />
      <HeroPlatform />
      <SystemCore />
      <SystemDataBus />
      <HeroBus />
      <SystemPulse />
      <SystemScanner />
      <HeroOrbit
        modules={modules}
        activeModuleId={activeModuleId}
        onSelect={onSelectModule}
      />
      <SystemBoot mode={mode} />
      <span className="sr-only" role="status" aria-live="polite" aria-atomic="true">
        {mode === "connected" ? "Sistema METAROAD conectado." : `Sistema METAROAD: ${mode}.`}
      </span>
    </div>
  )
}

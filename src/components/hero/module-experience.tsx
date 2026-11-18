"use client"

import Image from "next/image"
import { Pause, Play } from "lucide-react"
import gsap from "gsap"
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react"
import { BusStage } from "@/components/hero/bus-stage"
import { siteContent } from "@/data/site-content"
import { useReducedMotion } from "@/lib/use-reduced-motion"

const defaultOrbitPosition = { x: "50%", y: "50%", rotation: "0deg" }
const orbitPositions = [
  { x: "11%", y: "39%", rotation: "-8deg" },
  { x: "29%", y: "16%", rotation: "-5deg" },
  { x: "50%", y: "8%", rotation: "0deg" },
  { x: "71%", y: "16%", rotation: "5deg" },
  { x: "89%", y: "39%", rotation: "8deg" },
  { x: "72%", y: "60%", rotation: "5deg" },
  { x: "28%", y: "60%", rotation: "-5deg" },
]

export function ModuleExperience({ modelUrl }: { modelUrl: string | null }) {
  const rootRef = useRef<HTMLDivElement>(null)
  const detailRef = useRef<HTMLElement>(null)
  const animationsRef = useRef<gsap.core.Animation[]>([])
  const detailTweenRef = useRef<gsap.core.Tween | null>(null)
  const pausedRef = useRef(false)
  const [activeModuleIndex, setActiveModuleIndex] = useState(0)
  const [animationsPaused, setAnimationsPaused] = useState(false)
  const reducedMotion = useReducedMotion()
  const modules = siteContent.modules.items
  const activeModule = modules[activeModuleIndex] ?? modules[0]

  useEffect(() => {
    const root = rootRef.current
    if (!root || reducedMotion) return

    const stage = root.querySelector<HTMLElement>("[data-bus-reveal]")
    const moduleNodes = root.querySelectorAll<HTMLElement>("[data-orbit-node]")
    const moduleContents = root.querySelectorAll<HTMLElement>("[data-orbit-content]")
    const detail = detailRef.current
    const busDrift = root.querySelector<HTMLElement>("[data-bus-drift]")
    const moduleFloats = root.querySelectorAll<HTMLElement>("[data-orbit-float]")

    const context = gsap.context(() => {
      const intro = gsap.timeline({ defaults: { ease: "power3.out" } })
      if (stage) {
        intro.fromTo(stage, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.55 })
      }
      if (moduleNodes.length) {
        intro.fromTo(
          moduleNodes,
          { autoAlpha: 0 },
          { autoAlpha: 1, duration: 0.32, stagger: 0.075 },
          "-=0.28",
        )
      }
      if (moduleContents.length) {
        intro.fromTo(
          moduleContents,
          { y: 10 },
          { y: 0, duration: 0.38, stagger: 0.06 },
          "-=0.2",
        )
      }
      if (detail) {
        intro.fromTo(
          detail,
          { autoAlpha: 0, y: 8 },
          { autoAlpha: 1, y: 0, duration: 0.38 },
          "-=0.18",
        )
      }

      const driftAnimations: gsap.core.Animation[] = []
      if (busDrift) {
        driftAnimations.push(
          gsap.to(busDrift, {
            y: -4,
            duration: 4.2,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
          }),
        )
      }
      if (moduleFloats.length) {
        driftAnimations.push(
          gsap.to(moduleFloats, {
            y: -3,
            duration: 3.2,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            stagger: { each: 0.16, from: "center" },
          }),
        )
      }

      animationsRef.current = [intro, ...driftAnimations]
      if (pausedRef.current) {
        animationsRef.current.forEach((animation) => animation.pause())
      }
    }, root)

    return () => {
      animationsRef.current = []
      context.revert()
    }
  }, [reducedMotion])

  useEffect(() => {
    pausedRef.current = animationsPaused
    animationsRef.current.forEach((animation) => {
      if (animationsPaused) animation.pause()
      else animation.resume()
    })
    if (detailTweenRef.current) {
      if (animationsPaused) detailTweenRef.current.pause()
      else detailTweenRef.current.resume()
    }
  }, [animationsPaused])

  useEffect(() => {
    const detail = detailRef.current
    if (!detail) return

    detailTweenRef.current?.kill()
    if (reducedMotion || animationsPaused) {
      gsap.set(detail, { clearProps: "opacity,transform,visibility" })
      return
    }

    const transition = gsap.fromTo(
      detail,
      { autoAlpha: 0, y: 8 },
      { autoAlpha: 1, y: 0, duration: 0.28, ease: "power2.out" },
    )
    detailTweenRef.current = transition
    return () => {
      transition.kill()
    }
  }, [activeModuleIndex, animationsPaused, reducedMotion])

  if (!activeModule) return null

  return (
    <div className="module-experience" id="modulos" ref={rootRef}>
      <div className="module-experience__stage" data-bus-reveal>
        <BusStage animationsPaused={animationsPaused} modelUrl={modelUrl} />
        <p className="module-orbit__hint">Desliza para explorar los módulos</p>
        <ul
          className="module-orbit"
          aria-label="Selecciona un módulo para ver su información"
        >
          {modules.map((module, index) => {
            const position = orbitPositions[index] ?? defaultOrbitPosition
            const positionStyle = {
              "--orbit-x": position.x,
              "--orbit-y": position.y,
              "--orbit-rotation": position.rotation,
            } as CSSProperties

            return (
              <li
                className="module-orbit__item"
                data-orbit-node
                key={module.label}
                style={positionStyle}
              >
                <button
                  className="module-orbit__button"
                  type="button"
                  aria-pressed={activeModuleIndex === index}
                  aria-controls="demo-detail"
                  onClick={() => setActiveModuleIndex(index)}
                >
                  <span className="module-orbit__float" data-orbit-float>
                    <span className="module-orbit__content" data-orbit-content>
                      <Image
                        className="module-orbit__icon"
                        src={module.icon}
                        alt=""
                        aria-hidden="true"
                        width={28}
                        height={28}
                      />
                      <span>{module.label}</span>
                    </span>
                  </span>
                </button>
              </li>
            )
          })}
        </ul>
      </div>

      <section
        className="module-experience__detail"
        id="demo"
        ref={detailRef}
        aria-labelledby="module-detail-title"
        aria-live="polite"
        aria-atomic="true"
      >
        <div className="module-experience__detail-copy" id="demo-detail">
          <p className="module-experience__eyebrow">Módulo seleccionado</p>
          <h2 id="module-detail-title">{activeModule.label}</h2>
          <p className="module-experience__detail-description">
            El alcance y los flujos reales de este módulo se presentarán con
            información validada durante una demostración de METAROAD.
          </p>
        </div>
        <span className="module-experience__index" aria-hidden="true">
          {String(activeModuleIndex + 1).padStart(2, "0")}
        </span>
      </section>

      <div className="module-experience__controls">
        <button
          className="module-experience__motion-toggle"
          type="button"
          aria-pressed={animationsPaused}
          onClick={() => setAnimationsPaused((paused) => !paused)}
        >
          {animationsPaused ? (
            <Play aria-hidden="true" />
          ) : (
            <Pause aria-hidden="true" />
          )}
          <span>{animationsPaused ? "Reanudar animaciones" : "Pausar animaciones"}</span>
        </button>
      </div>
      <span className="sr-only" aria-live="polite">
        {animationsPaused ? "Animaciones pausadas." : "Animaciones activas."}
      </span>
    </div>
  )
}

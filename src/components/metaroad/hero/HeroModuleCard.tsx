"use client"

import Image from "next/image"
import { useRef, type CSSProperties } from "react"
import type { LucideIcon } from "lucide-react"
import gsap from "gsap"

export type HeroModuleDefinition = {
  id: string
  label: string
  icon: LucideIcon
  position: {
    x: number
    y: number
    rotation: string
    depth: number
  }
  entry: {
    x: number
    y: number
    rotation: number
  }
  float: {
    y: number
    rotation: number
    duration: number
  }
}

type HeroModuleCardProps = {
  module: HeroModuleDefinition
  isActive: boolean
  reducedMotion: boolean
  onSelect: (moduleId: string) => void
}

export function HeroModuleCard({ module, isActive, reducedMotion, onSelect }: HeroModuleCardProps) {
  const floatRef = useRef<HTMLSpanElement>(null)
  const style = {
    left: `${module.position.x}%`,
    top: `${module.position.y}%`,
    "--orbit-tilt": module.position.rotation,
  } as CSSProperties

  function handleSelect() {
    if (!reducedMotion && floatRef.current) {
      const ambientTweens = gsap.getTweensOf(floatRef.current)
      ambientTweens.forEach((tween) => tween.pause())
      gsap.fromTo(
        floatRef.current,
        { scale: 1 },
        {
          scale: 1.08,
          duration: 0.22,
          repeat: 1,
          yoyo: true,
          onComplete: () => ambientTweens.forEach((tween) => tween.resume()),
        },
      )
    }
    onSelect(module.id)
  }

  const Icon = module.icon

  return (
    <li className="metaroad-orbit__item" style={style}>
      <div className="metaroad-orbit__parallax" data-parallax-depth={module.position.depth}>
        <div
          className="metaroad-orbit__entry"
          data-orbit-entry
          data-entry-x={module.entry.x}
          data-entry-y={module.entry.y}
          data-entry-rotation={module.entry.rotation}
        >
          <span
            ref={floatRef}
            className="metaroad-orbit__float"
            data-orbit-float
            data-float-y={module.float.y}
            data-float-rotation={module.float.rotation}
            data-float-duration={module.float.duration}
          >
            <button
              className="metaroad-module-card"
              type="button"
              aria-pressed={isActive}
              data-active={isActive}
              onClick={handleSelect}
            >
              <span className="metaroad-module-card__art" aria-hidden="true">
                <Image
                  src="/imágenes_web/hero/module-card-bg.png"
                  alt=""
                  fill
                  sizes="(max-width: 980px) 132px, 170px"
                  draggable={false}
                />
              </span>
              <span className="metaroad-module-card__content">
                <Icon className="metaroad-module-card__icon" aria-hidden="true" />
                <span>{module.label}</span>
              </span>
            </button>
          </span>
        </div>
      </div>
    </li>
  )
}

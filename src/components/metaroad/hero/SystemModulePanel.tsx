import type { CSSProperties } from "react"
import type { LucideIcon } from "lucide-react"

export type HeroModuleDefinition = {
  id: string
  label: string
  icon: LucideIcon
  position: {
    x: number
    y: number
    rotation: string
  }
}

type SystemModulePanelProps = {
  module: HeroModuleDefinition
  isActive: boolean
  onSelect: (moduleId: string) => void
}

export function SystemModulePanel({ module, isActive, onSelect }: SystemModulePanelProps) {
  const Icon = module.icon
  const positionStyle = {
    left: `${module.position.x}%`,
    top: `${module.position.y}%`,
    "--orbit-tilt": module.position.rotation,
  } as CSSProperties

  return (
    <li
      className="metaroad-orbit__item system-panel"
      style={positionStyle}
      data-panel-card
      data-module-id={module.id}
      data-module-x={module.position.x}
      data-module-y={module.position.y}
    >
      <span className="system-panel__fragments" aria-hidden="true">
        <span className="system-panel__fragment system-panel__fragment--anchor" data-panel-fragment />
        <span className="system-panel__fragment system-panel__fragment--corner-a" data-panel-fragment />
        <span className="system-panel__fragment system-panel__fragment--corner-b" data-panel-fragment />
        <span className="system-panel__fragment system-panel__fragment--edge" data-panel-fragment />
        <span className="system-panel__fragment system-panel__fragment--glyph" data-panel-fragment />
      </span>

      <button
        className="metaroad-module-card system-panel__surface"
        type="button"
        aria-pressed={isActive}
        data-active={isActive}
        data-panel-surface
        onClick={() => onSelect(module.id)}
      >
        <svg className="system-panel__frame" viewBox="0 0 180 160" preserveAspectRatio="none" aria-hidden="true">
          <path
            className="system-panel__frame-path"
            d="M 16 2 H 151 L 178 28 V 132 L 156 158 H 17 L 2 143 V 17 Z"
            pathLength="100"
            data-panel-frame
          />
          <path className="system-panel__frame-inset" d="M 17 8 H 148 L 171 30 V 129 L 153 151 H 19 L 9 141 V 19 Z" />
        </svg>
        <span className="system-panel__anchor" data-panel-signal aria-hidden="true" />
        <span className="system-panel__corner system-panel__corner--top" aria-hidden="true" />
        <span className="system-panel__corner system-panel__corner--bottom" aria-hidden="true" />
        <span className="system-panel__connection-point" data-panel-signal aria-hidden="true" />
        <span className="system-panel__content">
          <Icon className="metaroad-module-card__icon" aria-hidden="true" data-panel-icon />
          <span className="system-panel__label" data-panel-copy>{module.label}</span>
        </span>
        <span className="system-panel__energy-rail" data-energy-rail aria-hidden="true" />
      </button>
    </li>
  )
}

import type { HeroModuleDefinition } from "@/components/metaroad/hero/SystemModulePanel"

const modulePaths = [
  "M 430 296 C 440 360 530 420 640 500",
  "M 530 226 C 540 300 580 390 640 500",
  "M 630 184 C 635 280 635 400 640 500",
  "M 730 184 C 725 300 680 420 640 500",
  "M 830 226 C 810 330 710 420 640 500",
  "M 930 296 C 880 370 760 450 640 500",
]

type HeroConnectionsProps = {
  modules: HeroModuleDefinition[]
  activeModuleId: string
}

export function HeroConnections({ modules, activeModuleId }: HeroConnectionsProps) {
  return (
    <svg
      className="metaroad-connections"
      viewBox="0 0 1000 700"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {modules.map((module, index) => (
        <g key={module.id}>
          <path
            className="metaroad-connections__line metaroad-connections__base"
            d={modulePaths[index]}
            pathLength="100"
            data-connection-base
            data-module-id={module.id}
            data-active={module.id === activeModuleId}
          />
          <path
            className="metaroad-connections__line metaroad-connections__packet"
            d={modulePaths[index]}
            pathLength="100"
            data-connection-pulse
            data-module-id={module.id}
          />
        </g>
      ))}
    </svg>
  )
}

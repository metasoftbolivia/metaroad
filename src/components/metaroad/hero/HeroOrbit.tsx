import type { HeroModuleDefinition } from "@/components/metaroad/hero/SystemModulePanel"
import { SystemModulePanel } from "@/components/metaroad/hero/SystemModulePanel"

type HeroOrbitProps = {
  modules: HeroModuleDefinition[]
  activeModuleId: string
  onSelect: (moduleId: string) => void
}

export function HeroOrbit({ modules, activeModuleId, onSelect }: HeroOrbitProps) {
  const activeModule = modules.find((module) => module.id === activeModuleId)

  return (
    <div className="metaroad-orbit" id="modulos">
      <p className="metaroad-orbit__hint">Desliza para explorar los módulos</p>
      <ul className="metaroad-orbit__list" aria-label="Selecciona un módulo METAROAD">
        {modules.map((module) => (
          <SystemModulePanel
            key={module.id}
            module={module}
            isActive={module.id === activeModuleId}
            onSelect={onSelect}
          />
        ))}
      </ul>
      <span className="sr-only" aria-live="polite" aria-atomic="true">
        {activeModule ? `${activeModule.label} seleccionado.` : ""}
      </span>
    </div>
  )
}

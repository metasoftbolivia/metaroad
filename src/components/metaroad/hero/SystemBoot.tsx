import type { HeroMode } from "@/components/metaroad/hero/HeroSystem"

type SystemBootProps = {
  mode: HeroMode
}

const bootReadouts: Record<HeroMode, { core: string; bus: string; modules: string }> = {
  boot: { core: "STANDBY", bus: "OFFLINE", modules: "WAITING" },
  scan: { core: "SCANNING", bus: "OFFLINE", modules: "WAITING" },
  core: { core: "ONLINE", bus: "SYNCING", modules: "STANDBY" },
  pulse: { core: "ONLINE", bus: "ACTIVE", modules: "DEPLOYING" },
  assemble: { core: "ONLINE", bus: "ACTIVE", modules: "ASSEMBLING" },
  connected: { core: "ONLINE", bus: "ACTIVE", modules: "READY" },
}

export function SystemBoot({ mode }: SystemBootProps) {
  const readout = bootReadouts[mode]

  return (
    <div className="system-boot" data-boot-screen aria-hidden="true">
      <p className="system-boot__heading">METAROAD / SYSTEM</p>
      <p><span>CORE</span><strong>{readout.core}</strong></p>
      <p><span>DATA BUS</span><strong>{readout.bus}</strong></p>
      <p><span>MODULES</span><strong>{readout.modules}</strong></p>
    </div>
  )
}

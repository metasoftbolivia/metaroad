import Image from "next/image"

export function SystemScanner() {
  return (
    <div className="system-scanner" data-system-scanner aria-hidden="true">
      <div className="system-scanner__target">
        <div className="system-scanner__mask" data-system-scan-mask>
          <Image
            src="/imágenes_web/hero/bus-hero.png"
            alt=""
            fill
            sizes="(max-width: 980px) 76vw, 58vw"
            draggable={false}
          />
        </div>
        <span className="system-scanner__beam" data-system-scan-beam />
        <span className="system-scanner__marker system-scanner__marker--one" data-scan-marker />
        <span className="system-scanner__marker system-scanner__marker--two" data-scan-marker />
        <span className="system-scanner__marker system-scanner__marker--three" data-scan-marker />
      </div>
    </div>
  )
}

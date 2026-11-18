import Image from "next/image"

export function HeroPlatform() {
  return (
    <div className="metaroad-platform__parallax" data-system-platform>
      <div className="metaroad-platform__scroll">
        <div className="metaroad-platform__entry">
          <div className="metaroad-platform__float">
            <Image
              src="/imágenes_web/hero/hero-platform.png"
              alt=""
              fill
              sizes="(max-width: 980px) 120vw, 70vw"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

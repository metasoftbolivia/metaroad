import Image from "next/image"

export function HeroScene() {
  return (
    <div className="metaroad-layers" aria-hidden="true">
      <div className="metaroad-layer metaroad-layer--background">
        <div className="metaroad-layer__scroll">
          <div className="metaroad-layer__drift">
            <Image
              src="/imágenes_web/hero/hero-background.png"
              alt=""
              fill
              priority
              sizes="100vw"
              draggable={false}
            />
          </div>
        </div>
      </div>

      <div className="metaroad-layer metaroad-layer--overlay">
        <div className="metaroad-layer__entry">
          <Image
            src="/imágenes_web/hero/hero-overlay.png"
            alt=""
            fill
            sizes="100vw"
            draggable={false}
          />
        </div>
      </div>

      <div className="metaroad-layer metaroad-layer--road" data-system-road>
        <div className="metaroad-layer__entry">
          <div className="metaroad-layer__drift">
            <Image
              src="/imágenes_web/hero/hero-road-glow.png"
              alt=""
              fill
              sizes="100vw"
              draggable={false}
            />
          </div>
        </div>
      </div>

      <div className="metaroad-layer metaroad-layer--rings" data-system-rings>
        <div className="metaroad-layer__entry">
          <div className="metaroad-layer__drift">
            <Image
              src="/imágenes_web/hero/hero-light-rings.png"
              alt=""
              fill
              priority
              sizes="(max-width: 980px) 120vw, 90vw"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

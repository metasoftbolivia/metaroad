import Image from "next/image"

export function HeroScene() {
  return (
    <div className="metaroad-layers" aria-hidden="true">
      <div className="metaroad-layer metaroad-layer--background" data-parallax-depth="0.35">
        <div className="metaroad-layer__scroll" data-scroll-background>
          <div className="metaroad-layer__drift" data-background-drift>
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

      <div className="metaroad-layer metaroad-layer--overlay" data-parallax-depth="0.55">
        <div className="metaroad-layer__entry" data-overlay-entry>
          <Image
            src="/imágenes_web/hero/hero-overlay.png"
            alt=""
            fill
            sizes="100vw"
            draggable={false}
          />
        </div>
      </div>

      <div className="metaroad-layer metaroad-layer--road" data-parallax-depth="0.85">
        <div className="metaroad-layer__entry" data-road-entry>
          <div className="metaroad-layer__drift" data-road-drift>
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

      <div className="metaroad-layer metaroad-layer--rings" data-parallax-depth="0.75">
        <div className="metaroad-layer__entry" data-rings-entry>
          <div className="metaroad-layer__drift" data-rings-drift>
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

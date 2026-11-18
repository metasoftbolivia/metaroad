import Image from "next/image"

export function HeroPlatform() {
  return (
    <div className="metaroad-platform__parallax" data-parallax-depth="0.9">
      <div className="metaroad-platform__scroll" data-platform-scroll>
        <div className="metaroad-platform__entry" data-platform-entry>
          <div className="metaroad-platform__float" data-platform-float>
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

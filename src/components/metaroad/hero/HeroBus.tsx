import Image from "next/image"

export function HeroBus() {
  return (
    <div className="metaroad-bus__parallax" data-parallax-depth="1">
      <div className="metaroad-bus__scroll" data-bus-scroll>
        <div className="metaroad-bus__entry" data-bus-entry id="clientes">
          <div className="metaroad-bus__float" data-bus-float>
            <Image
              src="/imágenes_web/hero/bus-hero.png"
              alt=""
              fill
              priority
              sizes="(max-width: 980px) 100vw, 62vw"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

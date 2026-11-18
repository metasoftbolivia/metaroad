import Image from "next/image"

export function HeroBus() {
  return (
    <div className="metaroad-bus__parallax">
      <div className="metaroad-bus__scroll">
        <div className="metaroad-bus__entry" data-system-bus id="clientes">
          <div className="metaroad-bus__float">
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

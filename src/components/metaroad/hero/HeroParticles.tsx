import Image from "next/image"

export function HeroParticles() {
  return (
    <div className="metaroad-particles" data-parallax-depth="0.75" aria-hidden="true">
      <div className="metaroad-particles__scroll" data-particle-scroll>
        <div className="metaroad-particles__entry" data-particle-entry>
          <div className="metaroad-particles__drift" data-particle-drift>
            <Image
              src="/imágenes_web/hero/hero-particles.png"
              alt=""
              fill
              sizes="100vw"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

"use client"

import Image from "next/image"

export function BusStage() {
  return (
    <div
      className="bus-stage"
      role="img"
      aria-label="Autobús METAROAD de la imagen aprobada."
    >
      <div className="bus-stage__glow" aria-hidden="true" />
      <div className="bus-stage__ground" aria-hidden="true" />
      <div className="bus-stage__art">
        <div className="bus-stage__float" data-bus-drift>
          <Image
            className="bus-stage__image"
            src="/imágenes_web/hero/bus-hero.png"
            alt=""
            aria-hidden="true"
            fill
            sizes="(max-width: 640px) 96vw, (max-width: 980px) 86vw, 56vw"
            draggable={false}
          />
        </div>
      </div>
      <p className="bus-stage__caption" aria-hidden="true">
        Autobús METAROAD aprobado
      </p>
    </div>
  )
}

"use client"

import dynamic from "next/dynamic"
import Image from "next/image"
import {
  Component,
  useEffect,
  useRef,
  useState,
  type PointerEvent,
  type ReactNode,
} from "react"
import { useReducedMotion } from "@/lib/use-reduced-motion"

const BusScene = dynamic(
  () => import("@/components/hero/bus-scene").then((module) => module.BusScene),
  {
    ssr: false,
    loading: () => <div className="bus-stage__scene-loading" aria-hidden="true" />,
  },
)

type BusModelBoundaryProps = {
  children: ReactNode
  fallback: ReactNode
  onError: () => void
}

type BusModelBoundaryState = {
  hasError: boolean
}

class BusModelBoundary extends Component<
  BusModelBoundaryProps,
  BusModelBoundaryState
> {
  state: BusModelBoundaryState = { hasError: false }

  static getDerivedStateFromError(): BusModelBoundaryState {
    return { hasError: true }
  }

  componentDidCatch() {
    this.props.onError()
  }

  render() {
    return this.state.hasError ? this.props.fallback : this.props.children
  }
}

function BusIllustration() {
  return (
    <Image
      className="bus-stage__image"
      src="/imágenes_web/buses/bus_vector_conceptual.svg"
      alt=""
      aria-hidden="true"
      fill
      sizes="(max-width: 640px) 96vw, (max-width: 980px) 86vw, 56vw"
      draggable={false}
    />
  )
}

export function BusStage({
  animationsPaused,
  modelUrl,
}: {
  animationsPaused: boolean
  modelUrl: string | null
}) {
  const stageRef = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()
  const [modelFailed, setModelFailed] = useState(false)

  useEffect(() => {
    if (!animationsPaused && !reducedMotion) return
    stageRef.current?.style.setProperty("--bus-tilt-x", "0deg")
    stageRef.current?.style.setProperty("--bus-tilt-y", "0deg")
  }, [animationsPaused, reducedMotion])

  useEffect(() => {
    setModelFailed(false)
  }, [modelUrl])

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (animationsPaused || reducedMotion || event.pointerType !== "mouse") return

    const bounds = event.currentTarget.getBoundingClientRect()
    const x = (event.clientX - bounds.left) / bounds.width - 0.5
    const y = (event.clientY - bounds.top) / bounds.height - 0.5
    event.currentTarget.style.setProperty("--bus-tilt-x", `${(x * 2.2).toFixed(2)}deg`)
    event.currentTarget.style.setProperty("--bus-tilt-y", `${(-y * 1.5).toFixed(2)}deg`)
  }

  function resetParallax() {
    stageRef.current?.style.setProperty("--bus-tilt-x", "0deg")
    stageRef.current?.style.setProperty("--bus-tilt-y", "0deg")
  }

  return (
    <div
      className="bus-stage"
      ref={stageRef}
      role="img"
      aria-label={
        modelUrl && !modelFailed
          ? "Representación del autobús desde un modelo GLB."
          : "Ilustración vectorial conceptual de un autobús con parallax 2.5D; fallback temporal hasta integrar el modelo GLB."
      }
      onPointerMove={handlePointerMove}
      onPointerLeave={resetParallax}
    >
      <div className="bus-stage__glow" aria-hidden="true" />
      <div className="bus-stage__ground" aria-hidden="true" />
      <div className="bus-stage__art">
        <div className="bus-stage__float" data-bus-drift>
          {modelUrl ? (
            <BusModelBoundary
              key={modelUrl}
              fallback={<BusIllustration />}
              onError={() => setModelFailed(true)}
            >
              <BusScene modelUrl={modelUrl} />
            </BusModelBoundary>
          ) : (
            <BusIllustration />
          )}
        </div>
      </div>
      <p className="bus-stage__caption" aria-hidden="true">
        {modelUrl && !modelFailed
          ? "Modelo GLB auténtico"
          : "Ilustración vectorial · fallback 2.5D"}
      </p>
    </div>
  )
}

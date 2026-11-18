"use client"

import { Suspense } from "react"
import { Bounds, useGLTF } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

function LoadedBus({ modelUrl }: { modelUrl: string }) {
  const { scene } = useGLTF(modelUrl)

  return (
    <Bounds fit clip observe margin={1.2}>
      <primitive object={scene} rotation={[0, -0.32, 0]} />
    </Bounds>
  )
}

export function BusScene({ modelUrl }: { modelUrl: string }) {
  return (
    <Canvas
      className="bus-stage__canvas"
      camera={{ position: [0, 1.1, 5], fov: 36 }}
      dpr={[1, 1.5]}
      gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
    >
      <ambientLight intensity={1.25} />
      <directionalLight position={[4, 5, 5]} intensity={2.3} />
      <directionalLight position={[-4, 2, -2]} intensity={1.1} color="#f6c915" />
      <Suspense fallback={null}>
        <LoadedBus modelUrl={modelUrl} />
      </Suspense>
    </Canvas>
  )
}

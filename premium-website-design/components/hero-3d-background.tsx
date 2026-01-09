"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { useRef, Suspense } from "react"
import type * as THREE from "three"

function FloatingShape() {
  const meshRef = useRef<THREE.Mesh>(null)

  const prefersReducedMotion =
    typeof window !== "undefined" ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false

  useFrame((state) => {
    if (!meshRef.current || prefersReducedMotion) return

    // Slow, subtle rotation
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.08
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.12

    // Slow floating motion
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.4
  })

  return (
    <mesh ref={meshRef} position={[2.8, 0, 0]} scale={3.8}>
      <icosahedronGeometry args={[1, 1]} />
      <meshPhysicalMaterial
        color="#a0a8c0"
        metalness={0.3}
        roughness={0.1}
        transmission={0.25}
        thickness={0.5}
        clearcoat={1.0}
        clearcoatRoughness={0.1}
        reflectivity={0.8}
      />
    </mesh>
  )
}

export function Hero3DBackground() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute right-0 top-1/2 h-[600px] w-[600px] -translate-y-1/2 translate-x-1/4 rounded-full bg-accent/20 blur-[120px]" />
      </div>

      <div className="pointer-events-none absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 6], fov: 45 }} dpr={[1, 1.5]} className="h-full w-full">
          <Suspense fallback={null}>
            <ambientLight intensity={0.8} />
            <directionalLight position={[5, 5, 5]} intensity={2.2} color="#ffffff" />
            <directionalLight position={[-4, -3, -5]} intensity={1.2} color="#8891ff" />
            <pointLight position={[0, 0, 10]} intensity={1.0} color="#b5c4fc" />
            <FloatingShape />
          </Suspense>
        </Canvas>
      </div>

      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-background/50 via-black/15 to-background" />
    </>
  )
}

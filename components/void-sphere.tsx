'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Icosahedron, MeshDistortMaterial } from '@react-three/drei'
import { useRef, useState } from 'react'
import { MathUtils } from 'three'
import type { ElementRef } from 'react'
import type { Group } from 'three'

type DistortMaterial = ElementRef<typeof MeshDistortMaterial>

type MaterialState = {
  emissiveIntensity: number
  opacity: number
  distort: number
}

function SmoothWireMaterial({
  hovered,
  color,
  emissive,
  base,
  active,
}: {
  hovered: boolean
  color: string
  emissive: string
  base: MaterialState
  active: MaterialState
}) {
  const material = useRef<DistortMaterial>(null)

  useFrame((_, delta) => {
    if (!material.current) return
    const target = hovered ? active : base
    const ease = 1 - Math.exp(-delta * 3.8)

    material.current.opacity = MathUtils.lerp(
      material.current.opacity,
      target.opacity,
      ease,
    )
    material.current.emissiveIntensity = MathUtils.lerp(
      material.current.emissiveIntensity,
      target.emissiveIntensity,
      ease,
    )
    material.current.distort = MathUtils.lerp(
      material.current.distort,
      target.distort,
      ease,
    )
  })

  return (
    <MeshDistortMaterial
      ref={material}
      wireframe
      transparent
      color={color}
      emissive={emissive}
      emissiveIntensity={base.emissiveIntensity}
      opacity={base.opacity}
      distort={base.distort}
      speed={0.42}
      roughness={1}
    />
  )
}

function Blob() {
  const group = useRef<Group>(null)
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (!group.current) return
    const t = state.clock.getElapsedTime()
    group.current.rotation.x = t * 0.025
    group.current.rotation.y = t * 0.04
    group.current.rotation.z = MathUtils.lerp(
      group.current.rotation.z,
      state.pointer.x * (hovered ? 0.18 : 0.08),
      0.035,
    )
    group.current.scale.x = MathUtils.lerp(
      group.current.scale.x,
      hovered ? 0.7 : 0.65,
      0.035,
    )
    group.current.scale.y = MathUtils.lerp(
      group.current.scale.y,
      hovered ? 0.66 : 0.61,
      0.035,
    )
    group.current.scale.z = MathUtils.lerp(
      group.current.scale.z,
      hovered ? 0.7 : 0.65,
      0.035,
    )
  })

  return (
    <group
      ref={group}
      position={[0.12, 0.02, 0]}
      scale={[0.65, 0.61, 0.65]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <Icosahedron args={[2.18, 22]}>
        <SmoothWireMaterial
          hovered={hovered}
          color="#8f8f8f"
          emissive="#1a1a1a"
          base={{ emissiveIntensity: 0.08, opacity: 0.52, distort: 0.48 }}
          active={{ emissiveIntensity: 0.18, opacity: 0.62, distort: 0.58 }}
        />
      </Icosahedron>
      <Icosahedron args={[2.32, 18]} rotation={[0.22, 0.36, 0.08]}>
        <SmoothWireMaterial
          hovered={hovered}
          color="#b8b8b8"
          emissive="#0b0b0b"
          base={{ emissiveIntensity: 0.04, opacity: 0.28, distort: 0.4 }}
          active={{ emissiveIntensity: 0.12, opacity: 0.36, distort: 0.5 }}
        />
      </Icosahedron>
      <Icosahedron args={[2.38, 14]} rotation={[-0.18, -0.28, 0.2]}>
        <SmoothWireMaterial
          hovered={hovered}
          color="#d0d0d0"
          emissive="#050505"
          base={{ emissiveIntensity: 0.03, opacity: 0.16, distort: 0.6 }}
          active={{ emissiveIntensity: 0.1, opacity: 0.24, distort: 0.72 }}
        />
      </Icosahedron>
    </group>
  )
}

export function VoidSphere() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      className="!absolute inset-0"
    >
      <ambientLight intensity={0.42} />
      <pointLight position={[8, 8, 9]} intensity={0.7} color="#d8d8d8" />
      <pointLight position={[-8, -8, -4]} intensity={0.28} color="#8f8f8f" />
      <Blob />
    </Canvas>
  )
}

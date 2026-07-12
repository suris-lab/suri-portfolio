'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Icosahedron, MeshDistortMaterial } from '@react-three/drei'
import { useRef, useState } from 'react'
import type { Group } from 'three'

function Blob() {
  const group = useRef<Group>(null)
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (!group.current) return
    const t = state.clock.getElapsedTime()
    group.current.rotation.x = t * 0.025
    group.current.rotation.y = t * 0.04
    group.current.rotation.z = state.pointer.x * 0.08
  })

  return (
    <group
      ref={group}
      position={[0.12, 0.02, 0]}
      scale={[1.08, 1.02, 1.08]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <Icosahedron args={[2.18, 22]}>
        <MeshDistortMaterial
          wireframe
          transparent
          color="#8f8f8f"
          emissive="#1a1a1a"
          emissiveIntensity={hovered ? 0.18 : 0.08}
          opacity={hovered ? 0.62 : 0.52}
          distort={hovered ? 0.58 : 0.48}
          speed={hovered ? 0.72 : 0.48}
          roughness={1}
        />
      </Icosahedron>
      <Icosahedron args={[2.32, 18]} rotation={[0.22, 0.36, 0.08]}>
        <MeshDistortMaterial
          wireframe
          transparent
          color="#b8b8b8"
          emissive="#0b0b0b"
          emissiveIntensity={hovered ? 0.12 : 0.04}
          opacity={hovered ? 0.36 : 0.28}
          distort={hovered ? 0.5 : 0.4}
          speed={hovered ? 0.58 : 0.38}
          roughness={1}
        />
      </Icosahedron>
      <Icosahedron args={[2.38, 14]} rotation={[-0.18, -0.28, 0.2]}>
        <MeshDistortMaterial
          wireframe
          transparent
          color="#d0d0d0"
          emissive="#050505"
          emissiveIntensity={hovered ? 0.1 : 0.03}
          opacity={hovered ? 0.24 : 0.16}
          distort={hovered ? 0.72 : 0.6}
          speed={hovered ? 0.42 : 0.28}
          roughness={1}
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

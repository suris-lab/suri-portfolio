'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Icosahedron, MeshDistortMaterial } from '@react-three/drei'
import { useRef, useState } from 'react'
import type { Mesh } from 'three'

function Blob() {
  const mesh = useRef<Mesh>(null)
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (!mesh.current) return
    const t = state.clock.getElapsedTime()
    mesh.current.rotation.x = t * 0.06
    mesh.current.rotation.y = t * 0.09
    // subtle pointer parallax
    mesh.current.rotation.z = state.pointer.x * 0.25
  })

  return (
    <Icosahedron
      ref={mesh}
      args={[2.1, 20]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <MeshDistortMaterial
        wireframe
        color="#8a8f9c"
        emissive="#1b2f9c"
        emissiveIntensity={hovered ? 0.5 : 0.18}
        distort={hovered ? 0.55 : 0.38}
        speed={hovered ? 2.2 : 1.1}
        roughness={0.9}
      />
    </Icosahedron>
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
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1.2} color="#3b5bff" />
      <pointLight position={[-10, -10, -5]} intensity={0.6} color="#ffffff" />
      <Blob />
    </Canvas>
  )
}

import * as THREE from "three"
import React, { Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import Model from "./Model"
import Head from "./Head"

function Rig() {
  return useFrame((state) => {
    state.camera.position.x = THREE.MathUtils.lerp(
      state.camera.position.x,
      1 + state.mouse.x / 4,
      0.075
    )
    state.camera.position.y = THREE.MathUtils.lerp(
      state.camera.position.y,
      1.5 + state.mouse.y / 4,
      0.075
    )
  })
}

export default function Scene() {
  return (
    <Canvas concurrent shadowMap camera={{ position: [1, 1.5, 2.5], fov: 50 }}>
      <ambientLight />
      <directionalLight
        position={[-5, 5, 5]}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <group position={[0, -1, 0]}>
        <Suspense fallback={null}>
          <Model />
          <Head position={[1, 1.7, 0.5]} />
        </Suspense>
      </group>
      <Rig />
    </Canvas>
  )
}

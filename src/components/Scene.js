import React, { createContext, Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import Model from "./Model"
import { useSelector } from "react-redux"
import { OrbitControls } from "@react-three/drei"

export const CanvasContext = createContext(null)

export default function Scene() {
  const isAttach = useSelector((state) => state.app.isAttach)
  return (
    <CanvasContext.Provider value={{ isAttach: isAttach }}>
      <CanvasContext.Consumer>
        {(value) => (
          <Canvas
            concurrent
            shadowMap
            camera={{ position: [1, 1.5, 2.5], fov: 50 }}>
            <ambientLight />
            <directionalLight
              position={[-5, 5, 5]}
              castShadow
              shadow-mapSize-width={1024}
              shadow-mapSize-height={1024}
            />
            <group position={[0, -1, 0]}>
              <Suspense fallback={null}>
                <CanvasContext.Provider value={value}>
                  <Model />
                </CanvasContext.Provider>
              </Suspense>
            </group>
            <OrbitControls />
          </Canvas>
        )}
      </CanvasContext.Consumer>
    </CanvasContext.Provider>
  )
}

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React from "react"
import { useGLTF } from "@react-three/drei"

export default function Head(props) {
  const { nodes, materials } = useGLTF("/head.glb")
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Wolf3D_Head_1.geometry}
        material={materials["Material #27"]}
      />
      <mesh
        geometry={nodes.Wolf3D_Head_2.geometry}
        material={materials["Material #25"]}
      />
      <mesh
        geometry={nodes.Wolf3D_Head_3.geometry}
        material={materials["Material #28"]}
      />
      <mesh
        geometry={nodes.Wolf3D_Head_4.geometry}
        material={materials.Wolf3D_Teeth}
      />
      <mesh
        geometry={nodes.Wolf3D_Head_5.geometry}
        material={materials["Material #26"]}
      />
    </group>
  )
}

useGLTF.preload("/head.glb")

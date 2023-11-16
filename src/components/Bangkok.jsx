/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.7 public/models/bangkok.gltf
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Bangkok(props) {
  const { nodes, materials } = useGLTF('models/bangkok.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cube005.geometry} material={materials['Material.002']} position={[-0.541, 1.389, -1.874]} rotation={[0, -Math.PI / 4, 0]} scale={1.206} castShadow receiveShadow />
    </group>
  )
}

useGLTF.preload('models/bangkok.gltf')
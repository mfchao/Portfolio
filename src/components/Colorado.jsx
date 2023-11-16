/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.7 public/models/colorado.gltf
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Colorado(props) {
  const { nodes, materials } = useGLTF('models/colorado.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cube006.geometry} material={materials['Material.002']} position={[-2.35, 0.752, -0.072]} rotation={[-Math.PI, Math.PI / 4, -Math.PI]} scale={[-1.206, -0.144, -1.206]} castShadow receiveShadow />
    </group>
  )
}

useGLTF.preload('models/colorado.gltf')
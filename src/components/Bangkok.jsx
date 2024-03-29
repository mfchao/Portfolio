/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.7 public/models/bangkok.gltf
*/

import React, { useContext, useRef, useState } from 'react'
import { Decal, MeshDistortMaterial, MeshReflectorMaterial, MeshTransmissionMaterial, MeshWobbleMaterial, useGLTF, useTexture } from '@react-three/drei'
import { TextElementContext } from '../assets/TextElementContext';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';

export function Bangkok(props) {
  const { nodes, materials } = useGLTF('models/bangkok.gltf')

  const { hovered, projectHovered } = useContext(TextElementContext);

  const textureTemples = useTexture("/images/Temples/frames.jpg");

  const materialRef = useRef();
  const [opacity, setOpacity] = useState(0);


  let texture = null;
  let rotation = [null];
  let scale = [null];
  if (projectHovered === "temples") {
    texture = textureTemples;
    rotation = [0, 1, 0];
    scale = [4, 3, 3];
  }

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cube005.geometry} position={[-0.541, 1.389, -1.874]} rotation={[0, -Math.PI / 4, 0]} scale={1.206} castShadow receiveShadow >
        {texture && (
          <>
            <meshBasicMaterial transparent opacity={0} />
            <Decal
              position={[0, 0, 0.2]}
              rotation={rotation}
              scale={scale}
            >
              <MeshDistortMaterial distort={0.3} speed={2} map={texture} polygonOffset polygonOffsetFactor={-1} ref={materialRef} />
            </Decal>

          </>
        )}
        {!texture && <meshBasicMaterial attach="material" {...materials['Material.002']} />}


      </mesh>
    </group>
  )
}

useGLTF.preload('models/bangkok.gltf')
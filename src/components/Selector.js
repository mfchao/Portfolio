// import { useRef } from 'react'
// import { Canvas, useFrame } from '@react-three/fiber'
// import { useGLTF, MeshTransmissionMaterial, ContactShadows, Environment } from '@react-three/drei'
// import { easing } from 'maath'
// import { useStore } from './preview'


// function Selector({ children }) {
//     const ref = useRef()
//     const store = useStore()
//     useFrame(({ viewport, camera, pointer }, delta) => {
//       const { width, height } = viewport.getCurrentViewport(camera, [0, 0, 3])
//       easing.damp3(ref.current.position, [(pointer.x * width) / 2, (pointer.y * height) / 2, 3], store.open ? 0 : 0.1, delta)
//       easing.damp3(ref.current.scale, store.open ? 4 : 0.01, store.open ? 0.5 : 0.2, delta)
//       easing.dampC(ref.current.material.color, store.open ? '#f0f0f0' : '#ccc', 0.1, delta)
//     })
//     return (
//       <>
//         <mesh ref={ref}>
//           <circleGeometry args={[1, 64, 64]} />
//           <MeshTransmissionMaterial samples={16} resolution={512} anisotropy={1} thickness={0.1} roughness={0.4} toneMapped={true} />
//         </mesh>
//         <group
//           onPointerOver={() => (store.open = true)}
//           onPointerOut={() => (store.open = false)}
//           onPointerDown={() => (store.open = true)}
//           onPointerUp={() => (store.open = false)}>
//           {children}
//         </group>
//       </>
//     )
//   }
  
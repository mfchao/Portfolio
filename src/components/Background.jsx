import { Environment, Sphere } from "@react-three/drei";
import { Gradient, LayerMaterial } from "lamina";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";


import * as THREE from "three";


export const Background = ({ backgroundColors }) => {
    const start = 0.2;
    const end = -0.5;
  
    const gradientRef = useRef();
    const gradientEnvRef = useRef();
  
    useFrame(() => {
      gradientRef.current.colorA = new THREE.Color(
        backgroundColors.current.colorA
      );
      gradientRef.current.colorB = new THREE.Color(
        backgroundColors.current.colorB
      );
      gradientEnvRef.current.colorA = new THREE.Color(
        backgroundColors.current.colorA
      );
      gradientEnvRef.current.colorB = new THREE.Color(
        backgroundColors.current.colorB
      );
      gradientEnvRef.current.colorB = new THREE.Color(
        backgroundColors.current.colorB
      );
    });
  
    return (
      <>
      
        <Sphere scale={[50, 50, 50]} rotation-y={Math.PI / 2}>
          <LayerMaterial color={"#ffffff"} side={THREE.BackSide}>
            <Gradient ref={gradientRef} axes={"y"} start={start} end={end} />
          </LayerMaterial>
        </Sphere>

        <directionalLight castShadow position={[3, 8, 4]} intensity={3} shadow-mapSize={1024}></directionalLight>
        <pointLight position={[-10, 0, -20]} color="white" intensity={0.1} />
        <pointLight position={[0, -10, 0]} intensity={0.1} />
        
        <Environment resolution={256} frames={Infinity} preset="warehouse">
          <Sphere
            scale={[20, 20, 20]}
            rotation-y={Math.PI / 2}
            rotation-x={Math.PI}
          >
            <LayerMaterial color={"#ffffff"} side={THREE.BackSide}>
              <Gradient ref={gradientEnvRef} axes={"y"} start={start} end={end} />
            </LayerMaterial>
          </Sphere>
        </Environment>
      </>
    );
  };
 
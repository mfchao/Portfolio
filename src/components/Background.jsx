import { Environment, Sphere } from "@react-three/drei";
import { Gradient, LayerMaterial } from "lamina";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Color, BackSide } from "three";
import React from "react";

const start = 0.2;
const end = -0.5;
const halfPi = Math.PI / 2;

export const Background = ({ backgroundColors }) => {
  
    const gradientRef = useRef();
    const gradientEnvRef = useRef();
  
    useFrame(() => {
      const { colorA, colorB } = backgroundColors.current;

      gradientRef.current.colorA = new Color(colorA);
      gradientRef.current.colorB = new Color(colorB);
      gradientEnvRef.current.colorA = new Color(colorA);
      gradientEnvRef.current.colorB = new Color(colorB);
    });

    const sphereScale = [50, 50, 50];
    const directionalLightPosition = [3, 8, 4];
    const sphereScaleEnv = [20, 20, 20];
  
  
    return (
      <>
      
        <Sphere scale={sphereScale} rotation={[0, halfPi, 0]}>
          <LayerMaterial color={"#ffffff"} side={BackSide}>
            <Gradient ref={gradientRef} axes={"y"} start={start} end={end} />
          </LayerMaterial>
        </Sphere>

        <directionalLight castShadow position={directionalLightPosition} intensity={3} />
        
        <Environment resolution={256} frames={Infinity}>
          <Sphere
            scale={sphereScaleEnv} rotation={[Math.PI, halfPi, 0]}>
            <LayerMaterial color={"#ffffff"} side={BackSide}>
              <Gradient ref={gradientEnvRef} axes={"y"} start={start} end={end} />
            </LayerMaterial>
          </Sphere>
        </Environment>
      </>
    );
  };
 
  export default React.memo(Background);

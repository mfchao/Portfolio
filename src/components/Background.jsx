import { Environment, Sphere, SoftShadows } from "@react-three/drei";
import { Gradient, LayerMaterial } from "lamina";
import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Color, BackSide } from "three";
import React from "react";
import { Cloud, Clouds } from "@react-three/drei";
import * as THREE from "three";


const start = 0.6;
const end = -0.5;
const halfPi = Math.PI / 2;

export const Background = ({ backgroundColors }) => {

  const gradientRef = useRef();
  const gradientEnvRef = useRef();
  const cloudsRef = useRef();
  const cloud0 = useRef();
  const cloud1 = useRef();
  const cloudRef = useRef();
  const lightRef = useRef();
  const lightRef2 = useRef();

  const cloudMaterialA = new THREE.MeshLambertMaterial({ color: "#f1dcf7" });
  const cloudMaterialB = new THREE.MeshLambertMaterial({ color: "#f2f2f2" });

  useFrame(() => {
    const { colorA, colorB } = backgroundColors.current;

    gradientRef.current.colorA = new Color(colorA);
    gradientRef.current.colorB = new Color(colorB);
    gradientEnvRef.current.colorA = new Color(colorA);
    gradientEnvRef.current.colorB = new Color(colorB);

    lightRef.current.color = new Color(colorA);
    // lightRef2.current.color = new Color(colorB);
  });

  const sphereScale = [50, 50, 50];
  const directionalLightPosition = [3, 5, 10];

  const sphereScaleEnv = [20, 20, 20];
  const [cloudColorA, setColorA] = useState("#f1dcf7");
  const [cloudColorB, setColorB] = useState("#f2f2f2");

  useFrame((state, delta) => {

    cloudsRef.current.rotation.y = Math.cos(state.clock.elapsedTime / 2) / 6
    cloudsRef.current.rotation.x = Math.sin(state.clock.elapsedTime / 2) / 6
    cloud1.current.rotation.y -= delta / 6
    // cloud0.current.color = new Color(colorA);

  })


  return (
    <>
      {/* <SoftShadows size={25} focus={0} samples={10}/> */}

      <Sphere scale={sphereScale} rotation={[0, halfPi, 0]}>
        <LayerMaterial color={"#ffffff"} side={BackSide}>
          <Gradient ref={gradientRef} axes={"y"} start={start} end={end} />
        </LayerMaterial>
      </Sphere>

      {/* <directionalLight position={directionalLightPosition} intensity={0.4} /> */}
      <pointLight ref={lightRef} position={directionalLightPosition} intensity={0.85} />
      {/* <pointLight ref={lightRef2} position={[0, 1, 6]} intensity={0.1} /> */}

      <group ref={cloudsRef}>
        <Clouds ref={cloudRef} material={THREE.MeshLambertMaterial} position={[0, 0, -5]}>
          <Cloud
            ref={cloud0}
            position={[0, 2, 0]}
            segments={5}
            bounds={[20, 10, 0]}
            volume={15}
            opacity={0.75}
            growth={20}
            fade={21}
          // color={'white'}
          />
          <Cloud
            ref={cloud1}
            position={[0, -2, 0]}
            segments={5}
            bounds={[20, 10, 0]}
            volume={15}
            growth={20}
            opacity={0.75}
            fade={21}
          // color={cloudColorB}
          />

        </Clouds>
      </group>


      <Environment resolution={64} preset="sunset">
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




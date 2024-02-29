import { Environment, Sphere, SoftShadows } from "@react-three/drei";
import { Gradient, LayerMaterial } from "lamina";
import { useEffect, useRef, useState, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Color, BackSide } from "three";
import React from "react";
import { Cloud, Clouds } from "@react-three/drei";
import * as THREE from "three";
import { MathUtils } from "three";

import vertexShader from "./shaders/vertexShader.js";
import fragmentShader from "./shaders/fragmentShader.js";

// const start = 0.6;
// const end = -0.5;
// const halfPi = Math.PI / 2;

export const Background = ({ backgroundColors }) => {

  // const gradientRef = useRef();
  // const gradientEnvRef = useRef();
  // const cloudsRef = useRef();
  // const cloud0 = useRef();
  // const cloud1 = useRef();
  // const cloudRef = useRef();
  const lightColorA = useRef();
  const lightColorB = useRef();
  const lightColorC = useRef();


  const uniforms = useMemo(
    () => ({
      u_time: {
        value: 0.0
      },
      u_resolution: {
        value: new THREE.Vector4()
      },
      u_colorA: { value: new Color() },
      u_colorB: { value: new Color() },
      u_colorC: { value: new Color() },
    }), []
  );

  useFrame(() => {
    const { colorA, colorB, colorC } = backgroundColors.current;

    uniforms.u_colorA.value.set(colorA);
    uniforms.u_colorB.value.set(colorB);
    uniforms.u_colorC.value.set(colorC);

    // gradientRef.current.colorA = new Color(colorA);
    // gradientRef.current.colorB = new Color(colorB);
    // gradientEnvRef.current.colorA = new Color(colorA);
    // gradientEnvRef.current.colorB = new Color(colorB);

    lightColorA.current.color = new Color(colorA);
    lightColorB.current.color = new Color(colorB);
    lightColorC.current.color = new Color(colorC);
  });

  // const sphereScale = [50, 50, 50];
  // const directionalLightPosition = [3, 5, 10];

  // const sphereScaleEnv = [20, 20, 20];
  // const [cloudColorA, setColorA] = useState("#f1dcf7");
  // const [cloudColorB, setColorB] = useState("#f2f2f2");

  // useFrame((state, delta) => {

  //   cloudsRef.current.rotation.y = Math.cos(state.clock.elapsedTime / 2) / 8
  //   cloudsRef.current.rotation.x = Math.sin(state.clock.elapsedTime / 2) / 8
  //   cloud1.current.rotation.y -= delta / 6

  // })


  const mesh = useRef();
  // const hover = useRef(false);


  useFrame((state) => {
    const { clock } = state;
    mesh.current.material.uniforms.u_time.value = clock.getElapsedTime();
  });





  return (
    <>
      {/* <SoftShadows size={25} focus={0} samples={10} /> */}

      {/* <Sphere scale={sphereScale} rotation={[0, halfPi, 0]}>
        <LayerMaterial color={"#ffffff"} side={BackSide}>
          <Gradient ref={gradientRef} axes={"y"} start={start} end={end} />
        </LayerMaterial>
      </Sphere> */}

      {/* <spotLight ref={lightColorB} position={[2, 5, 8]} intensity={0.2} /> */}
      <ambientLight ref={lightColorA} intensity={0.87} />
      <pointLight ref={lightColorB} position={[0, 3, 4]} intensity={0.75} />
      <pointLight position={[0, 0, 4]} intensity={0.3} ref={lightColorC} />
      <pointLight position={[3, 4, 4]} intensity={0.6} color={"white"} />


      {/* <group ref={cloudsRef}>
        <Clouds ref={cloudRef} material={THREE.MeshLambertMaterial} position={[0, 0, 0]}>
          <Cloud
            ref={cloud0}
            position={[0, 2, 2]}
            segments={4}
            bounds={[10, 5, 0]}
            volume={6}
            opacity={0.7}
            growth={10}
            fade={10}
          />
          <Cloud
            ref={cloud1}
            position={[0, -2, 2]}
            segments={3}
            bounds={[10, 5, 0]}
            volume={6}
            growth={6}
            opacity={0.7}
            fade={10}
          />

        </Clouds>
      </group> */}


      {/* <Environment resolution={64} preset="warehouse"> */}
      {/* <Sphere
          scale={sphereScaleEnv} rotation={[Math.PI, halfPi, 0]}>
          <LayerMaterial color={"#ffffff"} side={BackSide}>
            <Gradient ref={gradientEnvRef} axes={"y"} start={start} end={end} />
          </LayerMaterial>
        </Sphere> */}

      <mesh ref={mesh} position={[0, 0, -8]} rotation={[0, 0, 0]} scale={50}>
        <planeGeometry args={[1.4, 1, 300, 300]} />
        <shaderMaterial
          fragmentShader={fragmentShader}
          vertexShader={vertexShader}
          uniforms={uniforms}
          wireframe={false}
        />
      </mesh>



      {/* </Environment> */}

    </>
  );
};

export default React.memo(Background);




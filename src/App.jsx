import { Canvas, useFrame } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { OrbitControls, ScrollControls, useScroll, ContactShadows, SoftShadows, Scroll } from "@react-three/drei";
import { Background } from "./components/Background";
import { Cubes } from "./components/Cubes";
import { getProject, val } from "@theatre/core";
import { editable as e, SheetProvider, PerspectiveCamera, useCurrentSheet } from "@theatre/r3f";
import { EffectComposer, Noise } from "@react-three/postprocessing";
import { Interface } from "./components/Interface";
import { useEffect, useState } from "react";
import { ScrollManager } from "./components/ScrollManager";
import { Menu } from "./components/Menu";
import { animate, motion, useMotionValue } from "framer-motion";
import { Colorado } from "./components/Colorado";
import { Bangkok } from "./components/Bangkok";
import { Boston } from "./components/Boston";
import { London } from "./components/London";
import { Base } from "./components/Base";


import flyThroughState from "./fly2.json";

function App() {
  // const sheet = getProject("Fly Through 2").sheet("Scene")
  const sheet = getProject("Fly Through 2", {state: flyThroughState}).sheet("Scene");

  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);

  //close menu after clicked option
  useEffect(() => {
    setMenuOpened(false);
  }, [section])

  return (
    <>
    <Canvas shadows gl={{ preserveDrawingBuffer: true }}>
      <SoftShadows size={25} focus={0} samples={10}/>
      
      <ScrollControls pages={9} damping={1} maxSpeed={0.8}>
        <ScrollManager section={section} onSectionChange={setSection}/>
      <Experience />
        <SheetProvider sheet={sheet}>
          <Scene/>
        </SheetProvider>

        {/* text content */}
        <Scroll html>
          <Interface/>
        </Scroll>

      </ScrollControls>

      <EffectComposer>
        <Noise opacity={0.2}/>
      </EffectComposer>
    </Canvas>

    <Menu onSectionChange={setSection} menuOpened={menuOpened} setMenuOpened={setMenuOpened}/>
    </>
  );
}

export default App;


function Scene() {
  const sheet = useCurrentSheet();
  const scroll = useScroll();
 

  useFrame(() => {
    const sequenceLength = val(sheet.sequence.pointer.length);
    sheet.sequence.position = scroll.offset * sequenceLength;
  })

  //camera move for menu

  // const cameraPositionX = useMotionValue();
  // const cameraLookAtX = useMotionValue();

  // useEffect(() => {
  //   animate(cameraPositionX, menuOpened ? -5 : 0);
  //   animate(cameraLookAtX, menuOpened ? 5 : 0);
  // }, [menuOpened])

  // useFrame((state) => {
  //   state.camera.position.x = cameraPositionX.get();
  //   state.camera.lookAt(cameraLookAtX.get(), 0 , 0);
  // })

  return (
    <>
    <color attach="background" args={["#f0f0f0"]} />
    
    <e.mesh theatreKey='Colorado'>
      <Colorado
        scale={[0.8, 0.8, 0.8]}
        position-x={0.4}
      />
    </e.mesh>
    <e.mesh theatreKey='Bangkok'>
      <Bangkok
        scale={[0.8, 0.8, 0.8]}
        position-x={0.4}
      />
    </e.mesh>
    <e.mesh theatreKey='Boston'>
      <Boston
        scale={[0.8, 0.8, 0.8]}
        position-x={0.4}
      />
    </e.mesh>
    <e.mesh theatreKey='London'>
      <London
        scale={[0.8, 0.8, 0.8]}
        position-x={0.4}
      />
    </e.mesh>
    <Base
      scale={[0.8, 0.8, 0.8]}
      position-x={0.4}
    />

    <PerspectiveCamera
      theatreKey="Camera"
      makeDefault={true}
      position={[0, 2, 5]}
      fov={90}
      near={0.1}
      far={70}
      
    />
    
    {/* floor */}
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
          <planeGeometry args={[100, 100]} />
          <shadowMaterial transparent opacity={0.4} />
        </mesh>

    {/* <ContactShadows position={[0, -7, 0]} opacity={0.75} scale={40} blur={1} far={9} /> */}
    </>
  )
}
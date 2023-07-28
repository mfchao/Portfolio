import { Canvas, useFrame } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { ScrollControls, useScroll, SoftShadows, Scroll, MeshTransmissionMaterial, Text, Cylinder, CameraControls } from "@react-three/drei";
import { getProject, val, types } from "@theatre/core";
import { editable as e, editable, SheetProvider, PerspectiveCamera, useCurrentSheet } from "@theatre/r3f";
import { EffectComposer, Noise } from "@react-three/postprocessing";
import { Interface } from "./components/Interface";
import React, { useEffect, useMemo, useState, useRef, useCallback, memo } from "react";
import { ScrollManager } from "./components/ScrollManager";
import { Menu } from "./components/Menu";
import { Colorado } from "./components/Colorado";
import { Bangkok } from "./components/Bangkok";
import { Boston } from "./components/Boston";
import { London } from "./components/London";
import { Base } from "./components/Base";
import { GlassDiv } from "./components/glass";
import flyThroughState from "./fly2.json";
import './components/mouse.css';
import { easing } from 'maath';
import fonts from "./components/fonts";
import { CylinderGeometry, MeshStandardMaterial } from "three";
import { Portal } from "./components/Portal";



function App() {

  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);
  
  const [cursorEnlarged, setCursorEnlarged] = useState(false);

  const mouseOverEvent = () => {
    setCursorEnlarged(true);
  }

  const mouseOutEvent = () => {
    setCursorEnlarged(false);
  }


  //close menu after clicked option
  useEffect(() => {
    setMenuOpened(false);
  }, [section])

  const sheet = getProject("Fly Through 3").sheet("Scene")
  // const sheet = useMemo(() => getProject("Fly Through 2", { state: flyThroughState }).sheet("Scene"), []);



  return (
    <>
    <Canvas shadows gl={{ preserveDrawingBuffer: true }}>
    
      <SoftShadows size={25} focus={0} samples={10}/>

      
      <ScrollControls pages={9} damping={0.8} maxSpeed={1}>
        <ScrollManager section={section} onSectionChange={setSection}/>

      <Experience />

        <SheetProvider sheet={sheet}>
          <Scene mouseOverEvent={mouseOverEvent} mouseOutEvent={mouseOutEvent} cursorEnlarged={cursorEnlarged}/>
        </SheetProvider>

        <Scroll html>
        <Interface mouseOverEvent={mouseOverEvent} mouseOutEvent={mouseOutEvent}/>
        
        </Scroll>

      </ScrollControls>
      <Selector cursorEnlarged={cursorEnlarged}/>

      <EffectComposer>
        <Noise opacity={0.2}/>
      </EffectComposer>

    </Canvas>
    {/* <GlassDiv mouseOverEvent={mouseOverEvent} mouseOutEven={mouseOutEvent} cursorEnlarged={cursorEnlarged}/> */}
   
    <Menu onSectionChange={setSection} menuOpened={menuOpened} setMenuOpened={setMenuOpened}/>
    </>
  );
}

export default React.memo(App);



function Scene({ mouseOverEvent, mouseOutEvent, cursorEnlarged }) {

  const sheet = useCurrentSheet();
  const scroll = useScroll();

  const cylinderRef = useRef();
  const [cylinderOpacity, setcylinderOpacity] = useState(null)

  const textElements = [
    {
      key: "P1Text1",
      text: "HI I'M",
      fillOpacityState: useState(null),
      ref: useRef(),
      color: "black",
      showHover: mouseOverEvent,
      closeHover: mouseOutEvent,
    },
    {
      key: "P1Text2",
      text: "MAGGIE CHAO",
      fillOpacityState: useState(null),
      ref: useRef(),
      color: "red",
      showHover: null,
      closeHover: null,
    },
    // Add more text elements here if needed
  ];


  useEffect(
    () => {
      if (!cylinderOpacity) return

      const unsubscribe = cylinderOpacity.onValuesChange((newValues) => {
        cylinderRef.current.opacity = newValues.opacity
      })
      return unsubscribe
    },[cylinderOpacity], )



  useEffect(() => {
    textElements.forEach((element) => {
      const [opacityState, setOpacityState] = element.fillOpacityState;

      if (!opacityState) return;

      const unsubscribe = opacityState.onValuesChange((newValues) => {
        element.ref.current.fillOpacity = newValues.fillOpacity;
      });

      return unsubscribe;
    });
  }, [textElements]);

 

  useFrame(() => {
    const sequenceLength = val(sheet.sequence.pointer.length);
    sheet.sequence.position = scroll.offset * sequenceLength;
  })

  const [title, setTitle] = useState({
    fontSize: 0.1,
    maxWidth: 300,
    lineHeight: 1,
    letterSpacing: 0.05,
    textAlign: "center",
    materialType: "MeshStandardMaterial",
  });


  
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

  const cubeScale = [0.8, 0.8, 0.8];

  let lineLength = cursorEnlarged ? 3 : 0.8;



  return (
    <>
    <color attach="background" args={["#f0f0f0"]} />
    
    <e.mesh theatreKey='Colorado'>
      <Colorado
        scale={cubeScale}
      />
    </e.mesh>
    <e.mesh theatreKey='Bangkok'>
      <Bangkok
        scale={cubeScale}
      />
    </e.mesh>
    <e.mesh theatreKey='Boston'>
      <Boston
        scale={cubeScale}
      />
    </e.mesh>
    <e.mesh theatreKey='London'>
      <London
        scale={cubeScale}
      />
    </e.mesh>
    {/* <e.mesh theatreKey='Base'>
      <Base
      scale={cubeScale}
    />
    </e.mesh> */}

    <PerspectiveCamera
      theatreKey="Camera"
      makeDefault={true}
      position={[0, 0, 5]}
      fov={90}
      near={0.1}
      far={70}
      
    />

    <e.mesh theatreKey="Portal">
      <Portal/>
    </e.mesh>


    {/* Line */}
    <e.mesh theatreKey="Cylinder"
    additionalProps={{opacity: types.number(1, {nudgeMultiplier: 0.1,}),}} objRef={setcylinderOpacity}
    >
      <cylinderGeometry args={[0.0025, 0.0025, lineLength]} />
      <meshBasicMaterial ref={cylinderRef} opacity={1} transparent color='black'/>
    </e.mesh>

    {/* Text */}
    {textElements.map((element) => (
        <e.mesh key={element.key} theatreKey={element.key} additionalProps={{ fillOpacity: types.number(1, { nudgeMultiplier: 0.1 }) }} objRef={element.fillOpacityState[1]}>
          <Text ref={element.ref} text={element.text} onPointerOver={element.showHover} onPointerOut={element.closeHover} font={fonts.SFCompactSemibold} color={element.color} {...title}/>
        </e.mesh>
      ))}


    {/* floor */}
    <mesh rotation={[-Math.PI / 2 + 0.3, 0, 0]} position={[0, -2, 0]} receiveShadow>
          <planeGeometry args={[100, 100]} />
          <shadowMaterial transparent opacity={0.4} />
        </mesh>

    </>
  )
}

function Selector({ cursorEnlarged }) {
  const ref = useRef()
  useFrame(({ viewport, camera, pointer }, delta) => {
    const { width, height } = viewport.getCurrentViewport(camera, [0, 0, 3])
    easing.damp3(ref.current.position, [(pointer.x * width) / 2, (pointer.y * height) / 2, 3], cursorEnlarged ? 0 : 0.1, delta)
    easing.damp3(ref.current.scale, cursorEnlarged ? 4 : 0.01, cursorEnlarged ? 0.5 : 0.2, delta)
    easing.dampC(ref.current.material.color, cursorEnlarged ? '#f0f0f0' : '#ccc', 0.1, delta)
  })
  return (
    <>
      <mesh ref={ref}>
        <circleGeometry args={[4, 64, 64]} />
        <MeshTransmissionMaterial samples={16} resolution={512} anisotropy={1} thickness={0.1} roughness={0.4} toneMapped={true} />
      </mesh>
    </>
  )
}






import { Canvas, useFrame } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { ScrollControls, useScroll, SoftShadows, Scroll, MeshTransmissionMaterial, Text, Cylinder, CameraControls, OrbitControls } from "@react-three/drei";
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
import flyThroughState from "./fly4.json";
import './components/mouse.css';
import { easing } from 'maath';
import fonts from "./components/fonts";
import { CylinderGeometry, MeshStandardMaterial } from "three";
import { Portal } from "./components/Portal";
import { TextElements } from "./components/TextElements";



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

  // const sheet = getProject("Fly Through 4").sheet("Scene")
  const sheet = useMemo(() => getProject("Fly Through 4", { state: flyThroughState }).sheet("Scene"), []);



  return (
    <>
    <Canvas shadows gl={{ preserveDrawingBuffer: true }}>
      {/* <OrbitControls/> */}
    
      <SoftShadows size={25} focus={0} samples={10}/>

      
      <ScrollControls pages={9} damping={0.8} maxSpeed={1}>
        <ScrollManager section={section} onSectionChange={setSection}/>

      <Experience />

        <SheetProvider sheet={sheet}>
          <Scene mouseOverEvent={mouseOverEvent} mouseOutEvent={mouseOutEvent} cursorEnlarged={cursorEnlarged}/>
        </SheetProvider>

        {/* <Scroll html>
        <Interface mouseOverEvent={mouseOverEvent} mouseOutEvent={mouseOutEvent}/>
        
        </Scroll> */}

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


  useEffect(
    () => {
      if (!cylinderOpacity) return

      const unsubscribe = cylinderOpacity.onValuesChange((newValues) => {
        cylinderRef.current.opacity = newValues.opacity
      })
      return unsubscribe
    },[cylinderOpacity], )


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

 

  let lineLength = cursorEnlarged ? 3 : 0.8;

  return (
    <>
    <color attach="background" args={["#f0f0f0"]} />
    
    <e.mesh theatreKey='Colorado'>
      <Colorado/>
    </e.mesh>
    <e.mesh theatreKey='Bangkok'>
      <Bangkok/>
    </e.mesh>
    <e.mesh theatreKey='Boston'>
      <Boston/>
    </e.mesh>
    <e.mesh theatreKey='London'>
      <London/>
    </e.mesh>
    {/* <e.mesh theatreKey='Base'>
      <Base/>
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
    <TextElements mouseOverEvent={mouseOverEvent} mouseOutEvent={mouseOutEvent}/>


    {/* floor */}
    <mesh rotation={[-Math.PI / 2 + 0.3, 0, 0]} position={[0, -6, 0]} receiveShadow>
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






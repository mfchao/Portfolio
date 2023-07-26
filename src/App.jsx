import { Canvas, useFrame } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { ScrollControls, useScroll, SoftShadows, Scroll, MeshTransmissionMaterial, Text } from "@react-three/drei";
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
import fonts from "./fonts/SFCompact/fonts";
import { MeshStandardMaterial } from "three";



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

  const sheet = getProject("Fly Through 2").sheet("Scene")
  // const sheet = useMemo(() => getProject("Fly Through 2", { state: flyThroughState }).sheet("Scene"), []);



  return (
    <>
    <Canvas shadows gl={{ preserveDrawingBuffer: true }}>
    
      <SoftShadows size={25} focus={0} samples={10}/>
      
      <ScrollControls pages={9} damping={0.8} maxSpeed={1}>
        <ScrollManager section={section} onSectionChange={setSection}/>

      <Experience />

        <SheetProvider sheet={sheet}>
          <Scene mouseOverEvent={mouseOverEvent} mouseOutEvent={mouseOutEvent}/>
        </SheetProvider>

        <Scroll html>
        {/* <Interface mouseOverEvent={mouseOverEvent} mouseOutEvent={mouseOutEvent}/> */}
        
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



function Scene({ mouseOverEvent, mouseOutEvent }) {

  const sheet = useCurrentSheet();
  const scroll = useScroll();
  const textRef = useRef()

  const EditableText = editable(Text, 'text')


  const [
    // The Theatre.js object that represents our THREE.js object. It'll be initially `null`.
    theatreObject,
    setTheatreObject,
  ] =
    // Let's use `useState()` so our `useEffect()` will re-run when `theatreObject` changes
    useState(null)

  // This `useEffect()` will run when `theatreObject` changes
  useEffect(
    () => {
      // if `theatreObject` is `null`, we don't need to do anything
      if (!theatreObject) return

      const unsubscribe = theatreObject.onValuesChange((newValues) => {
        // Apply the new offset to our THREE.js object
        textRef.current.fillOpacity = newValues.fillOpacity
      })
      // unsubscribe from the listener when the component unmounts
      return unsubscribe
    },
    // We only want to run this `useEffect()` when `theatreObject` changes
    [theatreObject],
  )

 

  useFrame(() => {
    const sequenceLength = val(sheet.sequence.pointer.length);
    sheet.sequence.position = scroll.offset * sequenceLength;
  })

  const [title, setTitle] = useState({
    fontSize: 0.08,
    color: "black",
    maxWidth: 300,
    lineHeight: 1,
    letterSpacing: 0.05,
    textAlign: "center",
    materialType: "MeshStandardMaterial",
  });

  // const TextObject = sheet.object('Text', {
  //     fillOpacity: types.number(1, { meshrange: [0, 1] }),
  // });

  
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
  const position = 0.4;

  


  return (
    <>
    <color attach="background" args={["#f0f0f0"]} />
    
    <e.mesh theatreKey='Colorado'>
      <Colorado
        scale={cubeScale}
        position-x={position}
      />
    </e.mesh>
    <e.mesh theatreKey='Bangkok'>
      <Bangkok
        scale={cubeScale}
        position-x={position}
      />
    </e.mesh>
    <e.mesh theatreKey='Boston'>
      <Boston
        scale={cubeScale}
        position-x={position}
      />
    </e.mesh>
    <e.mesh theatreKey='London'>
      <London
        scale={cubeScale}
        position-x={position}
      />
    </e.mesh>
    <e.mesh theatreKey='Base'>
      <Base
      scale={cubeScale}
        position-x={position}
    />
    </e.mesh>

    <PerspectiveCamera
      theatreKey="Camera"
      makeDefault={true}
      position={[0, 2, 5]}
      fov={90}
      near={0.1}
      far={70}
      
    />

    <e.mesh theatreKey="Text" 
    additionalProps={{
      fillOpacity: types.number(1, {
        nudgeMultiplier: 0.1,
      }),
    }}
    
    objRef={setTheatreObject}
    >
    <Text ref={textRef} text="HI I'M" onPointerOver={mouseOverEvent} onPointerOut={mouseOutEvent}
    font={fonts.SFCompactSemibold} {...title} position-x={2} position-y={3} position-z={-1}/>
    </e.mesh>




    

        {/* <mesh>
          <Text text='MAGGIE CHAO' color='red'/>
        </mesh>
        , A
        <mesh
          onPointerOver={mouseOverEvent}
          onPointerOut={mouseOutEvent}
        >
          <mesh>
          <Text text='CREATIVE DEVELOPER' color='red'/>
        </mesh>
        </mesh>
        AND COMPUTATIONAL DESIGNER. */}
    

    {/* floor */}
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
          <planeGeometry args={[100, 100]} />
          <shadowMaterial transparent opacity={position} />
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






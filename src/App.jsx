import { Canvas, useFrame } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { ScrollControls, useScroll, SoftShadows, Scroll } from "@react-three/drei";
import { getProject, val } from "@theatre/core";
import { editable as e, SheetProvider, PerspectiveCamera, useCurrentSheet } from "@theatre/r3f";
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

const delay = 18;
const windowInnerWidth = window.innerWidth / 2;
const windowInnerHeight = window.innerHeight / 2;

function App() {

  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);
  
  const dot = useRef(null);
  const dotOutline = useRef(null);
  
  const [cursorEnlarged, setCursorEnlarged] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  const endX = useRef(windowInnerWidth);
  const endY = useRef(windowInnerHeight);
  const _x = useRef(0);
  const _y = useRef(0);

  const requestRef = useRef(null);

  useEffect(() => {
    document.addEventListener('mousedown', mouseOverEvent);
    document.addEventListener('mouseup', mouseOutEvent);
    document.addEventListener('mousemove', mouseMoveEvent);
    document.addEventListener('mouseenter', mouseEnterEvent);
    document.addEventListener('mouseleave', mouseLeaveEvent);

    animateDotOutline();

    return () => {
      document.removeEventListener('mousedown', mouseOverEvent);
      document.removeEventListener('mouseup', mouseOutEvent);
      document.removeEventListener('mousemove', mouseMoveEvent);
      document.removeEventListener('mouseenter', mouseEnterEvent);
      document.removeEventListener('mouseleave', mouseLeaveEvent);

      cancelAnimationFrame(requestRef.current);
    }

  }, );

  const mouseEnterEvent = useCallback(() => {
    setCursorVisible(true);
  }, []);

  const mouseLeaveEvent = useCallback(() => {
    setCursorVisible(false);
  }, []);

  const mouseMoveEvent = e => {
    setCursorVisible(true);

    endX.current = e.pageX;
    endY.current = e.pageY;

    dot.current.style.top = endY.current + 'px';
    dot.current.style.left = endX.current + 'px';
  }

  const animateDotOutline = useCallback(() => {
    _x.current += (endX.current - _x.current) /  delay;
    _y.current += (endY.current - _y.current) / delay;

    dotOutline.current.style.top = `${_y.current}px`;
    dotOutline.current.style.left = `${_x.current}px`;

    requestRef.current = requestAnimationFrame(animateDotOutline);
  }, [cursorVisible, cursorEnlarged]);


  const toggleCursorSize = useEffect(() => {
    const scale = cursorEnlarged ? '0.75' : '1';
    dot.current.style.transform = `translate(-50%, -50%) scale(${scale})`;
    dotOutline.current.style.transform = `translate(-50%, -50%) scale(${cursorEnlarged ? '4' : '1'})`;
  }, [cursorEnlarged]);

  const toggleCursorVisibility = useEffect(() => {
    const opacity = cursorVisible ? '1' : '0';
    dot.current.style.opacity = opacity;
    dotOutline.current.style.opacity = opacity;
  }, [cursorVisible]);

  const mouseOverEvent = () => {
    setCursorEnlarged(true);
    console.log("over")
     console.log(cursorEnlarged)
  }

  const mouseOutEvent = () => {
    setCursorEnlarged(false);
    console.log("out")
    console.log(cursorEnlarged)
  }

  //close menu after clicked option
  useEffect(() => {
    setMenuOpened(false);
  }, [section])

  // const sheet = getProject("Fly Through 2").sheet("Scene")
  const sheet = useMemo(() => getProject("Fly Through 2", { state: flyThroughState }).sheet("Scene"), []);

  return (
    <>
    <Canvas shadows gl={{ preserveDrawingBuffer: true }}>
      <SoftShadows size={25} focus={0} samples={10}/>
      
      <ScrollControls pages={9} damping={0.8} maxSpeed={1}>
        <ScrollManager section={section} onSectionChange={setSection}/>

      <Experience />

        <SheetProvider sheet={sheet}>
          <Scene/>
        </SheetProvider>

        {/* text content */}
        <Scroll html>
        <Interface mouseOverEvent={mouseOverEvent} mouseOutEvent={mouseOutEvent}/>
        
        </Scroll>

      </ScrollControls>

      <EffectComposer>
        <Noise opacity={0.2}/>
      </EffectComposer>
      
    </Canvas>
   
      <div ref={dotOutline} className="cursor-dot-outline"></div>
      <div ref={dot} className="cursor-dot"></div>

    <Menu onSectionChange={setSection} menuOpened={menuOpened} setMenuOpened={setMenuOpened}/>
    </>
  );
}

export default React.memo(App);


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
    <Base
      scale={cubeScale}
        position-x={position}
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
          <shadowMaterial transparent opacity={position} />
        </mesh>

    </>
  )
}






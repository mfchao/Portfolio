import { Canvas, useFrame } from '@react-three/fiber';
import { Experience } from './components/Experience';
import {
  ScrollControls,
  useScroll,
  Scroll,
  MeshTransmissionMaterial,
  Html,
  Box
} from '@react-three/drei';
import { getProject, val, types } from '@theatre/core';
import { editable as e, SheetProvider, PerspectiveCamera, useCurrentSheet } from '@theatre/r3f';
import { EffectComposer, Noise } from '@react-three/postprocessing';
import { Interface } from './components/Interface';
import React, { useEffect, useMemo, useState, useRef, useCallback, memo } from 'react';
import { ScrollManager } from './components/ScrollManager';
import { Menu } from './components/Menu';
import { Colorado } from './components/Colorado';
import { Bangkok } from './components/Bangkok';
import { Boston } from './components/Boston';
import { London } from './components/London';
import flyThroughState from './fly4arounded.json';
import './components/mouse.css';
import { Portal } from './components/Portal';
import { TextElements } from './components/TextElements';
import { Selector } from './components/Selector';
import { easing } from 'maath';
import { ProjectManager } from './components/ProjectManager';
import { HtmlWrapper } from './components/HtmlWrapper';
import { Archive } from './components/Archive';

function App() {
  const [sheet, setSheet] = useState(null);

  const [section, setSection] = useState(null);
  const [menuOpened, setMenuOpened] = useState(false);

  const [cursorEnlarged, setCursorEnlarged] = useState(false);

  const [currentSection, setCurrentSection] = useState(0);

  const [projectOpened, setProjectOpened] = useState(false);

  const mouseOverEvent = () => {
    setCursorEnlarged(true);
  };

  const mouseOutEvent = () => {
    setCursorEnlarged(false);
  };

  useEffect(() => {
    if (projectOpened) {
      setCursorEnlarged(true);
    } else {
      setCursorEnlarged(false);
    }
  }, [projectOpened]);

  // const projectOpenEvent = () => {
  //   setProjectOpened(true);
  // }

  // const projectClosedEvent = () => {
  //   setProjectOpened(false);
  // }

  //close menu after clicked option
  useEffect(() => {
    setMenuOpened(false);
  }, [section]);

  //close project when menu open
  useEffect(() => {
    setProjectOpened(false);
  }, [menuOpened]);

  // const sheet = getProject("Fly Through 4").sheet("Scene")
  // const sheet = useMemo(() => getProject("Fly Through 4", { state: flyThroughState }).sheet("Scene"), []);
  useEffect(() => {
    const fetchSheetData = async () => {
      try {
        const loadedSheet = getProject('Fly Through 4', {
          state: flyThroughState
        }).sheet('Scene');

        setSheet(loadedSheet);
      } catch (error) {
        console.error('Error fetching JSON data:', error);
      }
    };

    fetchSheetData();
  }, []);

  return (
    <>
      <Canvas shadows gl={{ preserveDrawingBuffer: true }}>
        <ScrollControls pages={9} damping={0.8} maxSpeed={1} enabled={projectOpened ? false : true}>
          <ScrollManager section={section} onSectionChange={setSection} />

          <HtmlWrapper
            currentSection={currentSection}
            projectOpened={projectOpened}
            setProjectOpened={setProjectOpened}
          />

          <Experience setCurrentSection={setCurrentSection} menuOpened={menuOpened} />

          {sheet && (
            <SheetProvider sheet={sheet}>
              <Scene setProjectOpened={setProjectOpened} projectOpened={projectOpened} currentSection={currentSection} />
            </SheetProvider>
          )}

          {/* <Scroll html>
        <Interface mouseOverEvent={mouseOverEvent} mouseOutEvent={mouseOutEvent}/>
        </Scroll> */}
        </ScrollControls>

        <Archive currentSection={currentSection} />


        <Selector cursorEnlarged={cursorEnlarged} menuOpened={menuOpened} />

        <EffectComposer>
          <Noise opacity={0.2} />
        </EffectComposer>
      </Canvas>

      <Menu
        onSectionChange={setSection}
        menuOpened={menuOpened}
        setMenuOpened={setMenuOpened}
        currentSection={currentSection}
      />
    </>
  );
}

export default React.memo(App);

function Scene({ setProjectOpened, projectOpened, currentSection }) {
  const sheet = useCurrentSheet();
  const scroll = useScroll();

  const cylinderRef = useRef();
  const [cylinderOpacity, setcylinderOpacity] = useState(null);

  const cylinderGeometryRef = useRef();
  // const [lineLength, setLineLength] = useState(0.8);

  useEffect(() => {
    if (!cylinderOpacity) return;

    const unsubscribe = cylinderOpacity.onValuesChange((newValues) => {
      cylinderRef.current.opacity = newValues.opacity;
    });
    return unsubscribe;
  }, [cylinderOpacity]);

  useFrame(() => {
    const sequenceLength = val(sheet.sequence.pointer.length);
    sheet.sequence.position = scroll.offset * sequenceLength;
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

  let lineLength = projectOpened ? 3 : 0.8;

  // useFrame((state, delta) => {
  //   // Apply damping to smoothly transition the lineLength
  //   const targetLineLength = cursorEnlarged ? 3 : 0.8;
  //   setLineLength(easing.damp(cylinderGeometryRef.current?.parameters, "height", targetLineLength, 0.2, delta)
  //   );

  // }, [cursorEnlarged, cylinderGeometryRef]);

  return (
    <>
      <color attach="background" args={['#f0f0f0']} />

      <e.mesh theatreKey="Colorado">
        <Colorado />
      </e.mesh>
      <e.mesh theatreKey="Bangkok">
        <Bangkok />
      </e.mesh>
      <e.mesh theatreKey="Boston">
        <Boston />
      </e.mesh>
      <e.mesh theatreKey="London">
        <London />
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

      {/* <e.mesh theatreKey="Portal">
        <Portal />
      </e.mesh> */}

      {/* Line */}
      <e.mesh
        theatreKey="Cylinder"
        additionalProps={{ opacity: types.number(1, { nudgeMultiplier: 0.1 }) }}
        objRef={setcylinderOpacity}>
        <cylinderGeometry ref={cylinderGeometryRef} args={[0.0025, 0.0025, lineLength]} />
        <meshBasicMaterial ref={cylinderRef} opacity={1} transparent color="black" />
      </e.mesh>

      {/* Text */}
      <TextElements setProjectOpened={setProjectOpened} projectOpened={projectOpened} currentSection={currentSection} />

      {/* floor */}
      <mesh rotation={[-Math.PI / 2 + 0.3, 0, 0]} position={[0, -6, 0]} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <shadowMaterial transparent opacity={0.4} />
      </mesh>
    </>
  );
}

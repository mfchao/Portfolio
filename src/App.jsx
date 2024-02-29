import { Canvas, useFrame } from '@react-three/fiber';
import { Experience } from './components/Experience';
import { ScrollControls, useScroll, Loader } from '@react-three/drei';
import { getProject, val, types } from '@theatre/core';
import { editable as e, SheetProvider, PerspectiveCamera, useCurrentSheet } from '@theatre/r3f';
import { EffectComposer, Noise } from '@react-three/postprocessing';
import React, { useEffect, useState, useRef } from 'react';
import { ScrollManager } from './components/ScrollManager';
import { Menu } from './components/Menu';
import { Colorado } from './components/Colorado';
import { Bangkok } from './components/Bangkok';
import { Boston } from './components/Boston';
import { London } from './components/London';
import flyThroughState from './fly4a.json';
import flyThroughState2 from './fly4b.json';
import { TextElements } from './components/TextElements';
import { Selector } from './components/Selector';
import { HtmlWrapper } from './components/HtmlWrapper';
import { Archive } from './components/Archive';
import { TextElementContext } from './assets/TextElementContext';
import { CameraController } from './components/CameraController';
import fonts from "./assets/fonts";
import { OrbitControls } from '@react-three/drei'


function App() {
  const [sheet, setSheet] = useState(null);

  const [section, setSection] = useState(null);
  const [menuOpened, setMenuOpened] = useState(false);
  const [openProject, setOpenProject] = useState(null);

  const [cursorEnlarged, setCursorEnlarged] = useState(false);

  const [currentSection, setCurrentSection] = useState(0);

  const [projectOpened, setProjectOpened] = useState(false);

  const [archiveProjectId, setArchiveProjectId] = useState(null);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);



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

  //responsive
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


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
      if (windowWidth < 768) {
        try {
          const loadedSheet = getProject('Fly Through 5', {
            state: flyThroughState2
          }).sheet('Scene');
          setSheet(loadedSheet);
        } catch (error) {
          console.error('Error fetching JSON data:', error);
        }
      } else {
        try {
          const loadedSheet = getProject('Fly Through 4', {
            state: flyThroughState
          }).sheet('Scene');
          setSheet(loadedSheet);
        } catch (error) {
          console.error('Error fetching JSON data:', error);
        }
      }
    };

    fetchSheetData();
  }, [windowWidth]);



  const dataStyles = {
    fontSize: '12px',
    font: fonts.SFCompactSemibold,
    color: 'black'
  };

  const container = {
    backgroundColor: 'white',
  };

  return (
    <>
      <Canvas shadows gl={{ preserveDrawingBuffer: true }} className="canvasStyle" camera={{ position: [0, 0, 5], fov: 60 }}>
        {/* <OrbitControls /> */}
        <CameraController projectOpened={projectOpened} windowWidth={windowWidth} />
        <ScrollControls pages={9} damping={0.8} maxSpeed={0.8} enabled={projectOpened ? false : true}>
          <ScrollManager section={section} onSectionChange={setSection} />

          <HtmlWrapper
            currentSection={currentSection}
            projectOpened={projectOpened}
            setProjectOpened={setProjectOpened}
            archiveProjectId={archiveProjectId}
            setArchiveProjectId={setArchiveProjectId}
            openProject={openProject}
            setOpenProject={setOpenProject}
            windowWidth={windowWidth}
          />

          <Experience setCurrentSection={setCurrentSection} menuOpened={menuOpened} />

          {sheet && (
            <SheetProvider sheet={sheet}>
              <Scene setProjectOpened={setProjectOpened} projectOpened={projectOpened} currentSection={currentSection} openProject={openProject} setOpenProject={setOpenProject} />
            </SheetProvider>
          )}

          {/* <Scroll html>
            <Interface mouseOverEvent={mouseOverEvent} mouseOutEvent={mouseOutEvent} />
          </Scroll> */}
        </ScrollControls>


        <Archive currentSection={currentSection} archiveProjectId={archiveProjectId} setArchiveProjectId={setArchiveProjectId}
          setProjectOpened={setProjectOpened} projectOpened={projectOpened} />

        <Selector cursorEnlarged={cursorEnlarged} menuOpened={menuOpened} />

        <EffectComposer>
          <Noise opacity={0.3} />
        </EffectComposer>
      </Canvas>

      <Loader
        dataInterpolation={(p) => `${p.toFixed(0)}`}
        dataStyles={dataStyles}
        containerStyles={container}
      />

      <Menu
        onSectionChange={setSection}
        menuOpened={menuOpened}
        setMenuOpened={setMenuOpened}
        currentSection={currentSection}
        windowWidth={windowWidth}
        projectOpened={projectOpened}
      />
    </>
  );
}

export default React.memo(App);



function Scene({ setProjectOpened, projectOpened, currentSection, openProject, setOpenProject }) {
  const sheet = useCurrentSheet();
  const scroll = useScroll();

  const cylinderRef = useRef();
  const [cylinderOpacity, setcylinderOpacity] = useState(null);

  const cylinderGeometryRef = useRef();

  const [hovered, setHovered] = useState(null);
  const [projectHovered, setProjectHovered] = useState(null);



  useEffect(() => {
    if (!cylinderOpacity) return;

    const unsubscribe = cylinderOpacity.onValuesChange((newValues) => {
      cylinderRef.current.opacity = newValues.opacity;
    });
    return unsubscribe;
  }, [cylinderOpacity]);

  useFrame(() => {
    const sequenceLength = val(sheet.sequence.pointer.length);
    sheet.sequence.position = Math.abs(scroll.offset * sequenceLength);
  });


  let lineLength = projectOpened ? 3 : 0.8;


  return (
    <>
      <TextElementContext.Provider value={{ hovered, projectHovered }}>
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
        <TextElements setHovered={setHovered} setProjectOpened={setProjectOpened} projectOpened={projectOpened} currentSection={currentSection} openProject={openProject} setOpenProject={setOpenProject} setProjectHovered={setProjectHovered} />

        {/* floor */}
        <mesh rotation={[-Math.PI / 2 + 0.3, 0, 0]} position={[0, -6, 0]} receiveShadow>
          <planeGeometry args={[100, 100]} />
          <shadowMaterial transparent opacity={0.4} />
        </mesh>
      </TextElementContext.Provider>
    </>
  );
}

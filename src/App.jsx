import { Canvas, useFrame } from "@react-three/fiber";
// import { Experience } from "./components/Experience";
import { OrbitControls, ScrollControls, useScroll } from "@react-three/drei";
import { Background } from "./components/Background";
import { Cubes } from "./components/Cubes";
import { getProject, val } from "@theatre/core";
import { SheetProvider, PerspectiveCamera, useCurrentSheet } from "@theatre/r3f";

import flyThroughState from "./fly.json";

function App() {
  // const sheet = getProject("Fly Through").sheet("Scene")
  const sheet = getProject("Fly Through", {state: flyThroughState}).sheet("Scene");

  return (
    <Canvas shadows gl={{ preserveDrawingBuffer: true }}>
      
      {/* <Experience /> */}
      {/* <OrbitControls enableZoom={false}/> */}
      <Background/>
      
      <ScrollControls pages={8} damping={1} maxSpeed={0.8}>
        <SheetProvider sheet={sheet}>
          <Scene/>
        </SheetProvider>
      </ScrollControls>

    </Canvas>
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

  return (
    <>
    <color attach="background" args={["#ececec"]} />
    
    <Cubes
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
    
    </>
  )
}
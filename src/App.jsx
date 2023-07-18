import { Canvas, useFrame } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { OrbitControls, ScrollControls, useScroll, ContactShadows, SoftShadows } from "@react-three/drei";
import { Background } from "./components/Background";
import { Cubes } from "./components/Cubes";
import { getProject, val } from "@theatre/core";
import { SheetProvider, PerspectiveCamera, useCurrentSheet } from "@theatre/r3f";
import { EffectComposer, Noise } from "@react-three/postprocessing";


import flyThroughState from "./fly.json";

function App() {
  // const sheet = getProject("Fly Through").sheet("Scene")
  const sheet = getProject("Fly Through", {state: flyThroughState}).sheet("Scene");


  return (
    <Canvas shadows gl={{ preserveDrawingBuffer: true }}>
      <SoftShadows size={25} focus={0} samples={10}/>
      
      <ScrollControls pages={8} damping={1} maxSpeed={0.8}>
      <Experience />
        <SheetProvider sheet={sheet}>
          <Scene/>
        </SheetProvider>
      </ScrollControls>

      <EffectComposer>
        <Noise opacity={0.2}/>
      </EffectComposer>

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
    <color attach="background" args={["#f0f0f0"]} />
    
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
    {/* floor */}
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
          <planeGeometry args={[100, 100]} />
          <shadowMaterial transparent opacity={0.4} />
        </mesh>

    {/* <ContactShadows position={[0, -7, 0]} opacity={0.75} scale={40} blur={1} far={9} /> */}
    </>
  )
}
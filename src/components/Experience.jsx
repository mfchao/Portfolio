import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Background } from "./Background";
import { Cubes } from "./Cubes";

export const Experience = () => {
  return (
    <>
      <OrbitControls enableZoom={false}/>
      <Background/>
      <ScrollControls pages={3} damping={0.25}>   
      <Cubes
       scale={[0.8, 0.8, 0.8]}
       position-x={0.4}
       />
      </ScrollControls>

      </>
  );
};

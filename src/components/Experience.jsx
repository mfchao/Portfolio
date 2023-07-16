import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Background } from "./Background";
import { Colorado } from "./colorado";
import { Bangkok } from "./bangkok";
import { London } from "./london";
import { Boston } from "./boston";
import { Base } from "./base";
import { Cubes } from "./Cubes";

export const Experience = () => {
  return (
    <>
      <OrbitControls enableZoom={false}/>
      <Background/>
      <ScrollControls pages={3} damping={0.25}>
      {/* <Colorado 
        scale={[0.8, 0.8, 0.8]}
        position-x={0.4}
       />  
      <Bangkok
        scale={[0.8, 0.8, 0.8]}
        position-x={0.4}
      />
      <London
        scale={[0.8, 0.8, 0.8]}
        position-x={0.4}
      />
      <Boston
        scale={[0.8, 0.8, 0.8]}
        position-x={0.4}
      /> */}
      <Cubes
       scale={[0.8, 0.8, 0.8]}
       position-x={0.4}
       />
      </ScrollControls>
{/*       
      <Base
        scale={[0.8, 0.8, 0.8]}
        position-x={0.4}
      /> */}


      </>
  );
};

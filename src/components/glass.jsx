import React from "react";
import { styled } from "styled-components";
import AnimatedCursor from "react-animated-cursor";

const Glass = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 800px;
  height: 800px;
  padding: 20px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(5px);
`;

export const GlassDiv = () => {
  return (
    <div className="App">
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={10}
        outerAlpha={0.2}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: "rgb(0, 0, 0)",
        }}
        outerStyle={{
          backgroundColor: "rgba(255, 255, 255, 0.4)",
          backdropFilter: "blur(5px)",
        }}
      />
    </div>
  );
};

import { useScroll } from "@react-three/drei";
import { Background } from "./Background";
import { useRef, useLayoutEffect, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";
import * as THREE from "three";


const bgColors = [
  { colorA: "#92bed4", colorB: "#aaba8a", duration: 0.5 },
  { colorA: "#e3d18f", colorB: "#dba29e", duration: 1 },
  { colorA: "#d5bae8", colorB: "#a9b8db", duration: 1 },
  { colorA: "#de99a3", colorB: "#8bccca", duration: 1 },
  { colorA: "#f1dcf7", colorB: "#f2f2f2", duration: 1 },
];

export const Experience = () => {

  //Scroll
  const scroll = useScroll();
  const lastScroll = useRef(0);
  const tl = useRef();
  const backgroundColors = useRef({
    colorA: "#f1dcf7",
    colorB: "#f2f2f2",
  });

  useFrame((_state, delta) => { 
    
    const scrollOffset = Math.max(0, scroll.offset);

    //Calculate lerped scroll offset
    let lerpedScrollOffset = THREE.MathUtils.lerp(
      lastScroll.current,
      scrollOffset,
      delta
    );

    lastScroll.current = lerpedScrollOffset;
    
    //get scroll position for background colors
    tl.current.seek(lerpedScrollOffset * tl.current.duration());

  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline();

    bgColors.forEach(({ colorA, colorB, duration }) => {
      tl.current.to(backgroundColors.current, {
        duration,
        colorA,
        colorB,
      });
    });

    tl.current.pause();

  }, []);


  return useMemo(
    () => (
    <>
      <Background backgroundColors={backgroundColors}/>
      </>
    ),
    []
  );
};


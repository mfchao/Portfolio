import { OrbitControls, ScrollControls, useScroll } from "@react-three/drei";
import { Background } from "./Background";
import { useRef, useLayoutEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";
import * as THREE from "three";

export const Experience = () => {

  //Scroll
  const scroll = useScroll();
  const lastScroll = useRef(0);

  useFrame((_state, delta) => {
    
    const scrollOffset = Math.max(0, scroll.offset);

    let friction = 1;

    //Calculate lerped scroll offset
    let lerpedScrollOffset = THREE.MathUtils.lerp(
      lastScroll.current,
      scrollOffset,
      delta * friction
    );
    //Protect below 0 and above 1
    lerpedScrollOffset = Math.min(lerpedScrollOffset, 1);
    lerpedScrollOffset = Math.max(lerpedScrollOffset, 0);

    lastScroll.current = lerpedScrollOffset;
    
    //get scroll position for background colors
    tl.current.seek(lerpedScrollOffset * tl.current.duration());

  });

  //for gradient background
  const tl = useRef();
  const backgroundColors = useRef({
    colorA: "#f1dcf7",
    colorB: "#f2f2f2",
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline();

    tl.current.to(backgroundColors.current, {
      duration: 0.5,
      colorA: "#92bed4",
      colorB: "#aaba8a",
    });
    tl.current.to(backgroundColors.current, {
      duration: 1,
      colorA: "#e3d18f",
      colorB: "#dba29e",
    });
    tl.current.to(backgroundColors.current, {
      duration: 1,
      colorA: "#d5bae8",
      colorB: "#a9b8db",
    });
    tl.current.to(backgroundColors.current, {
      duration: 1,
      colorA: "#de99a3",
      colorB: "#8bccca",
    });
    tl.current.to(backgroundColors.current, {
      duration: 1,
      colorA: "#f1dcf7",
      colorB: "#f2f2f2",
    });

    tl.current.pause();

  }, []);


  return (
    <>
      {/* <OrbitControls enableZoom={false}/> */}
      <Background backgroundColors={backgroundColors}/>

      </>
  );
};


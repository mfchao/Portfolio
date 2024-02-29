import { useScroll } from "@react-three/drei";
import { Background } from "./Background";
import { useRef, useLayoutEffect, useMemo, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";
import * as THREE from "three";


const bgColors = [
  { colorA: "#7cbfcc", colorB: "#aaba8a", colorC: "#e8f2d8", duration: 0.5 },
  { colorA: "#FEB17E", colorB: "#5971E1", colorC: "#CFE0FF", duration: 1 },
  { colorA: "#DBB4CC", colorB: "#B66EB7", colorC: "#e3f8fa", duration: 1 },
  { colorA: "#e3817f", colorB: "#249da6", colorC: "#7decf5", duration: 1 },
  { colorA: "#f1dcf7", colorB: "#83A5FF", colorC: "#FFFFFF", duration: 1 },
];

export const Experience = (props) => {
  const { setCurrentSection, menuOpened } = props;

  //Scroll
  const scroll = useScroll();
  const lastScroll = useRef(0);
  const tl = useRef();
  const backgroundColors = useRef({
    colorA: "#E2CACD",
    colorB: "#83A5FF",
    colorC: "#EFE8EF",
  });


  useFrame((_state, delta) => {

    const scrollOffset = Math.max(0, scroll.offset);

    //set scroll position for menu
    setCurrentSection(Math.floor(scrollOffset * 10));

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

  useEffect(() => {
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
        <Background backgroundColors={backgroundColors} />
      </>
    ),
    []
  );
};


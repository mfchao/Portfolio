import AnimatedCursor from "react-animated-cursor";
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import './mouse.css';
import { Interface } from "./Interface";


export const GlassDiv = () => {
  
  const [cursorVisible, setCursorVisible] = useState(true);
  const [cursorEnlarged, setCursorEnlarged] = useState(false);
  const cursorRef = useRef(null);
  const cursorOutlineRef = useRef(null);
  const requestRef = useRef(null);
  const delay = 18;
  const endX = useRef(window.innerWidth / 2);
  const endY = useRef(window.innerHeight / 2);
  const _x = useRef(0);
  const _y = useRef(0);



  return (
    <>
      {dot}
      {dotOutline}

      
    </>
  )
};





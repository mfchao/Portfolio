import AnimatedCursor from "react-animated-cursor";
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import './mouse.css';
import { Interface } from "./Interface";

const delay = 18;
const windowInnerWidth = window.innerWidth / 2;
const windowInnerHeight = window.innerHeight / 2;

export const GlassDiv = ({ mouseOverEvent, mouseOutEvent, cursorEnlarged }) => {

    const dot = useRef(null);
    const dotOutline = useRef(null);
    
    const [cursorVisible, setCursorVisible] = useState(true);
  
    const endX = useRef(windowInnerWidth);
    const endY = useRef(windowInnerHeight);
    const _x = useRef(0);
    const _y = useRef(0);
  
    const requestRef = useRef(null);
  
    useEffect(() => {
  
      // document.addEventListener('mousedown', mouseOverEvent);
      // document.addEventListener('mouseup', mouseOutEvent);
      document.addEventListener('mousemove', mouseMoveEvent);
      document.addEventListener('mouseenter', mouseEnterEvent);
      document.addEventListener('mouseleave', mouseLeaveEvent);
  
      animateDotOutline();
  
      return () => {
        // document.removeEventListener('mousedown', mouseOverEvent);
        // document.removeEventListener('mouseup', mouseOutEvent);
        document.removeEventListener('mousemove', mouseMoveEvent);
        document.removeEventListener('mouseenter', mouseEnterEvent);
        document.removeEventListener('mouseleave', mouseLeaveEvent);
  
        cancelAnimationFrame(requestRef.current);
      }
  
    }, []);
  
    const mouseEnterEvent = useCallback(() => {
      setCursorVisible(true);
    }, []);
  
    const mouseLeaveEvent = useCallback(() => {
      setCursorVisible(false);
    }, []);
  
    const mouseMoveEvent = e => {
      setCursorVisible(true);
  
      endX.current = e.pageX;
      endY.current = e.pageY;
  
      dot?.current?.style && (dot.current.style.top = endY.current + 'px');
      dot?.current?.style && (dot.current.style.left = endX.current + 'px');
    }
  
    const animateDotOutline = useCallback(() => {
      _x.current += (endX.current - _x.current) /  delay;
      _y.current += (endY.current - _y.current) / delay;
  
      dotOutline?.current?.style && (dotOutline.current.style.top = `${_y.current}px`);
      dotOutline?.current?.style && (dotOutline.current.style.left = `${_x.current}px`);
  
      requestRef.current = requestAnimationFrame(animateDotOutline);
    }, [cursorVisible, cursorEnlarged]);
  
    //toggle cursor size
    useEffect(() => {
      const scale = cursorEnlarged ? '0.75' : '1';
      dot.current.style.transform = `translate(-50%, -50%) scale(${scale})`;
      dotOutline.current.style.transform = `translate(-50%, -50%) scale(${cursorEnlarged ? '70' : '1'})`;
    }, [cursorEnlarged]);
  
    //toggle cursor visibility
    useEffect(() => {
      const opacity = cursorVisible ? '1' : '0';
      dot.current.style.opacity = opacity;
      dotOutline.current.style.opacity = opacity;
    }, [cursorVisible]);
  
    

    return (
      <>
      <div ref={dotOutline} className="cursor-dot-outline"></div>
        <div ref={dot} className="cursor-dot"></div>
      </>
    )
  
  }





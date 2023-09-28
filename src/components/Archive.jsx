import React, { useEffect, useRef, useState } from "react";
import * as THREE from 'three';
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Image, ScrollControls, Scroll, useScroll } from '@react-three/drei'
import { proxy, useSnapshot } from 'valtio'

const damp = THREE.MathUtils.damp;

const state = proxy({
    clicked: null,
    urls: [1, 2, 3, 4].map((u) => `/images/${u}.png`)
})

const w = 0.7;
const gap = 0.15;


export const Archive = (props) => {
    const { currentSection } = props;

    const { urls } = useSnapshot(state)
    const { width } = useThree((state) => state.viewport)
    const xW = w + gap;

    const ref = useRef()


    return (
        <>
            {urls.map((url, i) => <Item currentSection={currentSection} key={i} index={i} position={[i * xW, 0, 1.5]} scale={[w, 4, 1]} url={url} />) /* prettier-ignore */}

        </>
    );
}

function Item({ currentSection, index, position, scale, c = new THREE.Color(), ...props }) {
    const ref = useRef()
    const scroll = useScroll()
    const { clicked, urls } = useSnapshot(state)
    const [hovered, hover] = useState(false)
    const click = () => (state.clicked = index === clicked ? null : index)
    const over = () => hover(true)
    const out = () => hover(false)

    const [visible, setVisible] = useState(0);

    useEffect(() => {

        if (currentSection === 9) {
            setVisible(1);
        } else {
            setVisible(0);
        }

    }, [currentSection]);

    useFrame((state, delta) => {
        // const y = scroll.curve(index / urls.length - 1.5 / urls.length, 4 / urls.length)
        ref.current.material.scale[1] = ref.current.scale.y = damp(ref.current.scale.y, clicked === index ? 5 : 4, 8, delta)
        ref.current.material.scale[0] = ref.current.scale.x = damp(ref.current.scale.x, clicked === index ? 4.7 : scale[0], 6, delta)
        if (clicked !== null && index < clicked) ref.current.position.x = damp(ref.current.position.x, position[0] - 2, 6, delta)
        if (clicked !== null && index > clicked) ref.current.position.x = damp(ref.current.position.x, position[0] + 2, 6, delta)
        if (clicked === null || clicked === index) ref.current.position.x = damp(ref.current.position.x, position[0], 6, delta)
        ref.current.material.grayscale = damp(ref.current.material.grayscale, hovered || clicked === index ? 0 : Math.max(0, 1), 6, delta)
        ref.current.material.color.lerp(c.set(hovered || clicked === index ? 'white' : '#aaa'), hovered ? 0.3 : 0.1)
    })
    return <Image ref={ref} {...props} position={position} scale={scale} onClick={click} onPointerOver={over} onPointerOut={out} transparent opacity={visible} />
}
import React, { useEffect, useRef, useState } from "react";
import * as THREE from 'three';
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Image, ScrollControls, Scroll, useScroll, Text, Html } from '@react-three/drei'
import { proxy, useSnapshot } from 'valtio'

const damp = THREE.MathUtils.damp;

const state = proxy({
    hovered: null,
    urls: [1, 2, 3, 4].map((u) => `/images/${u}.png`),
    titles: ['Title 1', 'Assignment[0]: Intro to Comp', 'Title 3', 'Title 4']
})

const w = 0.7;
const gap = 0.15;

const TitleText = ({ title, position }) => {
    return (
        <>

            <Text
                position={position}
                fontSize={0.2}
                color="white"
                anchorX="center"
                anchorY="bottom-baseline"
                outlineWidth={0}
                outlineBlur={0.3}
                outlineColor={"black"}
                outlineOpacity={0.5}
            >
                {title}
            </Text>


        </>
    );
};


export const Archive = (props) => {
    const { currentSection } = props;

    const { urls } = useSnapshot(state)
    const { titles } = useSnapshot(state)
    const { width } = useThree((state) => state.viewport)
    const xW = w + gap;

    const ref = useRef()


    return (
        <>
            {urls.map((url, i) => <Item currentSection={currentSection} key={i} index={i} position={[i * xW, 0, 1.5]} scale={[w, 4, 1]} url={url} titles={titles} />) /* prettier-ignore */}

        </>
    );
}

function Item({ currentSection, index, position, scale, c = new THREE.Color(), titles, ...props }) {
    const ref = useRef()
    const scroll = useScroll()
    const { hovered, urls } = useSnapshot(state)
    const hover = () => (state.hovered = index === hovered ? null : index)
    const out = () => state.hovered = null;

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
        ref.current.material.scale[1] = ref.current.scale.y = damp(ref.current.scale.y, hovered === index ? 5 : 4, 8, delta)
        ref.current.material.scale[0] = ref.current.scale.x = damp(ref.current.scale.x, hovered === index ? 4.7 : scale[0], 6, delta)
        if (hovered !== null && index < hovered) ref.current.position.x = damp(ref.current.position.x, position[0] - 2, 6, delta)
        if (hovered !== null && index > hovered) ref.current.position.x = damp(ref.current.position.x, position[0] + 2, 6, delta)
        if (hovered === null || hovered === index) ref.current.position.x = damp(ref.current.position.x, position[0], 6, delta)
        ref.current.material.grayscale = damp(ref.current.material.grayscale, hovered === index ? 0 : Math.max(0, 1), 6, delta)
        ref.current.material.color.lerp(c.set(hovered === index ? 'white' : '#aaa'), hovered ? 0.3 : 0.1)
    })
    return (
        <>
            <Image ref={ref} {...props} position={position} scale={scale} onPointerOver={hover} onPointerOut={out} transparent opacity={visible} />
            {hovered === index && <TitleText title={titles[index]} position={[position[0], position[1] - ref.current.scale.y + 2, position[2]]} />

            }

        </>
    )

}
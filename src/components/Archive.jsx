import { useEffect, useRef, useState, useMemo } from "react";
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber'
import { Image, Text } from '@react-three/drei'
import { proxy, useSnapshot } from 'valtio'
import { useDrag } from '@use-gesture/react'
import React from "react";


const damp = THREE.MathUtils.damp;

const state = proxy({
    hovered: null,
    colored: null,
    urls: Array.from({ length: 13 }, (_, i) => `/images/Heros/${i}.jpg`),
    titles: ['FlowScape', 'Neural Synesthesia', 'Nosakhari Internship', 'Spatial Notes', 'SpotLite', 'Tangible Ideas', 'Silent Game BuildBot', 'Cuttlefish Grasshopper Plugin', 'UCL Assistant', '3D Droop', 'E-Motion', 'Accessible Prosthetics', 'Greening Cities'],
    // categories: ['UX', 'Computation', 'UX', 'Computation', 'UX', 'Computation', 'UX', 'Computation', 'UX', 'Fabrication', 'Computation', 'Fabrication', 'Fabrication']
})

const w = 0.7;
const gap = 0.15;
const xW = w + gap;
const factor = 0.01;

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
    const { currentSection, archiveProjectId, setArchiveProjectId, setProjectOpened, projectOpened } = props;


    const { urls, titles } = useSnapshot(state);

    const ref = useRef()

    const [x, setX] = useState(0);

    const bind = useDrag(({ offset: [x] }) => {
        setX(x);
    },
        { enabled: currentSection >= 9 ? true : false, eventOptions: { pointer: true } }
    );


    const optimizedUrls = useMemo(() => urls.map((url, i) => ({
        url,
        position: [i * xW, 0, 1.5],
        scale: [w, 4, 1]
    })), [urls, xW]);



    return (
        <>
            <group ref={ref} {...bind()} position-x={x * factor}>
                {optimizedUrls.map(({ url, position, scale }, i) => (
                    <Item
                        currentSection={currentSection}
                        key={i}
                        index={i}
                        position={position}
                        scale={scale}
                        url={url}
                        titles={titles}
                        setArchiveProjectId={setArchiveProjectId}
                        archiveProjectId={archiveProjectId}
                        setProjectOpened={setProjectOpened}

                    />
                ))}
            </group>


        </>
    );
}

function Item({ currentSection, index, position, scale, c = new THREE.Color(), titles, archiveProjectId, setArchiveProjectId, setProjectOpened, ...props }) {
    const ref = useRef()

    // const [selectedCategory, setSelectedCategory] = useState(null);


    const { hovered, urls } = useSnapshot(state)
    const hover = () => {
        if (visible) {
            state.hovered = index === hovered ? null : index;
        }
    }
    const out = () => state.hovered = null;

    // const { colored } = useSnapshot(state)
    // const color = () => {
    //     if (visible) {
    //         state.colored = state.categories[index] === selectedCategory ? null : index;

    //     }
    // }
    // const uncolor = () => state.colored = null;


    const [visible, setVisible] = useState(false);
    const [startOpacityAnimation, setStartOpacityAnimation] = useState(false);
    const [dragging, setDragging] = useState(false);

    const handleClick = () => {
        if (!dragging && visible) {
            setArchiveProjectId(index);
            setProjectOpened(true);
        }
    };


    useEffect(() => {

        if (currentSection >= 9 && archiveProjectId == null) {
            setTimeout(() => {
                setStartOpacityAnimation(true);
            }, 2000);
            setVisible(true);

        } else {
            setStartOpacityAnimation(false);
            setVisible(false);
        }

    }, [currentSection, archiveProjectId]);

    useEffect(() => {
        const preventDefault = (e) => e.preventDefault();

        if (visible) {
            setTimeout(() => {
                document.addEventListener('touchmove', preventDefault, { passive: false });
            }, 2000);
        } else {
            ref.current.removeEventListener('touchmove', preventDefault);
        }

        return () => {
            if (visible) {
                document.removeEventListener('touchmove', preventDefault);
            }
        }

    }, [visible]);



    useFrame((state, delta) => {

        ref.current.material.scale[1] = ref.current.scale.y = damp(ref.current.scale.y, hovered === index ? 5 : 4, 8, delta)
        ref.current.material.scale[0] = ref.current.scale.x = damp(ref.current.scale.x, hovered === index ? 4.7 : scale[0], 6, delta)
        if (hovered !== null && index < hovered) ref.current.position.x = damp(ref.current.position.x, position[0] - 2, 6, delta)
        if (hovered !== null && index > hovered) ref.current.position.x = damp(ref.current.position.x, position[0] + 2, 6, delta)
        if (hovered === null || hovered === index) ref.current.position.x = damp(ref.current.position.x, position[0], 6, delta)
        ref.current.material.grayscale = damp(ref.current.material.grayscale, hovered === index ? 0 : Math.max(0, 1), 6, delta)
        // ref.current.material.grayscale = damp(
        //     ref.current.material.grayscale,
        //     (hovered === index || colored === index) ? 0 : Math.max(0, 1),
        //     6,
        //     delta
        // );

        ref.current.material.color.lerp(c.set(hovered === index ? 'white' : '#aaa'), hovered ? 0.3 : 0.1)

        ref.current.material.opacity = damp(ref.current.material.opacity, startOpacityAnimation && visible === true ? 1 : 0, 6, delta)

    })
    return (
        <>
            {/* <Text position={[-5, 0, 0]}
                fontSize={0.2}
                color="black"
                anchorX="center"
                anchorY="bottom-baseline"
            >
                Filter:
            </Text>
            <Text position={[-5, -0.5, 0]}
                fontSize={0.2}
                color="black"
                anchorX="center"
                anchorY="bottom-baseline"
                onClick={() => setSelectedCategory('UX')}
                onPointerOver={color} onPointerOut={uncolor}
            >
                UX
            </Text>
            <Text position={[-5, -0.8, 0]}
                fontSize={0.2}
                color="black"
                anchorX="center"
                anchorY="bottom-baseline"
                onClick={() => setSelectedCategory('Computation')}
            >
                Computation
            </Text> 
            <Text position={[-5, -1.1, 0]}
                fontSize={0.2}
                color="black"
                anchorX="center"
                anchorY="bottom-baseline"
                onClick={() => setSelectedCategory('Fabrication')}
            >
                Fabrication
            </Text>*/}


            <Image ref={ref} {...props} position={position} scale={scale} onPointerOver={hover} onPointerOut={out}
                onPointerDown={() => setDragging(false)}
                onPointerMove={() => setDragging(true)}
                onPointerUp={() => handleClick()}
                transparent
                style={{ touchAction: 'none' }}
            />
            {hovered === index && <TitleText title={titles[index]} position={[position[0], position[1] - ref.current.scale.y + 2, position[2]]} />}

        </>
    )

}
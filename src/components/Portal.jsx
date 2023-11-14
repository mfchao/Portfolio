import React, { useRef, useState } from "react";
import { BackSide } from "three";
import { Gradient, LayerMaterial } from "lamina";
import { Environment, MeshPortalMaterial, RoundedBox, Sphere, Text, OrbitControls, useCursor } from "@react-three/drei";
import fonts from "../assets/fonts";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";

const width = 5.6;
const height = 5.4;

export const Portal = () => {
    const [hovered, setHovered] = useState(false);
    useCursor(hovered);

    const [active, setActive] = useState(false);
    const portalMaterial = useRef();

    //    console.log(active)

    useFrame((_state, delta) => {
        const worldOpen = active === true;
        easing.damp(portalMaterial.current, "blend", worldOpen ? 1 : 0, 0.2, delta)
    })

    return (
        <>

            <group active={active} setActive={setActive} >
                <Text font={fonts.SFCompactSemibold} fontSize={0.1} letterSpacing={0.05} anchorY="top" anchorX="left" position={[1.3, 0.1, 2.2]} color={"black"} rotation={[-1.57, 0, 0.77]}>
                    Archive
                </Text>

                <RoundedBox args={[width, height, 0.1]} onDoubleClick={() => setActive(active ? false : true)} rotation={[-1.57, 0, 0.77]} >

                    <MeshPortalMaterial ref={portalMaterial}>
                        <ambientLight intensity={0.5} />

                        <Environment preset="sunset" />
                        <OrbitControls enabled={active ? true : false} />

                        <Sphere args={[20, 20, 20]}>
                            <LayerMaterial side={BackSide}>
                                <Gradient axes={"y"} start={0.2} end={-0.5} colorA={"white"} colorB={"#f1dcf7"} />
                            </LayerMaterial>
                        </Sphere>
                        <mesh>
                            <boxGeometry />
                            <meshBasicMaterial color={"black"} />
                        </mesh>

                    </MeshPortalMaterial>
                </RoundedBox>
            </group>

        </>
    )
};


import { useThree, useFrame } from "@react-three/fiber";
import { useEffect, useState } from "react";


export const CameraController = (props) => {
    const { projectOpened } = props
    const { camera } = useThree();
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateMousePosition = (ev) => {
            setMousePosition({ x: ev.clientX, y: ev.clientY });
        };

        window.addEventListener("mousemove", updateMousePosition);

        return () => window.removeEventListener("mousemove", updateMousePosition);
    }, []);

    useFrame(() => {
        if (projectOpened) {
            return;
        }

        const { x, y } = mousePosition;
        const rotationX = (y / window.innerHeight - 0.5) * Math.PI * 0.03;
        const rotationY = (x / window.innerWidth - 0.5) * Math.PI * 0.03;
        camera.rotation.x = rotationX;
        camera.rotation.y = rotationY;
    });

    return null;
}
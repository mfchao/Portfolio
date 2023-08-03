import { MeshTransmissionMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { easing } from 'maath';



export const Selector = (props) => {
    const { cursorEnlarged, menuOpened } = props;

    const ref = useRef();

    useFrame(({ viewport, camera, pointer }, delta) => {
        const { width, height } = viewport.getCurrentViewport(camera, [0, 0, 3]);
        
        // Calculate the target position and scale based on menuOpened
        const targetPosition = [(pointer.x * width) / 2, (pointer.y * height) / 2, (menuOpened ? 4 : 3)];
        const targetScale = cursorEnlarged ? 4 : (menuOpened ? 4 : 0.01);
        
        // Apply damping to smoothly transition the position, scale, and color
        easing.damp3(ref.current.position, targetPosition, cursorEnlarged ? 0 : (menuOpened ? 0 : 0.1), delta);
        easing.damp3(ref.current.scale, targetScale, cursorEnlarged ? 0.5 : (menuOpened ? 0.5 : 0.2), delta);
        easing.dampC(ref.current.material.color, cursorEnlarged ? '#f0f0f0' : (menuOpened ? '#f0f0f0' : '#ccc'), 0.1, delta);
      });

    
    return (
        <>
        <mesh ref={ref}>
            <circleGeometry args={[4, 64, 64]} />
            <MeshTransmissionMaterial samples={16} resolution={512} anisotropy={1} thickness={0.1} roughness={0.4} toneMapped={true} />
        </mesh>
        </>
    )
}
import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";


const RotatingTorus = () => {
    const torusRef = useRef();
  
    useFrame(() => {
      torusRef.current.rotation.x += 0.005;
      torusRef.current.rotation.y += 0.01;
    });
  
    return (
      <mesh ref={torusRef}>
        <torusGeometry args={[1, 0.4, 16, 100]} />
        <meshStandardMaterial color={"#ff9900"} metalness={0.6} roughness={0.4} />
      </mesh>
    );
  };

  export default RotatingTorus
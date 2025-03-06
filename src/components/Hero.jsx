
import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import RotatingTorus from "../constants/Torus";


const HeroPage = () => {
  return (
    <div className="relative h-screen w-full">
      {/* 3D Canvas */}
      <Canvas shadows camera={{ position: [0, 1.5, 4], fov: 50 }}>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.5}>
            <RotatingTorus />
          </Stage>
          <OrbitControls enableZoom={false} />
        </Suspense>
      </Canvas>

      {/* Overlay Text */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <h1 className="text-5xl font-bold">Welcome to My Portfolio</h1>
        <p className="mt-4 text-lg opacity-80">Explore the world of 3D & Web Development</p>
        <button className="mt-6 px-6 py-2 bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-600 transition">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HeroPage;

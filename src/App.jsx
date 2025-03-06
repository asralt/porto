import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/NavigationBar";
import  Hero  from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";


import RotatingTorus from "./constants/Torus";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import { Suspense, useRef } from "react";

function App() {
  return (
    <div data-theme="synthwave">
      <div className="torus-container"> 
      <Canvas shadows camera={{ position: [0, 1.5, 4], fov: 50 }}>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.5}>
            <RotatingTorus />
          </Stage>
          <OrbitControls enableZoom={false} />
        </Suspense>
      </Canvas>
        
      </div>
    <Router>
      <Navbar />
      <div className="">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;

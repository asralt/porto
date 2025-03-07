
import React from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, TorusKnot } from "@react-three/drei";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const Hero = () => {
  return (
    <div className=" relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white p-6 overflow-hidden">
      
      {/* Floating 3D Shape Background */}
      <Canvas className="absolute top-0 left-0 w-full h-full">
        <ambientLight intensity={1} />
        <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
          <TorusKnot args={[1, 0.4, 100, 16]} position={[0, 0, -2]}>
            <meshStandardMaterial color="cyan" wireframe />
          </TorusKnot>
        </Float>
        <OrbitControls enableZoom={false} />
      </Canvas>

      {/* Hero Content */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="text-center z-10"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
          Hi, I'm <span className="text-cyan-400">[Your Name]</span> 👋
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          A <span className="text-cyan-400">Full-Stack Developer</span> creating unique web experiences using <span className="text-cyan-400">React</span> & <span className="text-cyan-400">Three.js</span>.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="mt-6 flex justify-center space-x-6">
          <motion.a
            href="/projects"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="px-6 py-3 bg-cyan-500 text-white rounded-lg shadow-lg hover:bg-cyan-600 transition"
          >
            View Projects
          </motion.a>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="px-6 py-3 border border-cyan-500 text-cyan-400 rounded-lg shadow-lg hover:bg-cyan-500 hover:text-white transition"
          >
            Contact Me
          </motion.a>
        </div>
      </motion.div>

      {/* Social Media Icons */}
      <div className="absolute bottom-8 flex space-x-6">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-gray-300 text-4xl hover:text-white transition" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-blue-400 text-4xl hover:text-blue-500 transition" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-pink-400 text-4xl hover:text-pink-500 transition" />
        </a>
      </div>
    </div>
  );
};

export default Hero;

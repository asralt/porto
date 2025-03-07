import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/NavigationBar";
import  Hero  from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";



function App() {
  return (
    //synthwave
    <div data-theme="">
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

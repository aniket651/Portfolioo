import { useState, useEffect } from "react";


import Navbar from "./components/Navbar";
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Education from "./components/Education";
import ProjectDetails from "./components/ProjectDetails";

function App() {


  return (
    <div className="App">
      <Navbar />
      <div className="restall">
        <HeroSection />
        <Skills />
        <Experience />
        <Projects  />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;

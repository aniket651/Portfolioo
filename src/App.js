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

  const [openModal, setOpenModal] = useState({ state: false, project: null });
  console.log(openModal)

  return (
    <div className="App">
      {/* <Navbar /> */}
      <div className="restall">
        <HeroSection />
        <div>
          <Skills />
          <Experience />
        </div>
        <Projects openModal={openModal} setOpenModal={setOpenModal} />
        <div>
          <Education />
          <Contact />
        </div>
        <Footer />
        {openModal.state &&
          <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
        }
      </div>
    </div>
  );
}

export default App;

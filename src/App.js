import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import "./components/Navbar.css"
// import { Router } from 'react-router-dom'
import AnchorLink from "react-anchor-link-smooth-scroll";

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
      {/* <Navbar /> */}
      <nav>
        <div className="logo">Aniket Pandey</div>
        <input type="checkbox" id="click" />
        <label htmlFor="click" className="menu-btn">
          <FontAwesomeIcon icon={faBars} className="icon" />
        </label>
        <ul>
          {/* <li><AnchorLink href='#about'  >about </AnchorLink></li> */}
          <li><AnchorLink href="#skills" >skills </AnchorLink></li>
          <li><AnchorLink href="#experience" >experience </AnchorLink></li>
          <li><AnchorLink href='#project'>projects </AnchorLink></li>
          <li><AnchorLink href='#education' >education </AnchorLink></li>
          <li><AnchorLink href='#contact' >contact </AnchorLink></li>

        </ul>
      </nav>
      <div className="restall">
        <HeroSection />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;

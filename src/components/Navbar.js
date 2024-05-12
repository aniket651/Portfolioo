import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import "./Navbar.css"
import { Router } from 'react-router-dom'
import AnchorLink from "react-anchor-link-smooth-scroll";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import Experience from "./Experience";
import Education from "./Education";
function Navbar() {
  return (
    <nav>
      <div className="logo">Aniket Pandey</div>
      <input type="checkbox" id="click" />
      <label htmlFor="click" className="menu-btn">
        <FontAwesomeIcon icon={faBars} className="icon" />
      </label>
        <ul>
          <li><AnchorLink href='#about'  >about </AnchorLink></li>
          <li><AnchorLink href="#skills" >skills </AnchorLink></li>
          <li><AnchorLink href="#experience" >experience </AnchorLink></li>
          <li><AnchorLink href='#project'>projects </AnchorLink></li>
          <li><AnchorLink href='#education' >education </AnchorLink></li>
          <li><AnchorLink href='#contact' >contact </AnchorLink></li>

        </ul>
    </nav>
  )
}

export default Navbar
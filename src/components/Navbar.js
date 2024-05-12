import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import "./Navbar.css"

function Navbar() {
  return (
    <nav>
      <div className="logo">Aniket Pandey</div>
      <input type="checkbox" id="click" />
      <label htmlFor="click" className="menu-btn">
        <FontAwesomeIcon icon={faBars} className="icon"   />
      </label>
      <ul>
        <li><a >about </a></li>
        <li><a >skills </a></li>
        <li><a >experience </a></li>
        <li><a >projects </a></li>
        <li><a >education </a></li>
        <li><a >contact </a></li>

      </ul>
    </nav>
  )
}

export default Navbar
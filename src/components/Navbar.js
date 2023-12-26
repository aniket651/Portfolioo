import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import "./Navbar.css"

function Navbar() {
  return (
    // <div className='navbar row'>
    //   <div className='col1 col'>Aniket Pandey</div>
    //   <div className='col2 col'> 
    //     <ul>
    //       <li> <a href='#about'>About</a></li>
    //       <li><a href='#skills'>Skills</a></li>
    //       <li><a href='#expereince'>Experience</a></li>
    //       <li><a href='#projects'>Projects</a></li>
    //       <li><a href='#education'>Education</a></li>
    //     </ul>
    //   </div>

    // </div>
    <nav>
      <div className="logo">Aniket Pandey</div>
      <input type="checkbox" id="click" />
      <label htmlFor="click" className="menu-btn">
        <FontAwesomeIcon icon={faBars} className="icon"   />
        {/* <i class="fas fa-bars"></i>some change req here */}
      </label>
      <ul>
      {/* <li><a onClick={handleDashboardClick}>Dashboard </a></li> */}
        <li><a >about </a></li>
        <li><a >skills </a></li>
        <li><a >experience </a></li>
        <li><a >projects </a></li>
        <li><a >education </a></li>
        <li><a >contact </a></li>

      </ul>

      {/* implement somehow that if person is logged in then only logout shows and vice-versa */}
    </nav>
  )
}

export default Navbar
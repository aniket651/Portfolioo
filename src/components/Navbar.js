import React from 'react'
import "./Navbar.css"

function Navbar() {
  return (
    <div className='navbar row'>
      <div className='col1 col'>PortFolio </div>
      <div className='col2 col'> 
        <ul>
          <li> <a href='#about'>About</a></li>
          <li><a href='#skills'>Skills</a></li>
          <li><a href='#expereince'>Experience</a></li>
          <li><a href='#projects'>Projects</a></li>
          <li><a href='#education'>Education</a></li>
        </ul>
      </div>
      <div className='col3 col'>
        
      </div>

    </div>
  )
}

export default Navbar
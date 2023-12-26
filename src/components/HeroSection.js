import React from 'react'
import HeroImg from "../images/HeroImg.jpg"
import Primg from "../images/primage.jpeg"
import "./HeroSection.css"
import { Bio } from "../data/constants.js"
import Typewriter from 'typewriter-effect';


function HeroSection() {
  return (
    <div className='herosection'>

      <div className='row'>

        <div className='left col'>
          <div className='head'>
            Hello!
          </div>
          <div className='subtitle'>
            I am a
            <span className='postsubtitle'>
              <Typewriter
                options={{
                  strings: Bio.roles,
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </div>

          <div className='description'>
            {Bio.description}
          </div>
          
          
          <button className='resume'><a href='https://drive.google.com/file/d/1hQ7zH3Tkkiw6jiSMVmxyfcYoA8vPeoAU/view?usp=drive_link' target='_blank'> View Resume </a></button>
        

        </div>

        <div className='right col'>

          <img className='heroImg' src="https://i.ibb.co/Tb5RdmY/myimg-bw-Crop.jpg" alt="hero-image" />
        </div>

      </div>
    </div>
  )
}

export default HeroSection
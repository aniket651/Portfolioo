import React from 'react'
import ExperienceBox from "./ExperienceBox"
import { experiences } from '../data/constants'
import "./Experience.css";

function Experience() {
  return (
    <div className='conatiner'>
      <div className='experiencehead'>Experiences</div>
      <div className='experiencesubtitle'>Here are some of my experiences on which I have been working on for the past 3 years.</div>

      <div className='experienceContainer'>
        {experiences.map((e) => {
          return <ExperienceBox obj={e} key={e.id} />
        })}

      </div>

    </div>
  )
}

export default Experience
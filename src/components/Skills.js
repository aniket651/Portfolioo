import React from 'react'
import { skills } from "../data/constants";
import SkillBox from './SkillBox';
import "./Skills.css";

function Skills() {
  return (
    <div className='conatiner'>
      <div className='skillhead'>Skills</div>
      <div className='skillsubtitle'>Here are some of my skills on which I have been working on for the past 3 years.</div>

      <div className='skillContainer'>
        {skills.map((e) => {
          return <SkillBox obj={e} key={e.title} />
        })}

      </div>

    </div>
  )
}

export default Skills
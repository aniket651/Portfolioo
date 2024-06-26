import React from 'react'
import ProjectBox from "./ProjectBox.js"
import { projects } from '../data/constants.js'
import "./Projects.css";

function Projects() {
  return (
    // <div className='projectconatiner'>
      <div className='project-wrap'  id="project">
        <div className='projecthead'>Projects</div>
        <div className='projectsubtitle'>Here are some of my projects on which I have been working on for the past 3 years.</div>

        <div className='projectContainers'>
          {projects.map((e) => {
            return <ProjectBox key={e.title} obj={e}  />
          })}

        </div>

      </div>

    // </div>
  )
}

export default Projects
import React from 'react'
import "./ExperienceBox.css";

function ExperienceBox(props) {
  return (
    <div className='expbox Card'>
      <div className='expHead Top'>
        <div className='expSubhead'>
          <div className='expRole'>{props.obj.role}</div>
          <div className='expCompany'>{props.obj.company}</div>
          <div className='expDuration'>{props.obj.date}</div>
        </div>
      </div>
      <div className='expBody'>
        <div className='expDesc'>{props.obj.desc}</div>
        {props.obj.skills && <div className='expSkills'>
          <div className='skills'>
            Skills:
            <div className='itemWrapper'>
              {props.obj.skills.map((e) => {
                return <div className='skill'>{e}</div>
              })}
            </div>
          </div>
        </div>}
      </div>

    </div>
  )
}

export default ExperienceBox
import React from 'react'
import { education } from '../data/constants'
import "./Education.css"

const EducationCard = ({ key, obj }) => {
  return (
    <div className='EdContainer'>
      <div className='edCardBody'>
        <div className='name'>{obj.school}</div>
        <div className='degree'>{obj.degree}</div>
        <div className='duration'>{obj.date}</div>
        <div className='grade'>{obj.grade}</div>

      </div>
    </div>
  )
}



function Education() {
  return (
    <div className='educationContainer'>
      <div className='educationWrapper'>
        <div className='edTitle'>Education</div>
        <div className='edCards'>
          {
            education.map((e) => {
              return <EducationCard key={e.id} obj={e} />
            })
          }
        </div>
      </div>

    </div>
  )
}

export default Education
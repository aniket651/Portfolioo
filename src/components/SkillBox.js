import React from 'react'
import "./SkillBox.css"

function SkillBox(Props) {
    return (
        <div className='skillbox'>
            <div className='skillTitle'>{Props.obj.title}</div>
            <div className='skillList'>
                {Props.obj.skills.map((e) => {
                    return (
                        <div className='skillItem'>
                            <img src={e.image}></img>
                            {e.name}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default SkillBox
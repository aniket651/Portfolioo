import React from 'react'
import "./ProjectBox.css"
function ProjectBox(props) {
    return (
        <div className='projectContainer' onClick={()=>window.open(props.obj.webapp)}>
            <div className='projectImage'>
                <img className='projectImage' src={props.obj.image} alt='picture'></img>
                
            </div>
            <div className='tags'>
                {
                    props.obj.tags.map((e) => {
                        return <div className='tag'>{e}</div>
                    })
                }
            </div>
            <div className='details'>
                <div className='projectTitle'>{props.obj.title}</div>
                <div className='projectDesc'>{props.obj.description}</div>
            </div>
            {props.obj.member && <div className='members'>
                {
                    props.obj.member.map((e)=>{
                        return <img className='avatar' src={e.img}></img>
                    })
                }
            </div>}

        </div>
    )
}

export default ProjectBox
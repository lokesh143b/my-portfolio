import React, { useState } from 'react'
import "./index.css"
import pattern from '../../assets/theme_pattern.svg'
import Projects_list from '../../assets/projects/projects'

const Projects = () => {
const [projects , setProjects] = useState(Projects_list.slice(0,6))

const onClickShowBtn = () => {
  if(projects.length <= Projects_list.length){
    setProjects(Projects_list.slice(0 , projects.length+6))
  }
}
 
  return (
    <div id='projects' className='projects-container'>
      <div className='projects-title'>
        <h1>My Projects</h1>
        <img  src={pattern} alt="pattern" />
      </div>
      <ul className="projects">
        {
          projects.map((each) =>(
            <a key={each.p_no} href={each.p_link} target='_block'>
              <li  className="projects-format">
              <h2>{each.p_name}</h2>
              <img  src={each.p_img} alt={each.a_name} />
              <p>{each.p_desc}</p>
            </li>
            </a>
          ))
        }
      </ul>
      <button onClick={onClickShowBtn} >Show more</button>
    </div>
  )
}

export default Projects
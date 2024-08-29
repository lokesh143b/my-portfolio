import React, { useState } from 'react'
import "./index.css"
import pattern from '../../assets/theme_pattern.svg'
import Achievements_Data from '../../assets/certificates/achievements_data'

const Achievements = () => {
  const [Achievements , setAchievements] = useState(Achievements_Data.slice(0,6))
const onClickShowMore = () => {
    if(Achievements.length <= Achievements_Data.length){
      setAchievements(Achievements_Data.slice(0,Achievements.length+6))
    }
}

  return (
    <div id='achievements' className='achievements-container'>
      <div className='achievements-title'>
        <h1>My Achievements</h1>
        <img src={pattern} alt="pattern" />
      </div>
      <ul className="achievements">
        {
          Achievements.map((each) =>(
            <li key={each.a_no} className="achievements-format">
              <h2>{each.a_name}</h2>
              <img  src={each.a_img} alt={each.a_name} />
              <p>{each.a_desc}</p>
            </li>
          ))
        }
      </ul>
      <button onClick={onClickShowMore}>Show more</button>
    </div>
  )
}

export default Achievements
import React from 'react'
import "./index.css"
import pattern from '../../assets/theme_pattern.svg'
import profile_img from "../../assets/profile_img.jpg"

const About = () => {
  return (
    <div id='about' className='about-container'>
        <div className='about-title'>
            <h1>About me</h1>
            <img src={pattern} alt="pattern" />
        </div>
        <div className='about-sections'>
            <div className="about-left">
                <img src={profile_img}  alt="profile" />
            </div>
            <div className="about-right">
                <p>
                    I am an Fullstack Developer with over a 2 yaers of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.
                </p>
                <p>
                    My passion for fullstack development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.
                </p>
                <div className='about-skills'>
                    <div className='about-skill'>
                        <h1>HTML & CSS</h1>
                        <hr style={{width :"50%"}}/>
                    </div>
                    <div className='about-skill'>
                        <h1>JavaScript</h1>
                        <hr style={{width :"70%"}}/>
                    </div>
                    <div className='about-skill'>
                        <h1>Python</h1>
                        <hr style={{width :"50%"}}/>
                    </div>
                    <div className='about-skill'>
                        <h1>SQL</h1>
                        <hr style={{width :"70%"}}/>
                    </div>
                    <div className='about-skill'>
                        <h1>Node JS</h1>
                        <hr style={{width :"60%"}}/>
                    </div>
                    <div className='about-skill'>
                        <h1>Express JS</h1>
                        <hr style={{width :"50%"}}/>
                    </div>
                    <div className='about-skill'>
                        <h1>React JS</h1>
                        <hr style={{width :"80%"}}/>
                    </div>
                </div>
            </div>
        </div>

        <div className="about-achievements">
            <div className='about-achievement'>
                <h1>15+</h1>
                <p>PROJECTS</p>
            </div>
            <hr/>
            <div className='about-achievement'>
                <h1>10+</h1>
                <p>ACHIEVEMENTS</p>
            </div>
            <hr/>
            <div className='about-achievement'>
                <h1>2+</h1>
                <p>YEARS OF EXPRIENCE</p>
            </div>
            <hr/>
        </div>
    </div>
  )
}

export default About
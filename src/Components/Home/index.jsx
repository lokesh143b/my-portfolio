import React from 'react'
import './index.css'
import profile from "../../assets/profile-pic.jpg"
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Home = () => {
  return (
    <div id='home' className='home-container'>
      <img src={profile} alt="profile" /> 
      <h1>
        <span>I'm Srirangam Lokeswara Rao </span>  
        fullstack developer
      </h1>  
      <p>
        I am a fullstack developer from India, I have hands on experience in multiple launguages like HTML, CSS , JavaScript, Python, SQL, Node Js, Express JS, React Js.
      </p>   
      <div className='hero-action'>
        <AnchorLink className='anchor-link' offset={50} href='#contact'><div className="hero-connect">Contact with me</div></AnchorLink>
        <a className='anchor-link' href="https://drive.google.com/file/d/1y3xifEAKxno9G7RJ5rSdrZOKxW1zRAY0/view?usp=drive_link" target='_blank' ><div className="hero-resume">My resume</div></a>
      </div>    
    </div>
  )
}

export default Home
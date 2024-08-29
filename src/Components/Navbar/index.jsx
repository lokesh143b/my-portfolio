import React, { useState } from 'react'
import "./index.css"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import pattern from '../../assets/theme_pattern.svg'

const Navbar = () => {
  const [menu ,setMenu ] = useState("home");

  return (
    <div className='navbar'>
      <div className="name">
        <AnchorLink className='anchor-link' offset={50} href='#home'>
          <h1>
          <span className='first-letter'>L</span>
          <span>okes</span>
          <span className='last-letter'>H</span>
          </h1>
          <img src={pattern} alt="pattern" />
        </AnchorLink>
      </div>
      <ul>
        <li><AnchorLink className='anchor-link' offset={50} href='#home'><p onClick={()=>setMenu("home")}>Home</p>{menu === "home"? <img src={pattern} alt='home'/>:<></>}</AnchorLink> </li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About Me</p>{menu === "about"? <img src={pattern} alt='home'/>:<></>}</AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#achievements'><p onClick={()=>setMenu("services")}>Achievements</p>{menu === "services"? <img src={pattern} alt='home'/>:<></>}</AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#projects'><p onClick={()=>setMenu("portfolio")}>Projects</p>{menu === "portfolio"? <img src={pattern} alt='home'/>:<></>}</AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p>{menu === "contact"? <img src={pattern} alt='home'/>:<></>}</AnchorLink></li>
      </ul>
      <AnchorLink className='anchor-link' offset={50} href='#contact'><button>Connect With Me</button></AnchorLink>
    </div>
  )
}

export default Navbar
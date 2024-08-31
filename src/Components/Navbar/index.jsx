import React, { useRef, useState } from 'react'
import "./index.css"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import pattern from '../../assets/theme_pattern.svg'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {
  const [menu ,setMenu ] = useState("home");
  

  return (
    <div className='navbar'>
      <div className="name">
        <AnchorLink className='logo' offset={50} href='#home'>
          <h1>
          <span className='first-letter'>L</span>
          <span>okes</span>
          <span className='last-letter'>H</span>
          </h1>
          <img src={pattern} alt="pattern" />
        </AnchorLink>
      </div>
      <ul>
        <li><AnchorLink className='anchor-link ' offset={50} href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu === "home"? <img src={pattern} alt='home'/>:<></>} </li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About Me</p></AnchorLink>{menu === "about"? <img src={pattern} alt='home'/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#achievements'><p onClick={()=>setMenu("services")}>Achievements</p></AnchorLink>{menu === "services"? <img src={pattern} alt='home'/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#projects'><p onClick={()=>setMenu("portfolio")}>Projects</p></AnchorLink>{menu === "portfolio"? <img src={pattern} alt='home'/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu === "contact"? <img src={pattern} alt='home'/>:<></>}</li>
      </ul>
      <AnchorLink className='anchor-link' offset={50} href='#contact'><button>Connect With Me</button></AnchorLink>
      
    </div>
  )
}

export default Navbar
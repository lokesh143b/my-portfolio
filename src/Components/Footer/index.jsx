import React from 'react'
import "./index.css"
import pattern from '../../assets/theme_pattern.svg'

const Footer = () => {
  return (
    <div className='footer-section'>
        <div className="footer-top">
            <a href='#home' className='footer-logo'>
            <h1>
                <span className='footer-first-letter'>L</span>
                <span>okes</span>
                <span className='footer-last-letter'>H</span>
            </h1>
                <img src={pattern} alt="pattern" />
            </a>
            <p>I am a fullstack developer from India, I have  hands on experience in multiple launguages like HTML, CSS, JavaScript, Python, SQL, Node Js, Express JS, React Js.</p>
        </div>
        <hr/>
        <div className="footer-bottom">
            <p className="footer-bottom-left">© 2024 Lokeswara rao S. All rights reserved.</p>
            <div className='footer-bottom-right'>
                <p>Term of services</p>
                <p>Privacy policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
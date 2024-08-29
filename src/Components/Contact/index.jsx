import React from 'react'
import "./index.css"
import pattern from '../../assets/theme_pattern.svg'
import mail from "../../assets/mail_icon.svg"
import call from "../../assets/call_icon.svg"
import location from "../../assets/location_icon.svg"

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "c7bc175d-ed97-4509-9eaf-109225fec190");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      alert("Email sent successfully.")
      event.target.reset();
    } else {
      console.log("Error", data);
      alert("Error")
    }
  };
  
  return (
    <div id='contact' className='contact-container'>
      <div className='contact-title'>
        <h1>Get in touch</h1>
        <img src={pattern} alt="pattern" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
          <div className='contact-details'>
            <div className='contact-detail'>
              <img src={mail} alt="mail" />
              <p>srirangamlokeswararao@gmail.com</p>
            </div>
            <div className='contact-detail'>
              <img src={call} alt="call" />
              <p>+916303300378</p>
            </div>
            <div className='contact-detail'>
              <img src={location} alt="location" />
              <p>AP, India</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" name='name' placeholder='Enter your name' required/>
            <label htmlFor="">Your Email</label>
            <input type="email" name='email' placeholder='Enter your email' required/>
            <label htmlFor="">Write Message Here</label>
            <textarea name='message' rows="8" placeholder='Enter your message' required></textarea>
            <button type='submit'>Submit now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
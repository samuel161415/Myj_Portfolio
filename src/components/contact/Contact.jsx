import React, { useContext, useState } from 'react'
import './contact.css'
import PhoneIcon from '@mui/icons-material/Phone';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../../context';

function Contact() {
  const theme=useContext(ThemeContext);
  const darkMode=theme.state.darkMode;

  const formRef=useRef()
  const [done,setDone]=useState(false)
  const handleSubmit=(e)=>{
     e.preventDefault();

     emailjs.sendForm('service_wu53qbi', 'template_pnym428', formRef.current, 'VrjGwbDxzC7gCinB9')
     .then((result) => {
         setDone(true)
     }, (error) => {
         console.log(error.text);
     });
 

  }
  return (
    <div className='c'>
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
           <h1 className="c-title">
             Let's discuss My project
           </h1>
          <div className="c-info">
            <div className="c-info-item">
              <EmailIcon color='success'/> <p className='c-text'>samuelnegalign1@gmail.com </p>
            </div>
            <div className="c-info-item">
              <PhoneIcon color='success'/> <p className='c-text'>+251 946 142 726</p>
            </div>
            <div className="c-info-item">
              <HomeIcon color='success'/> <p className='c-text'>Shiromeda,AddisAbaba, Ethiopia</p>
            </div>
          </div>
        </div>
        <div className="c-right">
         <p className="c-desc">
          <b>Or email me : </b> Just send me a message here
         </p>
         <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder='Name' name='user_name' style={{backgroundColor:darkMode&&'#333'}}/>
            <input type="text" placeholder='Subject' name='user_subject' style={{backgroundColor:darkMode&&'#333'}}/>
            <input type="email" placeholder='Email' name='user_email' style={{backgroundColor:darkMode&&'#333'}}/>
            <textarea name="message" id="" cols="30" rows="5" placeholder='Message' style={{backgroundColor:darkMode&&'#333'}} />
            <button>Submit</button>
            {done&&<div className='done-text'>Thank you</div>}
         </form>
        </div>
      </div> 
    </div>
  )
}

export default Contact
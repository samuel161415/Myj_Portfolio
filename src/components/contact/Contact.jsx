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
  const handleSubmit = (e) => {
    e.preventDefault();
  
    emailjs.sendForm('service_eye9hx8', 'template_7ml02ox', formRef.current, 'ZdlgFwqllt4ailXq6')
      .then((result) => {
        setDone(true);
        alert('Email sent successfully!');
      })
      .catch((error) => {
        console.error(error);
        alert('Oops, there was an error sending your email. Please try again later.');
      });
  };
  return (
    <div className='c '>
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left pt-5 ">
           <h1 className=" text-[30px]  font-bold ">
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
        <div className="c-right pt-5  ">
         <p className="c-desc font-bold py-3 ">
          <b>Or email me : </b> Just send me a message here
         </p>
         <form ref={formRef} onSubmit={handleSubmit} >
            <input type="text" placeholder='Name' name='user_name' class= 'c-input py-3 p-2 w-full md:w-1/2' style={{backgroundColor:darkMode&&'#333'}}/>
            <input type="text" placeholder='Subject' name='user_subject'  class= 'c-input my-3 p-2 w-full md:w-1/2'  style={{backgroundColor:darkMode&&'#333'}}/>
            <input type="email" placeholder='Email' name='user_email'  class= 'c-input my-3 p-2 w-full md:w-1/2'  style={{backgroundColor:darkMode&&'#333'}}/>
            <textarea name="message" id="" cols="30"  rows="5" class= 'c-input c-textArea my-3 p-2 w-full ' placeholder='Message' style={{backgroundColor:darkMode&&'#333'}} />
            <button className = "rounded bg-[#59b256] px-5 py-2 md:w-[20%] w-[50%] overflow-hidden">Submit</button>
            {done&&<div className='done-text'>Thank you</div>}
         </form>
        </div>
      </div> 
    </div>
  )
}

export default Contact
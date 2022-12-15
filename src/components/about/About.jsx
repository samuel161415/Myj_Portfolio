import React, { useContext } from 'react'
import './about.css'
import Cert from '../../assets/Cert.png'
import { ThemeContext } from '../../context';
function About() {
  const theme=useContext(ThemeContext);

  return (
    
    <div className='a'>
        <div className="a-left">
            <div className="a-card bg" style={{backgroundColor:theme.state.darkMode?'white':'black'}} ></div>
            <div className="a-card" id='fimage'>
                <img src="https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg" alt="" className="a-img" />
            </div> 
        </div>
        <div className="a-right">
          <h1 className="a-title">About Me</h1>
            <p className="a-sub">
              Introduction about me
            </p>
            <p className="a-desc">
              I graduated from Addis Ababa Institute of Technology(AAiT) 
              in computer Engineering. Currently I am a programmer. I have done many projects from website to mobile app.
              My favorite languages and frameworks are Nodejs(ExpressJs), ReactJs(NextJs) for my web and Flutter for my mobile app.

            </p>
            <div className="a-award">
              <img src={Cert} alt="" className="a-award-img" />
              <div className="a-info">
                <h4 className="a-award-title">Addis Ababa University Certification</h4>
                <p className="a-award-desc">
                  This is addis ababa university(AAiT) certification.
                  It is recognition for my result 
                </p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default About
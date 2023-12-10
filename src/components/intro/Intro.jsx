import React from "react";
import "./intro.css";
import me from "../../assets/myImage.png";
export default function Intro() {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <div class = "my-5">
            <h1 class="">Hello, My name is </h1>
            <h1 class="font-bold text-2xl">Samuel Negalign</h1>
          </div>
          <div className="i-title py-5">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">UI/UX Designer</div>
            </div>
          </div>
          <p className="my-5 flex flex-col">
            {/* I am a full-stack Web developer specializing in front and backend development on both web apps and mobile apps. I have good experience in all aspects of the software development lifecycle. I am also good problem solver. */}
            <span class="font-sans my-5">
              Welcome to my portfolio! I'm Samuel Negalign, a Front-End
              Developer specializing in ReactJS, Angular, and VueJS. With a
              solid foundation in Node.js and Express.js, I craft seamless web
              experiences and robust server-side applications.
            </span>
            <span class = "my-5">
              My passion lies in translating designs into intuitive,
              high-performance web solutions. Collaborating closely with
              clients, I bring ideas to life with precision and innovation.
              Let's build something amazing together!
            </span>
          </p>
        </div>
      </div>
      <svg
        width="75"
        height="75"
        viewBox="0 0 75 75"
        fill="none"
        stroke="black"
        className="i-scroll"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="scroll">
          <path
            id="Vector"
            d="M40.5 15L34.5 9L28.5 15"
            strokeWidth="3"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Vector_2"
            d="M28.5 24L34.5 30L40.5 24"
            strokeWidth="3"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g id="Group">
            <path
              id="Vector_3"
              d="M9 37.5H60"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            id="Vector_4"
            d="M34.5 27V9"
            strokeWidth="2.9895"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g id="Group_2">
            <path
              id="Vector_5"
              d="M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5859 1.5 60 12.918 60 27C60 29.8906 60 45.1094 60 48C60 62.082 48.5859 73.5 34.5 73.5C20.418 73.5 9 62.082 9 48C9 45.1094 9 29.8906 9 27Z"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </g>
      </svg>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={me} alt="" className="i-img" />
      </div>
    </div>
  );
}

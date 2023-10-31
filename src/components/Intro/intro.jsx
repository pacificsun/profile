import React from "react";

import "./intro.css";
import noFace from '../../assets/noface.png'
import { Link } from "react-scroll";

import btnImg from '../../assets/hireme.png'

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText"> I'm <span className="introName">Suraj</span><br/>
            Software Engineer
        </span> 
        <p className="introPara">I'm a CS masters student also skilled software engineer with fullstack experience</p>
        <Link>
        <button className="btn"><img src={btnImg} alt="Hireme" className="btnImg"/> Resume</button>
        </Link>
      </div>
      <img src={noFace} alt="Profile" className="bg" />
    </section>
  );
};

export default Intro;

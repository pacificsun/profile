import React from "react";

import "./intro.css";
import bg from '../../assets/image.png'
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
        <button className="btn"><img src={btnImg} alt="Hireme" className="btnImg"/>Hire me</button>
        </Link>
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  );
};

export default Intro;

import React from "react";
import { Link } from 'react-scroll'

import "./navbar.css";

import logo from '../../assets/logo.png'
import contactImg from '../../assets/contact.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo"/>
      <div className="desktopMenu">
          <Link className="desktopMenuListItem">Home</Link>
          <Link className="desktopMenuListItem">Client</Link>
          <Link className="desktopMenuListItem">About</Link>
          <Link className="desktopMenuListItem">Portfolio</Link>
      </div>
      <button className="desktopMenuBtn">
        <img src={contactImg} alt="Conatact Image" className="desktioMenuImg"/> Contact Me
      </button>
    </nav>
  );
};

export default Navbar;

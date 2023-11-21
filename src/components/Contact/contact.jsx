import React from "react";
import './contact.css'

import wallmart from '../../assets/walmart.png'
import mircorsoft from '../../assets/microsoft.png'
import facebook from '../../assets/facebook.png'
import adobe from '../../assets/adobe.png'

import fbIcon from '../../assets/facebook-icon.png'
import TwitterIcon from '../../assets/twitter.png'
import YoutubeIcon from '../../assets/youtube.png'
import InstagramIcon from '../../assets/instagram.png'

const Contact =()=>{
    return(
        <section className="contactPage">
            <div id="clients">
                <h1 className="contactPageTitle">My Clients</h1>
                <p className="cllientDesc">
                    I have had the oppurtunity to work with a diverse group of companies.

                </p>
                <div className="clientImgs">
                    <img src={wallmart} alt="client" className="clientImg"/>
                    <img src={mircorsoft} alt="client" className="clientImg"/>
                    <img src={facebook} alt="client" className="clientImg"/>
                    <img src={adobe} alt="client" className="clientImg"/>
                </div>
            </div> 
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1> 
                <span className="contactDesc">Please fill the form below to discuss any work oppurtunities.</span>
                <form className="contactForm">
                    <input type="text" className="name" placeholder="Your Name"/>
                    <input type="email" className = "email" placeholder="Your Email"/>
                    <textarea name="message" rows="5" placeholder="Your Message" className="msg"></textarea>
                    <button type="submit" className="submitBtn" value='send'>Submit</button>
                    <div className="links">
                        <img src={fbIcon} alt="link" className="link"/>
                        <img src={TwitterIcon} alt="link" className="link"/>
                        <img src={YoutubeIcon} alt="link" className="link"/>
                        <img src={InstagramIcon} alt="link" className="link"/>
                    </div>

                </form>
            </div>
        </section>
    )
}

export default Contact
import React from "react";
import './contact.css'

import wallmart from '../../assets/walmart.png'
import mircorsoft from '../../assets/microsoft.png'
import facebook from '../../assets/facebook.png'
import adobe from '../../assets/adobe.png'
const Contact =()=>{
    return(
        <section className="contactPage">
            <div id="clients">
                Client
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
            <div id="contact">Contact</div>
        </section>
    )
}

export default Contact
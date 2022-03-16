import React from 'react'
import { BsFacebook } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { MdAlternateEmail } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
function Footer() {
  return (
    <div className="myfooter-background">
    <div className="myfooter">
      
        <div className="icons-social-media">
          <span><BsFacebook/></span>
          <span><FaTwitter/></span>
          <span><FaTelegram/></span>
        </div>

          <div className="contact">
            <span className='contact-text'> CONTACT:</span>
               <div className="adress">
                 < GoLocation/>
                 <label>Adress:</label>
                 <label>Lac 1</label>
                </div> 

              <div className="email">
                < MdAlternateEmail/>
                <label>Email:</label>
                <label>tncamp@gmail.com:</label>
                </div>

               <div className="phone-number">
                  <MdLocalPhone/>
                  <label>Phone number:</label>
                  <label>+216 45690786</label>
               </div>
              </div>
              <span className="Copyright"> Copyright 2022</span></div>
              </div>
  )
}

export default Footer
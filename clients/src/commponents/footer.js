import React from 'react'
import { BsFacebook } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { MdAlternateEmail } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
function Footer() {
  return (
    <div className="myfooter_background">
    <div className="myfooter">
      
        <div className="icons-social-media">
          <span  className="icons-social"><BsFacebook/></span>
          <span className="icons-social"><FaTwitter/></span>
          <span className="icons-social"><FaTelegram/></span>
        </div>

    <div className="contact">
      <span className='contact-text'> CONTACT:</span>

       <div className="mini_group">
         <div className="icon_color">< GoLocation/></div>
        <label>Adress:</label>
        <label>Lac 1</label>
        </div> 

        <div className="mini_group">
         <div className="icon_color">< MdAlternateEmail/></div>
        <label>Email:</label>
        <label>tncamp@gmail.com:</label>
                </div>
        <div className="mini_group">
       <div className="icon_color"><MdLocalPhone/></div>
        <label>Phone number:</label>
        <label>+216 45690786</label>
          </div>
          </div></div>
      <span className="Copyright"> Copyright 2022</span>
              
      </div>
      
  )
}

export default Footer
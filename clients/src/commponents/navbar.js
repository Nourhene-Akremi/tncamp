import React from 'react'
import mylogo from '../logo.png'
import {Link} from 'react-router-dom'
function myNavBar() {
  return (
    <div>
       <img src={mylogo} alt="tunisie camping logo"/>
       <Link to='/'>
        <div className="group_home">
        <div className="icons_home"></div>
        <div className="Home">Home</div>
        </div>
        </Link>

       <Link to='/Events'>
        <div className="group_Events">
        <div className="icons_Events"></div>
        <div className="Events">Events</div>
        </div>
        </Link>
     
      < Link to='/Login'> <div className="group_Login">
        <div className="icons_Login"></div>
        <div className="Login">Login</div>
        </div>
      </Link>
     
      <Link to='/Profile'> <div className="group_Profile">
        <div className="icons_Profile"></div>
        <div className="Profile">Profile</div>
        </div>
      </Link>  

    </div>
  )
}

export default myNavBar

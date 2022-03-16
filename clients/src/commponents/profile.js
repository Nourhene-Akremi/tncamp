import React from 'react'
import MainAdmin from '../AdminComponent/mainAdmin'

function Profile() { 
  const currentUser = JSON.parse(localStorage.getItem('current_user'))
  return (
  <div>
           {currentUser.role = "guest" ?
      
        <section className="section about-section gray-bg" id="about">
            <div className="container">
                <div className="row align-items-center flex-row-reverse">
                    <div className="col-lg-6">
                        <div className="about-text go-to">
                            <h3 className="dark-color">About Me</h3>
                            <div className="row about-list">
                                <div className="col-md-6">
                                    <div className="media">
                                        <label>name</label>
                                        <p>{currentUser?.name}</p>
                                    </div>
                                    <div className="media">
                                        <label>email</label>
                                        <p>{currentUser?.email}</p>
                                    </div>
                                    <div className="media">
                                        <label>phone_number</label>
                                        <p>{currentUser?.phone_number}</p>
                                    </div>
                                    <div className="media">
                                        <label>Address</label>
                                        adress
                                         <p>{currentUser?.adress}</p>
                                    </div>
                                </div>
                                    
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-avatar">
                            <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt=""/>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
                       :<MainAdmin/> }
     
    </div>
    
   )
}

export default Profile
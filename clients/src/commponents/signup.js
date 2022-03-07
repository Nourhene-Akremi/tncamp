import React from 'react'
import {useState} from 'react'
 
function Signup() {
    
    const [photo, setPhoto]=useState('')
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [phone_number,setphone_Number]=useState('')
    const [adress,setAdress]=useState('')
    
    
  return (
    <div>
    <form method="post">
       <div className="photo">
       <input type="text" name="photo" id=""  onChange={(e)=>setPhoto(e.target.value)}/>
       </div>

       <div className="name">
       <label> Name:</label>
       <input type="text" name="name" id="" onChange={(e)=>setName(e.target.value)}/>
       </div>

       <div className="email">
       <label>Email </label>
       <input type="email" name="email" id="" onChange={(e)=>setEmail(e.target.value)}/>
        </div>

        <div className="password">      
       <label> Password</label>
       <input type="password" name="password" id="" onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        
        <div className="phone_number">
       <label>Phone_number: </label>
       <input type="text" name="phone_number" id="" onChange={(e)=>setphone_Number(e.target.value)} /></div>

       <div className="adress">
       <label> Adress</label>
       <input type="adress" name="adress" id="" onChange={(e)=>setAdress(e.target.value)}/>
       </div>
       <button type="submit"></button></form>
    </div>
  )
}

export default Signup
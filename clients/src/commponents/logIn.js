import React from 'react'
import {useDispatch} from 'react-redux'
import {useState} from 'react'
import {Link} from "react-router-dom"
import {sigIn} from "../redux/action/actions"
import {useHistory} from 'react-router-dom'


function LogIn() {

  const dispatch =useDispatch();
  const history=useHistory()
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  const sendSignIn = () =>{
    dispatch(sigIn({email,password},history))
  }


  return (
    <div className="back">
   <div className="loginFORM">
      <form method="post" name='loginForm'>

      <div className="login-box">

       <div className="login">
          <label>Email </label>
          <input type="email" name="email" id="" onChange={(e)=>setEmail(e.target.value)}/>
       </div>

      <div className="login">      
          <label>Password </label>
          <input type="password" name="password" id="" onChange={(e)=>setPassword(e.target.value)}/>
      </div>

      </div>

      <div className="btn-group-login">
       <input className='btn-login' onClick={sendSignIn}  defaultValue='SignIn'/>  
     
       <Link to="/signup" className='Signup'>Signup</Link>
       </div>

        </form>
        </div>
        </div>
        
  )
}

export default LogIn
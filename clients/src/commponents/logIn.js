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
   <div className="loginFORM">
      <form method="post" name='loginForm'>

      <div className="login">

       <div className="email">
          <label>Email </label>
          <input type="email" name="email" id="" onChange={(e)=>setEmail(e.target.value)}/>
       </div>

      <div className="password">      
          <label>Password </label>
          <input type="password" name="password" id="" onChange={(e)=>setPassword(e.target.value)}/>
      </div>

      </div>

      <div className="btn">
       <input className='btn' onClick={sendSignIn}  defaultValue='SignIn'/>  
     
       <Link to="/signup">Signup</Link>
       </div>

        </form>
        </div>
        
  )
}

export default LogIn
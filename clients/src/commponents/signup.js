import React from 'react'
import {useState} from 'react'
 import {useDispatch} from 'react-redux'
 import {signUp} from '../redux/action/actions'
 import {Form} from 'react-bootstrap'
function Signup() {
    
  const dispatch =useDispatch();
    const [photo, setPhoto]=useState('')
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [phone_number,setphone_Number]=useState('')
    const [adress,setAdress]=useState('')
    
    const sendsignUp = () =>{
      dispatch(signUp({photo, name, email, password, phone_number,adress}))
    }
    
  return (
<Form className='signup_form'>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Name </Form.Label>
    <Form.Control type="text" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)} /> 
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Phone_number </Form.Label>
    <Form.Control type="text" placeholder="Enter Phone_number" onChange={(e)=>setphone_Number(e.target.value)} /> 
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Adress </Form.Label>
    <Form.Control type="text" placeholder="Enter Adress" onChange={(e)=>setAdress(e.target.value)} /> 
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email </Form.Label>
    <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} /> 
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password"  onChange={(e)=>setPassword(e.target.value)}/>
  </Form.Group>
  <input className='btn_signup' onClick={sendsignUp}  defaultValue='Sign Up' />
  
  
</Form>



  )
}



export default Signup
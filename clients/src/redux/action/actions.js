import {LOGIN,SIGNUP,CURRENT} from "../actionType/action-type"
import axios from 'axios'

export const sigIn =(data,history)=>async(dispatch)=>{
    try {
        const user =await axios.post('http://localhost:7000/sigin',data)
        console.log(user)
        dispatch({
          type:LOGIN,
          payload:user.data
        })
        dispatch(current(user.data.token,history))
    } catch (error) {
        console.log(error)
    }
}

export const signUp =(data)=>async(dispatch)=>{
    try {
        const user =await axios.post('http://localhost:7000/signup',data)
        dispatch({
          type:SIGNUP,
          payload:user.data
        }
            )
    } catch (error) {
        console.log(error)
    }
}

export const current =(token,history)=>async(dispatch)=>{
   
    const config={
        headers:{authorization:token}}
    try {
        const user =await axios.get('http://localhost:7000/current',config)
        dispatch({
          type:CURRENT,
          payload:user.data
        })
        localStorage.setItem('current_user',JSON.stringify(user.data))
         history.push('./profile')
    } catch (error) {
        console.log(error)
    }
}


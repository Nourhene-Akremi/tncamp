import {ADDEVENT,GETEVENT} from '../actionType/action-type'
import axios from 'axios'

export const  eventsAdd =(data)=>async(dispatch)=>{
    try {
        const event =await axios.post('http://localhost:7000/event',data)
        dispatch({
          type:ADDEVENT,
          payload:event.data
        }
            )
    } catch (error) {
        console.log(error)
    }
}
export const  getEvents =(data)=>async(dispatch)=>{
    try {
        const event =await axios.get('http://localhost:7000/getevents',data)
        dispatch({
          type:GETEVENT,
          payload:event.data
        }
            )
    } catch (error) {
        console.log(error)
    }
}
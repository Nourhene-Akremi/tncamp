import React from 'react'
import {useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {eventsAdd} from '../redux/action/eventsAction' 
import {useHistory} from 'react-router-dom'
function AddEvents() {
    const dispatch = useDispatch();
    const [photo,setPhoto ]=useState('')
    const [eventName,setEventName ]=useState('')
    const [startDate,setStartDate ]=useState('')
    const [endDate,setEndDate ]=useState('')
    const [charges,setCharges ]=useState(0)
    const [plant,setPlant ]=useState('')
    
    const history = useHistory()
    const msg = useSelector(state => state.EventReducer.event.message)
    const CreateEvents = () =>{
        dispatch(eventsAdd({photo,eventName,startDate,endDate,charges,plant}))
        if(msg == 'events added with success'){
          alert(msg)
          history.push('/')
        }else{
          alert(msg)
        }
      }
      

     
    return (
    <form method="post">
       <div className="photo">
       <input type="text" name="photo"   onChange={(e)=>setPhoto(e.target.value)}/>
       <input type="text" name="setEventName"   onChange={(e)=>setEventName(e.target.value)}/>
       <input type="Date" name="setStartDate"   onChange={(e)=>setStartDate(e.target.value)}/>
       <input type="Date" name="setEndDate"   onChange={(e)=>setEndDate(e.target.value)}/>
       <input type="Number" name="setCharges"   onChange={(e)=>setCharges(e.target.value)}/>
       <input type="text" name="setPlant"   onChange={(e)=>setPlant(e.target.value)}/>
       </div>
       <input className='btn' onClick={CreateEvents}  defaultValue='Create Events' />
       </form>
  )
}

export default AddEvents
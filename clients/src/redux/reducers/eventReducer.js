import {ADDEVENT,GETEVENT} from '../actionType/action-type'

const initialEventState={
    event:{},
    getEvent:{}
}

const eventReducer=(state=initialEventState,action)=>{
    switch (action.type) {
        case ADDEVENT:return{
            ...state,
            event:action.payload
        }   
        case GETEVENT:return{
            ...state,
            event:action.payload
        }      
        default:return state        
    }
}
export default eventReducer
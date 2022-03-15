import {LOGIN,CURRENT,SIGNUP} from "../actionType/action-type"

const initialState={
    user:{},
    currentUser:{}
}

const UserReducer=(state=initialState,action)=>{
    switch (action.type) {

        case LOGIN:return{
           ...state,
           user:action.payload
        }

        case SIGNUP:return{
           ...state,
           user:action.payload
        }

        case CURRENT:return{
           ...state,
           currentUser:action.payload
        }
        default: return state
       
    }
}

export default UserReducer
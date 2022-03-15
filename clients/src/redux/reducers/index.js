import { combineReducers } from "redux";
import  UserReducer  from "./reducer";
import  EventReducer  from "./eventReducer";

const rootReducer=combineReducers({UserReducer,EventReducer})
export default rootReducer
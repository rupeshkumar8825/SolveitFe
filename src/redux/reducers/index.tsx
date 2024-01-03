import { combineReducers } from "redux";    
import authReducer from "./AuthReducer";
// combining all the reducers into a single 
export default combineReducers ({
   authReducer
});
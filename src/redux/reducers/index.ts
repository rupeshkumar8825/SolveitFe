import { combineReducers } from "redux";    
import authReducer from "./AuthReducer";
import { ideaListReducer } from "./IdeaReducer";
// combining all the reducers into a single 
export default combineReducers ({
   authReducer, 
   ideaListReducer, 
});
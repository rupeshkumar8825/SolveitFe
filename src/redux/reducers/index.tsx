import { combineReducers } from "redux";
import authReducer from "./AuthReducers";
import { projectReducer } from "./ProjectReducers";
import { userReducer } from "./UserReducers";
import { getUserReducer } from "./UserReducers";
import { metadataReducer } from "./SqmReducers";
import { sqmReducer } from "./SqmReducers";

// combining all the reducers into a single 
export default combineReducers ({
    authReducer, 
    projectReducer, 
    userReducer, 
    getUserReducer, 
    metadataReducer, 
    sqmReducer
});
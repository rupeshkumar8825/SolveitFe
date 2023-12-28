import { IAuthState } from "../../interfaces/AuthRelatedInterfaces";


const initialState : IAuthState = {
    userId : null,
    email : null,
    isLoggedIn: true, 
};


// making the reducer for the authentication related 
export default function authReducer(state = initialState, actions : any)
{
    switch(actions.type)
    {
        case 'LOGIN':
            console.log("CAME FOR LOGIN REDUCER ACTION\n\n");
            return {
                userId : actions.payload.userId,
                email : actions.payload.email,
                isLoggedIn : true, 
            }  
        case 'LOGOUT':
            console.log("CAME FOR LOGOUT REDUCER ACTION\n");
            return {
                userId : null, 
                email : null, 
                isLoggedIn : false, 
            }            
        default:
            return state;
    }
    

}
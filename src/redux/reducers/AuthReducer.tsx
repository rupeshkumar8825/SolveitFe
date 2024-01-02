import { IAuthState } from "../../interfaces/AuthRelatedInterfaces";

// this is the reducer for the authentication purpose that is to store the details of the user for this purpose 
const initialState : IAuthState = {
    userId : null, 
    email : null, 
    isLoggedIn : false
}


// here implementing the reducer for this purpose 
export default function authReducer (state = initialState, actions : any)
{
    // using the switch case statements for determining the actions for this purpose 
    switch(actions.type)
    {
        case 'LOGIN':
            console.log("CAME FOR LOGIN REDUCER\n");
            return {
                userId : actions.payload.userId, 
                email : actions.payload.email, 
                isLoggedIn : true,
            }
        case 'LOGOUT':
            console.log("CAME FOR LOGOUT REDUCER\n");
            return {
                userId : null, 
                email : null, 
                isLoggedIn : false
            }
        default:
            return state;
    }
}

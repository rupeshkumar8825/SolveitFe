import { IAuthState } from "../../interfaces/AuthRelatedInterfaces";

const initialState : IAuthState = {
    userId : null, 
    email : null, 
    isLoggedIn : true
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

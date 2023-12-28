import { IUserDetails, IUserFullDetails } from "../../interfaces/UserRelatedInterfaces";

// here comes the reducers related to the users 
const initialState : Array<IUserDetails> = [];
const getUserInitialState : IUserFullDetails = {
    userId : "", 
    userName : "", 
    email : "", 
    division : "", 
    listOfProjects : []
}

export const userReducer = (state = initialState, actions : any) => {
    switch (actions.type)
    {
        case "FETCH_USERS_LIST":
            return state = actions.payload;
        default: 
            return state;
    }
}


export const getUserReducer = (state = getUserInitialState, actions : any) =>
{
    switch(actions.type)
    {
        case 'FETCH_USER_DETAILS_BY_ID':
            return state = actions.payload
        default : 
            return state;
    }
}

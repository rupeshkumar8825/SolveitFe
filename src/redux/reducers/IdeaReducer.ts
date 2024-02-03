import { IdeaConstants } from '../../constants/IdeaRelatedConstants';
import { IdeaDetails } from '../../interfaces/IdeaRelatedInterfaces';

// this is the reducer related to the idea section for this purpose 
const initialState :  IdeaDetails[] = [];

const ideaListReducer = (state = initialState, actions : any) => {
    // using the switch case statements here
    switch (actions.type) {
        case IdeaConstants.GET_IDEA_LIST:
            return actions.payload;
        case IdeaConstants.CREATE_IDEA:
            // write the code logic here for creating a new idea 
            return actions.payload;
        case IdeaConstants.UPDATE_IDEA:
            // write the code logic here for updating an existing idea
            return actions.payload;
        case IdeaConstants.DELETE_IDEA:
            // write the code logic here for deleting an existing idea
            return actions.payload;
        default:
            return state;
    }
}


export {
    ideaListReducer
}
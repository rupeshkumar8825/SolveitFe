import { IProjectDetailsInterface, ITeamMember } from "../../interfaces/ProjectRelatedInterfaces";

const initialState : Array<IProjectDetailsInterface> = []


export const projectReducer = (state = initialState, actions : any) => {
    switch(actions.type)
    {
        case 'FETCH_PROJECT_LIST':
            return state = actions.payload;
        // case 'FETCH_PROJECT_DETAIL':
        //     let currProjectDetails : IProjectDetailsInterface = state[0];
        //     let isProject  : boolean= false;
        //     state.forEach(currProject => {
        //         if(currProject.projId === actions.payload.projId)
        //         {
        //             currProjectDetails = currProject;
        //             isProject = true;
                    
        //         }
        //     });
            // return isProject? currProjectDetails : null;    
        case "INSERT_NEW_PROJECT":
            return [...state, actions.payload];
        case "ADD_TEAM_MEMBER":
            let newState = state.map((currProjDetails, index) => {
                if(currProjDetails.projId === actions.payload.projId)
                {
                    return {...currProjDetails, teamMembers : actions.payload.updatedProjectTeamMembers};
                }

                return currProjDetails;
            })
            return newState;
        case "REMOVE_TEAM_MEMBER":
            let newStateAfterRemove = state.map((currProjDetails) => {
                if(currProjDetails.projId === actions.payload.projId)
                {
                    return {...currProjDetails, teamMembers : actions.payload.teamMembers};
                }

                return currProjDetails;
            });

            // say everything went fine 
            return newStateAfterRemove;
        default: 
            return state;
    }
}
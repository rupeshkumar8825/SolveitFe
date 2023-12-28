import { IMetadataDetails, ISqmDetails } from "../../interfaces/SqmRelatedInterfaces"

const metadataInitial : IMetadataDetails = {
    metaId : "", 
    sqr : "", 
    sqmFilledBy : "", 
    sqmApprovedBy : "", 
    branch : "", 
    repoLink : "", 
    commitId : "", 
    otherInfo : ""
}



const sqmInitialState : Array<ISqmDetails> = []



export const metadataReducer = (state = metadataInitial, actions : any) => {
    switch(actions.type)
    {
        case "FETCH_METADATA":
            return state = actions.payload;
        default: 
            return state;
    }

}


export const sqmReducer = (state = sqmInitialState, actions : any) =>
{
    switch(actions.type)
    {
        case "FETCH_SQM":
            return state = actions.payload;
        default:
            return state;
    }
}

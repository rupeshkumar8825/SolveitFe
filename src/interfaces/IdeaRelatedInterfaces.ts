// here we  will write the interfaces related to the idea for this purpose 
export interface IUpvote {
    _id : string
}


export interface IShare {
    _id : string
}


export interface IIdeaDetails {
    _id : string,
    ideaName : string, 
    ideaDescription : string, 
    createdOn : string,
    createdBy : string, 
    category : string, 
    rating : number, 
    thumbnail : string, 
    saved : string[],  
    upvotes : IUpvote[], 
    shared : IShare[], 
    othersKnow : string 
}


export interface IUploadNewIdea {
    ideaName : string, 
    ideaDescription : string, 
    createdBy : string, 
    rating : number, 
    thumbnail : File, 
    othersKnow : string,
    category : string, 
}

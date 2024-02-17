// here we  will write the interfaces related to the idea for this purpose 
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
    upvotes : string[], 
    shared : string[], 
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

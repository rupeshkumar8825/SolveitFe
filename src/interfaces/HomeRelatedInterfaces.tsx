import React from "react";

// here we will add the interfaces which will be used for the home page 
export interface IIdeaCard {
    id : string, 
    ideaTitle : string, 
    ideaDescription : string, 
    views : number,
    upvotes : number, 
    shares : number, 
}

export interface IIdeaCardProps {
    id : string, 
    ideaTitle : string, 
    ideaDescription : string, 
    upvotes : number, 
    shares : number, 
    thumbnail : string,
    onShowDetailsHandler() : void, 
    onUpvoteIdeaHandler () : void, 
    onShareIdeaHandler () : void, 
    onCommentHandler () : void
}
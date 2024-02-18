import React from "react";
import { IShare, IUpvote } from "./IdeaRelatedInterfaces";

// here we will add the interfaces which will be used for the home page 
export interface IIdeaCard {
    id : string, 
    ideaTitle : string, 
    ideaDescription : string, 
    views : number,
    upvotes : IUpvote[], 
    shares : IShare[], 
}

export interface IIdeaCardProps {
    id : string, 
    ideaTitle : string, 
    ideaDescription : string, 
    upvotes : IUpvote[], 
    shares : IShare[], 
    thumbnail : string,
}
import React from "react";

// here we will add the interfaces which will be used for the home page 
export interface IIdeaCard {
    id : string, 
    ideaTitle : string, 
    ideaDescription : string, 
    views : number,
    upvotes : string[], 
    shares : number, 
}

export interface IIdeaCardProps {
    id : string, 
    ideaTitle : string, 
    ideaDescription : string, 
    upvotes : string[], 
    shares : number, 
    thumbnail : string,
}
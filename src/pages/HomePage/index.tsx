// this is home page 
// this is project page component
import { Box, Toolbar, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
// import IdeaCard from "./components/IdeaCard";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import IdeaCard from "./components/IdeaCard"
import { IIdeaCard } from "../../interfaces/HomeRelatedInterfaces";
import { IIdeaDetails } from "../../interfaces/IdeaRelatedInterfaces";
import { ideaListReducer } from "../../redux/reducers/IdeaReducer";


  
// making the dummy value data for the ideacard that we get from the backend for this purpose 
const HomePage = () => {
    const listOfIdeas : IIdeaDetails[] = useSelector((state : any) => state.ideaListReducer);

    const navigate = useNavigate();

    // defining the here the handlers for this component for this purpose 
    const onCommentHandler = (ideaId : string) => {
        console.log("the user has shown interest to do the comment for this purpose \n", ideaId);
    }

    const onShareIdeaHandler = (ideaId : string) => {
        console.log("the user is sharing this idea to other platforms also for this purpose \n", ideaId);
    } 

    const onShowDetailsHandler = (ideaId : string) => {
        console.log("The user has clicked the show details page for this purpose\n", ideaId);
        // here we have route to the correct path to show the details of the project for this purpose 
        navigate(`/ideaDetails/${ideaId}`);
        
    }

    const onUpvoteIdeaHandler = (ideaId : string) => {
        console.log("The user has upvoted the idea for this purpose \n", ideaId);
    }


    useEffect(() => {
      // write your code here 
      if(listOfIdeas)
      {
        console.log("the list of ideas is as follows\n", listOfIdeas);
        
      }
      return () => {
        // write cleanup code here 
      }
    }, [listOfIdeas])
    
  
  return (
    <>
      {/* defining the container for showing the main content on the website  */}
      <Box sx={{display: "flex", justifyContent: 'space-evenly', flexWrap : "wrap",alignItems: 'center', mt: `10%`, width: `80%`, marginLeft: `16%`, paddingLeft:0, paddingRight:0, marginBottom: "4%"}}>
        {/* using the map function to show all the list of ideas for this purpose  */}
        {listOfIdeas?.map((currentIdea : IIdeaDetails) => {
            return <IdeaCard  id={currentIdea._id} ideaTitle={currentIdea.ideaName} ideaDescription={currentIdea.ideaDescription}upvotes={currentIdea.upvotes.length} shares={currentIdea.shared.length} onCommentHandler={() => onCommentHandler(currentIdea._id)} onShareIdeaHandler={() => onShareIdeaHandler(currentIdea._id)} onShowDetailsHandler={() => onShowDetailsHandler(currentIdea._id)} onUpvoteIdeaHandler={() => onUpvoteIdeaHandler(currentIdea._id)}></IdeaCard>
        })}
      </Box>
    </>
  );
};

export default HomePage;

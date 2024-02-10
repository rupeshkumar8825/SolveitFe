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


  
const HomePage = () => {
    const listOfIdeas : IIdeaDetails[] = useSelector((state : any) => state.ideaListReducer);

    const navigate = useNavigate();

    //handlers for this component
    const onCommentHandler = (ideaId : string) => {
    }

    const onShareIdeaHandler = (ideaId : string) => {
    } 

    const onShowDetailsHandler = (ideaId : string) => {
        navigate(`/ideaDetails/${ideaId}`);
        
    }

    const onUpvoteIdeaHandler = (ideaId : string) => {
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

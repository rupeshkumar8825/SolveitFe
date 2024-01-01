// this is home page 
// this is project page component
import { Box, Toolbar, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
// import IdeaCard from "./components/IdeaCard";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import IdeaCard from "./components/IdeaCard"
import { IIdeaCard } from "../../interfaces/HomeRelatedInterfaces";



// defining the dummy data for the idea cards for this purpose 
const dummyIdeaCardList : IIdeaCard[]= [
    {
        id : "1",
      ideaTitle : "Idea1", 
      ideaDescription : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur ut vero alias omnis dolorum voluptas quibusdam sed commodi suscipit beatae illum quae, eaque repellat dolor earum provident, tempora quam. ObcaecatiReiciendis autem natus dolor quidem culpa repudiandae facere debitis eos deleniti dolorem voluptas, aut magnam dignissimos at officiis mollitia fuga iusto eius quos! Cum soluta, quis nesciunt necessitatibus magnam pariatur!Nisi praesentium molestiae minima dignissimos, nihil veritatis obcaecati voluptatibus sapiente totam, atque eius numquam quod iste a quasi, voluptas distinctio laborum! Error nostrum animi cumque, reiciendis provident molestiae ducimus beatae.", 
      views : 100, 
      upvotes : 200, 
      shares : 20, 
    }, 
    {
        id : "2", 
      ideaTitle : "Idea2",
      ideaDescription : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur ut vero alias omnis dolorum voluptas quibusdam sed commodi suscipit beatae illum quae, eaque repellat dolor earum provident, tempora quam. ObcaecatiReiciendis autem natus dolor quidem culpa repudiandae facere debitis eos deleniti dolorem voluptas, aut magnam dignissimos at officiis mollitia fuga iusto eius quos! Cum soluta, quis nesciunt necessitatibus magnam pariatur!Nisi praesentium molestiae minima dignissimos, nihil veritatis obcaecati voluptatibus sapiente totam, atque eius numquam quod iste a quasi, voluptas distinctio laborum! Error nostrum animi cumque, reiciendis provident molestiae ducimus beatae.", 
      views : 10, 
      upvotes : 20, 
      shares : 5, 
    }, 
    {
        id : "3", 
      ideaTitle : "Idea3", 
      ideaDescription : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur ut vero alias omnis dolorum voluptas quibusdam sed commodi suscipit beatae illum quae, eaque repellat dolor earum provident, tempora quam. ObcaecatiReiciendis autem natus dolor quidem culpa repudiandae facere debitis eos deleniti dolorem voluptas, aut magnam dignissimos at officiis mollitia fuga iusto eius quos! Cum soluta, quis nesciunt necessitatibus magnam pariatur!Nisi praesentium molestiae minima dignissimos, nihil veritatis obcaecati voluptatibus sapiente totam, atque eius numquam quod iste a quasi, voluptas distinctio laborum! Error nostrum animi cumque, reiciendis provident molestiae ducimus beatae.", 
      views : 60, 
      upvotes : 250, 
      shares : 20, 
    }, 
    {
        id : "4", 
      ideaTitle : "Idea4", 
      ideaDescription : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur ut vero alias omnis dolorum voluptas quibusdam sed commodi suscipit beatae illum quae, eaque repellat dolor earum provident, tempora quam. ObcaecatiReiciendis autem natus dolor quidem culpa repudiandae facere debitis eos deleniti dolorem voluptas, aut magnam dignissimos at officiis mollitia fuga iusto eius quos! Cum soluta, quis nesciunt necessitatibus magnam pariatur!Nisi praesentium molestiae minima dignissimos, nihil veritatis obcaecati voluptatibus sapiente totam, atque eius numquam quod iste a quasi, voluptas distinctio laborum! Error nostrum animi cumque, reiciendis provident molestiae ducimus beatae.", 
      views : 100, 
      upvotes : 200, 
      shares : 20, 
    }, 
    
  ]

  
// making the dummy value data for the ideacard that we get from the backend for this purpose 
const HomePage = () => {

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

  
  return (
    <>
      {/* defining the container for showing the main content on the website  */}
      <Box sx={{display: "flex", justifyContent: 'space-evenly', flexWrap : "wrap",alignItems: 'center', mt: `10%`, width: `80%`, marginLeft: `16%`, paddingLeft:0, paddingRight:0, marginBottom: "4%"}}>
        {/* using the map function to show all the list of ideas for this purpose  */}
        {dummyIdeaCardList.map((currentIdea : IIdeaCard) => {
            return <IdeaCard  id={currentIdea.id} ideaTitle={currentIdea.ideaTitle} ideaDescription={currentIdea.ideaDescription} views={currentIdea.views} upvotes={currentIdea.upvotes} shares={currentIdea.shares} onCommentHandler={() => onCommentHandler(currentIdea.id)} onShareIdeaHandler={() => onShareIdeaHandler(currentIdea.id)} onShowDetailsHandler={() => onShowDetailsHandler(currentIdea.id)} onUpvoteIdeaHandler={() => onUpvoteIdeaHandler(currentIdea.id)}></IdeaCard>
        })}
      </Box>
    </>
  );
};

export default HomePage;

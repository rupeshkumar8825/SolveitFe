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
import { getAllIdeasApi, getIdeaThumbnailApi } from "../../apis/IdeasRelatedApis";
import { IdeaConstants } from "../../constants/IdeaRelatedConstants";


  
const HomePage = () => {
    const [listOfIdeas, setListOfIdeas] = useState<Array<IIdeaDetails>>([]);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    
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


    
    const  getAllIdeasApiCallback = (resultType : string, serverResponse : any) => {
      if(serverResponse.response?.status && serverResponse.response.status === 500)
      {
        // do nothing for now 			
      }
      else if(serverResponse.response?.status && serverResponse.response.status === 401)
      {
        dispatch({type : "LOGOUT"});
      }
      else if(serverResponse.response?.status && serverResponse.response.status === 403)
      {
        // do nothing 
      }
      else if(serverResponse.status === 200)
      {
        const responseData = serverResponse.data;
        const payload : IIdeaDetails[] = responseData.data;
        setListOfIdeas(payload);
        dispatch({type : IdeaConstants.GET_IDEA_LIST, payload : payload});
      }
    }


    const getIdeaThumbnailCallback = (resultType : string, serverResponse : any) => {
      console.log("the response from the server is as follows \n", serverResponse);
    }
  


    useEffect(() => {
      getAllIdeasApi(getAllIdeasApiCallback)
      // getIdeaThumbnailApi(getIdeaThumbnailCallback);
    },[])
    


  
  return (
    <>
      {/* defining the container for showing the main content on the website  */}
      <Box sx={{display: "flex", justifyContent: 'space-evenly', flexWrap : "wrap",alignItems: 'center', mt: `10%`, width: `80%`, marginLeft: `16%`, paddingLeft:0, paddingRight:0, marginBottom: "4%"}}>
        {/* using the map function to show all the list of ideas for this purpose  */}
        {listOfIdeas?.map((currentIdea : IIdeaDetails) => {
            return <IdeaCard  id={currentIdea._id} ideaTitle={currentIdea.ideaName} ideaDescription={currentIdea.ideaDescription}upvotes={currentIdea.upvotes.length} shares={currentIdea.shared.length} thumbnail={currentIdea.thumbnail} onCommentHandler={() => onCommentHandler(currentIdea._id)} onShareIdeaHandler={() => onShareIdeaHandler(currentIdea._id)} onShowDetailsHandler={() => onShowDetailsHandler(currentIdea._id)} onUpvoteIdeaHandler={() => onUpvoteIdeaHandler(currentIdea._id)}></IdeaCard>
        })}
      </Box>
    </>
  );
};

export default HomePage;

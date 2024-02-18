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




    useEffect(() => {
      getAllIdeasApi(getAllIdeasApiCallback)
    },[])
    


  
  return (
    <>
      {/* defining the container for showing the main content on the website  */}
      <Box sx={{display: "flex", justifyContent: 'space-evenly', flexWrap : "wrap",alignItems: 'center', mt: `10%`, width: `80%`, marginLeft: `16%`, paddingLeft:0, paddingRight:0, marginBottom: "4%"}}>
        {/* using the map function to show all the list of ideas for this purpose  */}
        {listOfIdeas?.map((currentIdea : IIdeaDetails) => {
            return <IdeaCard  id={currentIdea._id} ideaTitle={currentIdea.ideaName} ideaDescription={currentIdea.ideaDescription} upvotes={currentIdea.upvotes} shares={currentIdea.shared} thumbnail={currentIdea.thumbnail}></IdeaCard>
        })}
      </Box>
    </>
  );
};

export default HomePage;

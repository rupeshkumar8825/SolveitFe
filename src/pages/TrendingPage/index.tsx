import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import IdeaCard from "../HomePage/components/IdeaCard";
import { IIdeaDetails } from "../../interfaces/IdeaRelatedInterfaces";

const TrendingPage = () => {

    const listOfIdeas : IIdeaDetails[]= useSelector((state : any) => state.ideaListReducer);
    const [trendingIdeasList, setTrendingIdeasList] = useState<IIdeaDetails[]>([]);

    useEffect(() => {
        if(listOfIdeas)
        {
            const currTrendingIdeas = listOfIdeas.sort((a, b) => b.upvotes.length - a.upvotes.length);
            setTrendingIdeasList(currTrendingIdeas);
            
        }
    }, [listOfIdeas])

    return (
        <Box sx={{display: "flex", justifyContent: 'space-evenly', flexWrap : "wrap",alignItems: 'center', mt: `10%`, width: `80%`, marginLeft: `16%`, paddingLeft:0, paddingRight:0, marginBottom: "4%"}}>
        {trendingIdeasList?.map((currentIdea : IIdeaDetails) => {
            return <IdeaCard  id={currentIdea._id} ideaTitle={currentIdea.ideaName} ideaDescription={currentIdea.ideaDescription} upvotes={currentIdea.upvotes} shares={currentIdea.shared} thumbnail={currentIdea.thumbnail}></IdeaCard>
        })}
      </Box>
    )
}


export default TrendingPage;
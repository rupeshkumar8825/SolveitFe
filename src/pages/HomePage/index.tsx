// this is home page 
// this is project page component
import { Box, Toolbar, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
// import IdeaCard from "./components/IdeaCard";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";






const HomePage = () => {
  


  return (
    <>
      {/* defining the container for showing the main content on the website  */}
      <Box sx={{display: "flex", justifyContent: 'space-evenly', flexWrap : "wrap",alignItems: 'center', mt: `10%`, width: `80%`, marginLeft: `16%`, paddingLeft:0, paddingRight:0, marginBottom: "4%"}}>

          
      </Box>
    </>
  );
};

export default HomePage;

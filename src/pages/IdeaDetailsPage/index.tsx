import { Box, Button, Card, CardActions, CardContent, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ButtonPair from "../../components/buttonPair";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ShareIcon from '@mui/icons-material/Share';
import imageThumbnail from "../../assets/thumb1.png";
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import FileDownloadDoneIcon from '@mui/icons-material/FileDownloadDone';
import { useDispatch, useSelector } from "react-redux";
import { getIdeaDetailsByIdApi, removeUpvoteOfIdeaByIdApi, upvoteIdeaByIdApi } from "../../apis/IdeasRelatedApis";
import { IIdeaDetails } from "../../interfaces/IdeaRelatedInterfaces";
import { IAuthState } from "../../interfaces/AuthRelatedInterfaces";


const IdeaDetailsPage = () => {
    const loggedInUserDetails : IAuthState = useSelector((state : any) => state.authReducer);

    const ideaId = useParams().ideaId;
    const [upvoted, setUpvoted] = useState<boolean>(false);
    const [shared, setShared] = useState<boolean>(false);
    const [addedToWatchList, setAddedToWatchList] = useState<boolean>(false);
  const [totalNumberOfUpvotes, setTotalNumberOfUpvotes] = useState<number>(0);
  const [ideaDetails, setIdeaDetails] = useState<IIdeaDetails>();


    const dispatch = useDispatch();

    // handler for the component for this purpose 
    const onUpvoteClickIdeaHandler = () => {
        if(upvoted)
        {
          removeUpvoteOfIdeaByIdApi(ideaId as string, removeUpvoteOfIdeaByIdApiCallback);
          setTotalNumberOfUpvotes(totalNumberOfUpvotes-1);
          setUpvoted(false);
          
        }
        else
        {
          // this means that we upvoting the idea hence we have to call the backend api for this purpose 
          upvoteIdeaByIdApi(ideaId as string, upvoteIdeaByIdApiCallback);
          setTotalNumberOfUpvotes(totalNumberOfUpvotes+1);
          setUpvoted(true);
        }
       
    
        
      }

    const onShareIdeaHandler = () => {
        console.log("the user is sharing the idea on social media may be for this purpose \n");
    }

    const onCommentHandler = () => {
        console.log("the user wants to read the comments of the current idea for this purpose \n");
    }

    
    const onAddToWatchListHandler  = () => {
        console.log("The user is either changing his decision to add this to watchlist or to remove from the watchlist for this purpose \n");
        // here we have to toggle again for this purpose 
        (addedToWatchList==false)? setAddedToWatchList(true) : setAddedToWatchList(false);

    }


    // callbacks for the application comes here for this purpose 
  const removeUpvoteOfIdeaByIdApiCallback = (resultType : string, serverResponse : any) => {
    console.log("the value of the serverresponse after removing the upvote is as follows", serverResponse);
  }
  

  const upvoteIdeaByIdApiCallback = (resultType : string, serverResponse : any) => {
    console.log("the value of the serverresponse after the upvote is as follows", serverResponse);
  }


    // callbacks comes here after hitting the apis to the backend 
    const getIdeaDetailsByIdApiCallback = (resultType : string, serverResponse : any) => {
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
			const responseData = serverResponse.data.data;
            setIdeaDetails(responseData);
		}
    }


    useEffect(() => {
    //   write your code here 
        if(ideaId)
        {
            getIdeaDetailsByIdApi(ideaId as string, getIdeaDetailsByIdApiCallback)

        }
      return () => {
        // write cleanup code here if any for this purpose 
      }
    }, [ideaId])



    useEffect(() => {
        if(loggedInUserDetails && ideaDetails) 
        {
          let isPresent = ideaDetails.upvotes.find(currUser => currUser._id === loggedInUserDetails.userId);
          if(!isPresent)
          {
            setUpvoted(false);
    
          }
          else
          {
            setUpvoted(true);
          }
          setTotalNumberOfUpvotes(ideaDetails.upvotes.length);
    
        }
      }, [loggedInUserDetails, ideaDetails])


    return (
        <>
        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: 'center', alignItems: 'center', mt: `10%`, width: `83%`, marginLeft: `16%`, paddingLeft: 0, paddingRight: 0, marginBottom: "4%"}}>
            

            {/* box for a field for username  */}
            <Card sx={{width: "70%",  marginBottom: "3%", boxShadow: "7", borderRadius: "1%"}}>
                <Box 
                    component="span"
                    sx={{
                    display : "flex", 
                    justifyContent: "space-between",
                    alignItems : "center",
                    flexGrow: 1,
                    borderColor : "red",
                    bgcolor: "background.default",
                    padding:1, 
                    height: "50px",
                    marginBottom : "0.5%",
                    // marginTop : "25
                    // border : 2 
                    }}
                    >
                    <Typography  sx={{padding: 0, fontWeight: "bold", fontSize : "1.2rem"}}> {ideaDetails?.ideaName} </Typography>
                    {addedToWatchList? <FileDownloadDoneIcon onClick={onAddToWatchListHandler} style={{height: "30px", width : "30px", color : "blue"}}></FileDownloadDoneIcon> : <ControlPointIcon onClick={onAddToWatchListHandler} style={{height: "30px", width : "30px"}}></ControlPointIcon>}
                </Box>
                
                <CardContent sx={{marginBottom : "1%", width : "100%", display : "flex", justifyContent : "center", alignItems : "center", flexDirection : 'column'}}>
                    <Typography variant="body2" color="text.secondary" sx={{width : "90%"}}>
                    {ideaDetails?.ideaDescription}
                    </Typography>
                    <img  src={`http://localhost:4004/${ideaDetails?.thumbnail}`}  alt={"Loading"} style={{ height : "300px",width : "600px",  border : "4px", padding: "2%", borderColor : "black", marginTop: "2%"}} />

                    {/* <h1>what is happening here i dont know for this puropse </h1> */}

                    <Typography sx={{border : 0.5, borderColor : "lightblue", marginTop : "3%"}}></Typography>
                </CardContent>
                <CardActions disableSpacing>
                    
                    <Box
                    component="main"
                    sx={{
                    display : "flex", 
                    justifyContent : "space-around", 
                    alignItems : "center",
                    flexGrow: 1,
                    bgcolor: "background.default",
                    width: ``,
                    padding:0,
                    marginTop : "2%"
                    }}
                    >
                    <Box
                    component="main"
                    sx={{
                        display : "flex", 
                        justifyContent : "center", 
                        alignItems : "center",
                        flexGrow: 1,
                        bgcolor: "background.default",
                        width: ``,
                        padding:0,
                        // border : 2, 
                    }}
                    >
                        <RemoveRedEyeIcon></RemoveRedEyeIcon>
                        <Typography sx={{marginLeft : "15px"}}>
                        100 views 
                        </Typography>
                    </Box>
                    <Box
                    component="main"
                    sx={{
                        display : "flex", 
                        justifyContent : "center", 
                        alignItems : "center",
                        flexGrow: 1,
                        bgcolor: "background.default",
                        width: ``,
                        padding:0,
                        // border : 2, 
                    }}
                    >
                        {upvoted? <ThumbUpIcon style={{color : "blue"}}/> : <ThumbUpIcon/>}
                        <Typography onClick={onUpvoteClickIdeaHandler}  sx={{marginLeft : "15px"}}>
                        {totalNumberOfUpvotes} Upvotes 
                        </Typography>
                    </Box>
                    
                    <Box
                    component="main"
                    sx={{
                        display : "flex", 
                        justifyContent : "center", 
                        alignItems : "center",
                        flexGrow: 1,
                        bgcolor: "background.default",
                        width: ``,
                        padding:0,
                        // border : 2, 
                    }}
                    >
                        <ShareIcon></ShareIcon>
                        <Typography onClick={onShareIdeaHandler}  sx={{marginLeft : "15px"}}>
                        {ideaDetails?.shared.length} Share 
                        </Typography>
                    </Box>

                    <Box
                    component="main"
                    sx={{
                        display : "flex", 
                        justifyContent : "center", 
                        alignItems : "center",
                        flexGrow: 1,
                        bgcolor: "background.default",
                        width: ``,
                        padding:0,
                    }}
                    >
                        <CommentIcon></CommentIcon>
                        <Typography onClick={onCommentHandler}  sx={{marginLeft : "15px"}}>
                        Comments
                        </Typography>
                    </Box>
                    
                    

                    </Box>
                
                </CardActions>
                
            </Card>

            
            
        </Box>
    </>

    )
}


export default IdeaDetailsPage;
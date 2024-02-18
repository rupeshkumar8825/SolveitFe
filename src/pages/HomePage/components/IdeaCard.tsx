// this is card component 
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, Button, Typography } from '@mui/material';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import { IIdeaCardProps } from '../../../interfaces/HomeRelatedInterfaces';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeUpvoteOfIdeaByIdApi, upvoteIdeaByIdApi } from '../../../apis/IdeasRelatedApis';
import { IAuthState } from '../../../interfaces/AuthRelatedInterfaces';



export default function IdeaCard(props : IIdeaCardProps) {
  const loggedInUserDetails : IAuthState = useSelector((state : any) => state.authReducer);
  const [upvoted, setUpvoted] = useState<boolean>(false);
  const [totalNumberOfUpvotes, setTotalNumberOfUpvotes] = useState<number>(0);
  

  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  //handlers for this component
  const onCommentHandler = () => {
  }
  
  const onShareIdeaHandler = () => {
  } 
  
  const onShowDetailsHandler = () => {
    navigate(`/ideaDetails/${props.id}`);
  }

  const onUpvoteClickIdeaHandler = () => {
    if(upvoted)
    {
      removeUpvoteOfIdeaByIdApi(props.id as string, removeUpvoteOfIdeaByIdApiCallback);
      setTotalNumberOfUpvotes(totalNumberOfUpvotes-1);
      setUpvoted(false);
      
    }
    else
    {
      // this means that we upvoting the idea hence we have to call the backend api for this purpose 
      upvoteIdeaByIdApi(props.id as string, upvoteIdeaByIdApiCallback);
      setTotalNumberOfUpvotes(totalNumberOfUpvotes+1);
      setUpvoted(true);
    }
   

    
  }

  // callbacks for the application comes here for this purpose 
  const removeUpvoteOfIdeaByIdApiCallback = (resultType : string, serverResponse : any) => {
    console.log("the value of the serverresponse after removing the upvote is as follows", serverResponse);
  }
  

  const upvoteIdeaByIdApiCallback = (resultType : string, serverResponse : any) => {
    console.log("the value of the serverresponse after the upvote is as follows", serverResponse);
  }


  useEffect(() => {
    if(loggedInUserDetails && props.upvotes.length > 0) 
    {
      let isPresent = props.upvotes.find(currUser => currUser._id === loggedInUserDetails.userId);
      if(!isPresent)
      {
        setUpvoted(false);

      }
      else
      {
        setUpvoted(true);
      }
      setTotalNumberOfUpvotes(props.upvotes.length);

    }
  }, [loggedInUserDetails])




  return (
    <Card sx={{width: "65%",  marginBottom: "3%", boxShadow: "7", borderColor : "black", borderRadius: "1%" }}>
      <Box 
            component="span"
            sx={{
            display : "flex", 
            justifyContent: "space-between",
            alignItems : "center",
            flexGrow: 1,
            bgcolor: "background.default",
            padding:1, 
            height: "50px",
            marginBottom : "0.5%"
            }}
            >
            <Typography  sx={{padding: 0, fontWeight: "bold", fontSize : "1.2rem"}}>{props.ideaTitle} </Typography>
          <Button onClick={onShowDetailsHandler} variant="contained" size='small' sx={{backgroundColor: "blue", width : "13%", height: "30px",fontSize : "0.6rem"}}>
            Show details 
          </Button>
          </Box>
      
      <CardContent sx={{marginBottom : "1%" , display : "flex", justifyContent : "center", alignItems : "center", flexDirection : 'column', width : "100%"}}>
        <Typography variant="body2" color="text.secondary" sx={{width : "90%"}}>
          {props.ideaDescription.length > 400? props.ideaDescription.substring(0, 400)+"....." : props.ideaDescription}
        </Typography>
        <div className="container" style={{display : 'flex', alignItems : "center", justifyContent : "center", marginTop : "2%",width : "80%"}}>
          <img src={`http://localhost:4004/${props.thumbnail}`} className="card-img-top" alt="Loading the thumbnail" style={{border : 2, borderColor : "black", width : "100%", height : "200px"}}/>

        </div>
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
              200 views 
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
            <ThumbUpIcon sx={{color : `${upvoted? "blue" : null}`}}></ThumbUpIcon>
            <Typography onClick={onUpvoteClickIdeaHandler} sx={{marginLeft : "15px"}}>
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
            <Typography onClick={onShareIdeaHandler} sx={{marginLeft : "15px"}}>
              {props.shares.length} Share 
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
            <Typography onClick={onCommentHandler} sx={{marginLeft : "15px"}}>
              Comments
            </Typography>
          </Box>
          
          

        </Box>
       
      </CardActions>
      
    </Card>
  );
}

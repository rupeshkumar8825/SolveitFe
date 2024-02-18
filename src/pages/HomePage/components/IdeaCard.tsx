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



export default function IdeaCard(props : IIdeaCardProps) {


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
          <Button onClick={props.onShowDetailsHandler} variant="contained" size='small' sx={{backgroundColor: "blue", width : "13%", height: "30px",fontSize : "0.6rem"}}>
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
            <ThumbUpIcon></ThumbUpIcon>
            <Typography onClick={props.onUpvoteIdeaHandler} sx={{marginLeft : "15px"}}>
              {props.upvotes} Upvotes 
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
            <Typography onClick={props.onShareIdeaHandler} sx={{marginLeft : "15px"}}>
              {props.shares} Share 
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
            <Typography onClick={props.onCommentHandler} sx={{marginLeft : "15px"}}>
              Comments
            </Typography>
          </Box>
          
          

        </Box>
       
      </CardActions>
      
    </Card>
  );
}

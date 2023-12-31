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
// import ShareIcon from '@mui/icons-material/Share';

export default function IdeaCard() {


  return (
    <Card sx={{width: "950px", height: "250px",  marginBottom: "3%", boxShadow: "7", borderColor : "black", borderRadius: "1%" }}>
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
            marginBottom : "0.5%"
            // marginTop : "25
            }}
            >
            <Typography  sx={{padding: 0, fontWeight: "bold", fontSize : "1.2rem"}}>Ttile of Idea </Typography>
            {/* <Typography  sx={{padding: 0,width: "40%", color : "#6B9DD7", fontWeight: "bold", fontSize : "0.6rem"}}> Updated on some time  </Typography> */}
            <Button variant="contained" size='small' sx={{backgroundColor: "blue", width : "13%", height: "30px",fontSize : "0.6rem"}}>
            Show details 
          </Button>
          </Box>
      
      <CardContent sx={{marginBottom : "1%", height : "120px"}}>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur ut vero alias omnis dolorum voluptas quibusdam sed commodi suscipit beatae illum quae, eaque repellat dolor earum provident, tempora quam. Obcaecati.
          Reiciendis autem natus dolor quidem culpa repudiandae facere debitis eos deleniti dolorem voluptas, aut magnam dignissimos at officiis mollitia fuga iusto eius quos! Cum soluta, quis nesciunt necessitatibus magnam pariatur!
          Nisi praesentium molestiae minima dignissimos, nihil veritatis obcaecati voluptatibus sapiente totam, atque eius numquam quod iste a quasi, voluptas distinctio laborum! Error nostrum animi cumque, reiciendis provident molestiae ducimus beatae.
        </Typography>
        <Typography sx={{border : 0.5, borderColor : "lightblue", marginTop : "3%"}}></Typography>
      </CardContent>
      <CardActions disableSpacing>
        
        {/* <hr /> */}
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
            <ThumbUpIcon></ThumbUpIcon>
            
            <Typography sx={{marginLeft : "15px"}}>
              200 Upvotes 
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
            <Typography sx={{marginLeft : "15px"}}>
              10 Share 
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
            <CommentIcon></CommentIcon>
            <Typography sx={{marginLeft : "15px"}}>
              Comments
            </Typography>
          </Box>
          
          

        </Box>
       
      </CardActions>
      
    </Card>
  );
}

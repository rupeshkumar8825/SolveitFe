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
import { useSelector } from "react-redux";
import { getIdeaDetailsByIdApi } from "../../apis/IdeasRelatedApis";


const IdeaDetailsPage = () => {

    // fetch the list of ideas from react store 
    const listOfIdeas =  useSelector((state : any) => state.ideaListReducer);
    const ideaId = useParams().ideaId;

    const [upvoted, setUpvoted] = useState<boolean>(false);
    const [shared, setShared] = useState<boolean>(false);
    const [addedToWatchList, setAddedToWatchList] = useState<boolean>(false);

    // handler for the component for this purpose 
    const onUpvoteIdeaHandler = () => {
        // here we have to toggle the value of the upvoted for this purpose 
        (upvoted==false)? setUpvoted(true) : setUpvoted(false);
        console.log("the user has upvoted the current idea \n");
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

    // callbacks comes here after hitting the apis to the backend 
    const getIdeaDetailsByIdApiCallback = (resultType : string, serverResponse : any) => {
        console.log("the response from the server after making the get idea details part is as follows \n", serverResponse);
    }


    useEffect(() => {
    //   write your code here 
        if(ideaId)
        {
            console.log("the id of the idea is as follows \n", ideaId);
            getIdeaDetailsByIdApi(ideaId as string, getIdeaDetailsByIdApiCallback)

        }
      return () => {
        // write cleanup code here if any for this purpose 
      }
    }, [ideaId])



    useEffect(() => {
        if(listOfIdeas)
        {
            console.log("the list of idea is as follows  from the ideadetails page for this purpose \n", listOfIdeas);
            // we have to find the details about this project for this purpose 
        }
    }, [listOfIdeas])
    


    return (
        <>
        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: 'center', alignItems: 'center', mt: `10%`, width: `83%`, marginLeft: `16%`, paddingLeft: 0, paddingRight: 0, marginBottom: "4%"}}>
            {/* box for topic  */}
            <Box
            component="main"
            sx={{
                bgcolor: "background.default",
                width: "30%",
                padding: 0,
                height: '7vh',
                marginBottom: "3%", 
                // border : 2
            }}
            >
                <Typography sx={{ padding: 0.5, fontSize: "1.5em", textAlign: "center", backgroundColor: "#D9D9D9", borderRadius: 2 }}>Idea Details : Idea Name</Typography>
            </Box>

            

            {/* box for a field for username  */}
            <Card sx={{width: "80%",  marginBottom: "3%", boxShadow: "7", borderColor : "black", borderRadius: "1%" }}>
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
                    <Typography  sx={{padding: 0, fontWeight: "bold", fontSize : "1.2rem"}}> Idea1 </Typography>
                    {addedToWatchList? <FileDownloadDoneIcon onClick={onAddToWatchListHandler} style={{height: "30px", width : "30px", color : "blue"}}></FileDownloadDoneIcon> : <ControlPointIcon onClick={onAddToWatchListHandler} style={{height: "30px", width : "30px"}}></ControlPointIcon>}
                </Box>
                
                <CardContent sx={{marginBottom : "1%"}}>
                    <Typography variant="body2" color="text.secondary">
                    Here comes the description of the idea for this purpose. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni officiis illum saepe alias incidunt accusantium, sint laboriosam molestiae quos eaque enim autem perferendis non esse sit, tempore, sapiente quo aut.
                    Nulla id vitae ratione facere iure suscipit maxime mollitia culpa delectus odit ex architecto voluptate provident, libero unde corporis hic minima illo sapiente magni quam repellat aspernatur necessitatibus! Libero, ipsa.
                    Aliquam necessitatibus enim reprehenderit excepturi, quam quod accusamus officia fugit ullam itaque et! Impedit atque labore iure doloribus. Odio accusantium magnam repellendus ut animi laboriosam veniam eum quasi hic illum! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam commodi, quos dignissimos repellat maiores, ex odit ratione mollitia nesciunt eligendi esse doloremque tempore id nulla eos praesentium sint accusantium hic.
                    Eius sint officia saepe cupiditate id, tempora voluptates quibusdam ipsum nemo ab laboriosam error nobis rerum consequuntur itaque dolore beatae quisquam vero non commodi pariatur iusto. Beatae consectetur neque eos?
                    Magnam adipisci accusamus harum at incidunt aliquam labore debitis tenetur illo sapiente itaque vitae rerum ex placeat, a amet iure perferendis eaque sed exercitationem saepe, nisi aliquid architecto. Dolorum, optio.
                    </Typography>
                    <img  src={imageThumbnail} alt={"Loading"} style={{ height : "100%",width : "100%",  border : "4px", padding: "2%", borderColor : "black", marginTop: "2%"}} />

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
                        <Typography onClick={onUpvoteIdeaHandler}  sx={{marginLeft : "15px"}}>
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
                        <Typography onClick={onShareIdeaHandler}  sx={{marginLeft : "15px"}}>
                        20 Share 
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
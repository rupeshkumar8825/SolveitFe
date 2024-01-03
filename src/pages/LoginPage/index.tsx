import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useEffect } from "react";
// import google from  "@types/google.accounts";
const LoginPage = () => {
  

    // defining the callback handlers here for this purpose 
    const handleCallbackResponse = (response : any) => {
        console.log("encoded jwt id token : ", response.credential);
    }
    // using the useeffect 
    useEffect(() => {
    //   write your code here
    // global google
    // console.log("rendering the google object for this purpose\n", google); 
    // if(google != null)
    // {
        console.log("came inside\n");
        google.accounts!.id.initialize({
            client_id : "579357163340-2q0ub2pi9mkqll08s0qf4nas38gok7no.apps.googleusercontent.com", 
            callback : handleCallbackResponse
        });
    
        const docGetId = document.getElementById("signInDiv")!;
        google.accounts.id.renderButton (docGetId,
            {theme : "outline", type: "standard", size: "large"}
        );
        
     
        // window.google.accounts.id.prompt();

    // }
      return () => {
        // write cleanup code if any 
      }
    }, [])
    
   
  
  return (
    <>
      <Box sx={{display: "flex", flexDirection: "column", justifyContent: 'center', alignItems: 'center', mt : "2%", width: `100%`,   paddingLeft:0, paddingRight:0, height : "80vh"}}>
        {/* box for topic  */}
        <Box
          component="main"
          sx={{
            bgcolor: "background.default",
            height: '7vh', 
            marginBottom : "3%"
          }}
          >
          <Typography sx={{padding: 2, fontSize: "1.5em", textAlign: "center", backgroundColor: "#D9D9D9", borderRadius: 2}}>Login Page</Typography>
        </Box>

         {/* box for the user detail content  */}
          <Box
            component="span"
            sx={{
              flexGrow: 1,
              bgcolor: "background.default",
              width: `50%`,
              padding:5, 
              marginBottom: "2%",
              display: "flex",
              justifyContent: "center", 
              alignItems: "center", 
              height : "30vh",
              boxShadow: 6, 
            }}
          >
            <Box
              component="main"
              sx={{
                bgcolor: "background.default",
                display : "flex", 
                justifyContent : "space-around", 
                alignItems : "center",
                height: '7vh', 
                marginBottom : "3%",
                // border :1, 
                boxShadow : "10", 
                width : "60%", 
                borderRadius : 2
              }}
            >
              
              {/* <h1>here is the login button for this purpose </h1> */}
              <div id="signInDiv"></div>
              


            </Box>
            
          </Box>
      </Box>
    </>
  );
};

export default LoginPage;

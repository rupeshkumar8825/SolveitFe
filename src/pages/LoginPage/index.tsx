import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { authenticateUserApi, loginApi } from "../../apis/AuthRelatedApis";




const LoginPage = () => {
  
  const dispatch = useDispatch();



  //allback handlers here for this purpose 
  const handleCallbackResponse = (response : any) => {
      const creds = {
        googleToken : response.credential
      };
      loginApi(creds, loginApiCallback);
  }


  const authenticateUserApiCallback = (resultType : string, serverResponse : any) => {
		// here we have to check the status of the serverresponse for this purpose 
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
			dispatch({type : 'LOGIN', payload : {userId : responseData._id, email : responseData.email}})
		}
		

	};
  const loginApiCallback = (resultType : string, serverResponse : any) => {
    if(serverResponse.status === 200)
    {
      // here we have to then call the authenticate user to get the value of the logged in user for this purpose 
      authenticateUserApi(authenticateUserApiCallback)

    }
    else if(serverResponse.response?.status === 401)
    {
    }
  }


  // using the useeffect 
  useEffect(() => {
      google.accounts!.id.initialize({
          client_id : "579357163340-2q0ub2pi9mkqll08s0qf4nas38gok7no.apps.googleusercontent.com", 
          callback : handleCallbackResponse
      });
  
      const docGetId = document.getElementById("signInDiv")!;
      google.accounts.id.renderButton (docGetId,
          {theme : "outline", type: "standard", size: "large"}
      );

    return () => {
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
              
              <div id="signInDiv"></div>
              


            </Box>
            
          </Box>
      </Box>
    </>
  );
};

export default LoginPage;

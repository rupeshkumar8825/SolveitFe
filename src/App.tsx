import React, { useEffect, useState } from "react";
import Sidebar from "./components/Navigation/Sidebar";
import { Box, CssBaseline, Toolbar, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import Navigation from "./components/Navigation/Navigation";
import AppRoutes from "./routes";
import jwtDecode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { authenticateUserApi, loginApi } from "./apis/AuthRelatedApis";
import { getUsersListApi } from "./apis/UserRelatedApis";
import { IPublicClientApplication, PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import LoginPage from "./pages/LoginPage";
import { getAllIdeasApi } from "./apis/IdeasRelatedApis";
import { IIdeaDetails } from "./interfaces/IdeaRelatedInterfaces";
import { IdeaConstants } from "./constants/IdeaRelatedConstants";

function App() {
	
	const userDetails = useSelector((state : any) => state.authReducer);
	const dispatch = useDispatch();



	// defining the ideas callback for this purpose 
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
			dispatch({type : IdeaConstants.GET_IDEA_LIST, payload : payload});
		}
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
			dispatch({type : 'LOGIN', payload : {userId : responseData.id, email : responseData.email}})
			getAllIdeasApi(getAllIdeasApiCallback);
		}
		

	};



	useEffect(() => {
		if(userDetails.isLoggedIn)
		{
			authenticateUserApi(authenticateUserApiCallback);
			
		}
		return () => {
			// cleanup code here
		};
	}, [userDetails.isLoggedIn]);



	
	if(userDetails.isLoggedIn)
	{
		return (
			<>
				<CssBaseline />
				<Navigation></Navigation>
				<AppRoutes></AppRoutes>
			
			</>
		);

	}
	else 
	{
		return (
			
			<LoginPage></LoginPage>
		)
	}
	
	
}

export default App;

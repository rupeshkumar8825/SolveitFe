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

function App() {
	
	// fetching the value of the authentication reducer for this purpose 
	const userDetails = useSelector((state : any) => state.authReducer);
	const dispatch = useDispatch();
	// defining the ideas callback for this purpose 
	const  getAllIdeasApiCallback = (resultType : string, serverResponse : any) => {
		console.log("the response from the server is as follows \n", serverResponse);
		if(serverResponse.status === 200)
		{
			console.log("the response from the server is 200\n");
			const responseData = serverResponse.data;
			console.log("the response data is as follows \n", responseData);
		}
		else if(serverResponse.response.status === 500)
		{
			// this means that this users is not logged in 
			// hence we have to dispatch the action to let the user logs in for this purpose 
			console.log("came inside the else block ");
		}
		dispatch({type : 'LOGOUT'});
	}

	useEffect(() => {
		// here we will make the get request to get the list of all the ideas that are there for this purpose 
		// if we will get unauthorized error then we can say that the user is logged in hence we will redirect him to the login page by sending the dispatch action for this purpose 
		// here we have to call the backend api to get the list of all the ideas for this puropse 
		getAllIdeasApi(getAllIdeasApiCallback)
		return () => {
			// cleanup code here
		};
	}, []);



	
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

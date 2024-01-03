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

function App() {
	
	// fetching the value of the authentication reducer for this purpose 
	const userDetails = useSelector((state : any) => state.authReducer);
	useEffect(() => {
		console.log("we are in the app component and the value of userdetails is as follows \n", userDetails);
		return () => {
			// cleanup code here
		};
	}, []);



	// using the if else statement in order to decide which page render either login page or home page for this purpose 
	if(userDetails.isLoggedIn)
	{
		// then we have to render the home page for this purpose 
	
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
		// we have to render the login page for this purpose 
		return (
			
			<LoginPage></LoginPage>
		)
	}
	
	
}

export default App;

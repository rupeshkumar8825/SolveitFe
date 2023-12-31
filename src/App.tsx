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


function App() {
	
	useEffect(() => {
		return () => {
			// cleanup code here
		};
	}, []);





	return (
		// <MsalProvider instance={props.instance}>
			// <div className="App">
		<>
			<CssBaseline />
			<Navigation></Navigation>
			<AppRoutes></AppRoutes>
		
		</>
			// </div>

		// </MsalProvider>
	);
	// } else {
	// 	return (
	// 		<>
	// 			<MsalProvider instance = {props.instance}>
	// 				<LoginPage  handleLoginCallback={handleLoginCallback}></LoginPage>
	// 			</MsalProvider>
	// 		</>
	// 	);
	// }
}

export default App;

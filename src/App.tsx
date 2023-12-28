import React, { useEffect, useState } from "react";
import Sidebar from "./components/Navigation/Sidebar";
import { Box, CssBaseline, Toolbar, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import Navigation from "./components/Navigation/Navigation";
import AppRoutes from "./routes";
import LoginPage from "./pages/AuthenticationPages/Login";
import jwtDecode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { IAuthState } from "./interfaces/AuthRelatedInterfaces";
import { authenticateUserApi, loginApi } from "./apis/AuthRelatedApis";
import { ILoginRequest } from "./interfaces/AuthRelatedInterfaces";
import { getAllProjectsApi } from "./apis/ProjectRelatedApis";
import { IProjectDetailsInterface } from "./interfaces/ProjectRelatedInterfaces";
import { getUsersListApi } from "./apis/UserRelatedApis";
import { IUserDetails } from "./interfaces/UserRelatedInterfaces";
import { IPublicClientApplication, PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
// import authReducer from "./redux/reducers/AuthReducers";

/*global google*/
declare global {
	interface Window {
		google: any; // Replace 'any' with the actual type if known
	}
}

// interface for the response that we will get from the google side upon signin
interface IResponseSignIn {
	clientId: string;
	client_id: string;
	credential: string;
	selected_by: string;
}

interface ITokenInfoDecode {
	email: string;
	email_verified: boolean;
	exp: number;
	name: string;
	picture: string;
}

interface IMsalInterface {
	instance : IPublicClientApplication
}

function App(props: IMsalInterface) {

	// fetching the values from the store 
	const isLoggedIn = useSelector((state : any) => state.authReducer.isLoggedIn);
	const userEmail = useSelector((state : any) => state.authReducer.email);
	const userId = useSelector((state : any) => state.authReducer.userId);



	const dispatch = useDispatch();
	

	const loginCallback = async (type: string, res: any) => {
		if (res.status === 200) {
			const serverResponse = res.data;
			const payloadData : any = {
				userId : serverResponse.data.id, 
				email : serverResponse.data.email, 
				
			}

			// dispatch the action here to make isloggedin flag true 
			dispatch({type : 'LOGIN', payload : payloadData})


		} else if (res.status === 500) {
			const responseData = res;
			console.log(responseData);
		} else {
			console.log("Login Failed, Response from server is as follows\n");
			console.log(res.response);
		}
	};




	function handleLoginCallback(response: any) {
		let googleToken = response.accessToken;
		let currentUserObject: any = jwtDecode(googleToken);
		console.log("the token details after decoding is as follows\n", currentUserObject);
		// backend requires the token and the emailid of the person to log the user in
		let creds: ILoginRequest = {
			email: currentUserObject.unique_name,
			token: `${googleToken}`,
			// token: ``,
		};

		console.log("the credentials that i am sending for login is as follows \n", creds);
		// making a post request to the backend to log this user in
		loginApi(creds, loginCallback);
	}




	const authenticateUserCallback = (resultType : string, serverResponse : any) => {
		if(serverResponse.status === 200)
		{
			// dispatching the 	action for allowing the login automatically to the user as cookie is still valid 
			let serverResponseData = serverResponse.data;
			const payloadData : any = {
				userId : serverResponseData.data.id,
				email : serverResponseData.data.email, 
			}
			
			console.log("The response from the server side is as follows for AUTHENTICATING THE USER \n\n", serverResponse);
			dispatch({type : "LOGIN", payload : payloadData});
		}
		else if(serverResponse.response.status === 401 || serverResponse.response.status === 500)
		{
			console.log("COOKIE EXPIRED HENCE MADE THE USER LOGOUT\n");
			dispatch({type : 'LOGOUT'});
			
		}	
	}

	const getAllProjectsCallback = async (resultType : string, serverResponse : any) => {
		if(!serverResponse.response?.status && serverResponse.status === 200)
		{
			const serverResponseData = serverResponse.data;
			console.log(serverResponseData);
			const payloadData : Array<IProjectDetailsInterface> = serverResponseData.data;

			console.log("the payload data being stored in teh application is as follows \n\n", payloadData);

			// dispatching the action to store this value in the store 
			dispatch({type : 'FETCH_PROJECT_LIST', payload : payloadData});
				
		}
		else if(serverResponse.response.status === 401 || serverResponse.response.status === 500)
		{
			// dispatching the action to logout from the application 
			dispatch({type : 'LOGOUT'});
		}
		
		// say everything went fine 
		return;
	}

	const getUsersListCallback = (resultType : string, serverResponse : any) => {
		console.log("fetching the list of the users present currently in the database\n");
		if(serverResponse.status === 200)
		{
			// everything went ok 
			const payloadData : Array<IUserDetails> = serverResponse.data.data;
			console.log("the PAYLOAD data that i am storing is\n", payloadData);
			// dispatch the action to store the list of users in store 
			dispatch({type : "FETCH_USERS_LIST", payload : payloadData});

		}
	}

	useEffect(() => {
		console.log("the values of the encvironment variables are as follows \n");
		console.log(process.env.REACT_APP_REDIRECT_URI);
		console.log(process.env.REACT_APP_AUTHORITY);
		console.log(process.env.REACT_APP_AZURE_CLIENT_ID);

		authenticateUserApi(authenticateUserCallback);
		return () => {
			// cleanup code here
		};
	}, []);


	useEffect(() => {
		// calling the function to 
		if(isLoggedIn)
		{
			// then calling the function to fetch the list of the projects for this purpoes 
			getAllProjectsApi(getAllProjectsCallback);
			// here we also have to fetch the details of all the users for this application 
			// and we will store this in the redux application 
			getUsersListApi(getUsersListCallback)
		}

		return () => {

		};
	}, [isLoggedIn])




	if (isLoggedIn) {
		return (
			<MsalProvider instance={props.instance}>
				<div className="App">
					<CssBaseline />
					<Navigation></Navigation>
					<AppRoutes></AppRoutes>
				</div>

			</MsalProvider>
		);
	} else {
		return (
			<>
				<MsalProvider instance = {props.instance}>
					<LoginPage  handleLoginCallback={handleLoginCallback}></LoginPage>
				</MsalProvider>
			</>
		);
	}
}

export default App;

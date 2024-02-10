import { Alert, Box, FormControl, Input, InputLabel, MenuItem, Select, SelectChangeEvent, Toolbar, Typography } from "@mui/material";
import React, { ChangeEvent, SelectHTMLAttributes, useEffect, useState } from "react";
import { ICategory } from "../../interfaces/UploadIdeaRelatedInterfaces";
import { listOfCateogries, yesNo } from "../../constants/UploadIdeaRelatedConstants";
import InputField from "../../components/inputField";
import ButtonPair from "../../components/buttonPair";
import { IUploadNewIdea } from "../../interfaces/IdeaRelatedInterfaces";
import { createNewIdeasApi } from "../../apis/IdeasRelatedApis";
import { useSelector } from "react-redux";


const UploadIdeaPage = () => {
	// fetching the states from the store 
	const loggedInUserDetails = useSelector((state : any) => state.authReducer);

    // defining the states for this component 
    const [ideaName, setIdeaName] = useState<string>("");
    const [category, setCategory] = useState<string>("");
    const [othersKnow, setOthersKnow] = useState<string>("");
    const [intensity, setIntensity] = useState<string>("");
    const [ideaDescription, setIdeaDescription] = useState<string>("");
    const [uploadedFile, setUploadedFile] = useState<File | null>(null);

	
	// defining the on change/edit handlers here for this page 
    const onChangeIdeaNameHandler = (event : React.ChangeEvent<any> ) => {
        const targetValue = event.target.value;
        setIdeaName(targetValue);
    }


    const onChangeIdeaCategoryHandler = (event : SelectChangeEvent<string>) => {
        const targetValue = event.target.value;
        setCategory(targetValue);
    }

    const onChangeOthersKnowHandler = (event : SelectChangeEvent<string>) => {
        const targetValue = event.target.value;
        setOthersKnow(targetValue);
    }

	
    const onChangeIntensityHandler = (event : React.ChangeEvent<any>) => {
        const targetValue = event.target.value;
        setIntensity(targetValue);
    }

	
    const onChangeIdeaDescriptionHandler = (event : React.ChangeEvent<any>) => {
        const targetValue = event.target.value;
        setIdeaDescription(targetValue);
    }
    
    const onChangeFileUploadHandler = (event : ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0];
        setUploadedFile(file);
		
    }
	
	const handleUpload = () => {
		const payload : IUploadNewIdea = {
			ideaName : ideaName, 
			ideaDescription : ideaDescription, 
			createdBy : loggedInUserDetails.userId, 
			rating : parseInt(intensity, 10),
			thumbnail : "",
			othersKnow : othersKnow, 
			category : category, 
		}	

		console.log("the payload that we are sending is as follows \n", payload);
		// backend call to create new idea 
		createNewIdeasApi(payload, createNewIdeasApiCallback); 


	}

	const handleReset = () => {
		setIdeaName("");
		setIdeaDescription("");
		setOthersKnow("");
		setUploadedFile(null);
		setCategory("");
		setIntensity("");

	}



	// callbacks inmplementation for this component comes here
	const createNewIdeasApiCallback = (resultType : string, serverResponse : any) => {
		console.log("the resposne from the server side is: \n", serverResponse);
		// say everything went fine 
		return;
	}

	


	return (
		<>
			<Box sx={{ display: "flex", flexDirection: "column", justifyContent: 'center', alignItems: 'center', mt: `10%`, width: `73%`, marginLeft: `21%`, paddingLeft: 0, paddingRight: 0, marginBottom: "10px" }}>
				{/* box for topic  */}
				<Box
					component="main"
					sx={{
						bgcolor: "background.default",
						width: "30%",
						padding: 0,
						height: '7vh',
						marginBottom: "3%"
					}}
				>
					<Typography sx={{ padding: 0.5, fontSize: "1.5em", textAlign: "center", backgroundColor: "#D9D9D9", borderRadius: 2 }}>Upload New Idea</Typography>
				</Box>

				{/* box for the create user content  */}
				<Box
					component="span"
					sx={{
						flexGrow: 1,
						bgcolor: "background.default",
						width: `100%`,
						padding: 5,
						marginBottom: "2%",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
						boxShadow: 6
					}}
				>

					{/* box for a field for projName  */}
					<InputField boxWidth="90%" boxHeight="12%" typographyContent="Idea Name: " textFieldValue={ideaName} textFieldOnChangeHandler={onChangeIdeaNameHandler} textFieldWidth="60%" multiLine={false} ></InputField>


					{/* dropdown for selecting the Category of the idea for this purpose  */}
					<Box
						component="span"
						sx={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
							flexGrow: 1,
							bgcolor: "background.default",
							width: `90%`,
							padding: 0,
							height: `12%`,
							marginBottom: "30px",
							// marginTop : "2%"
						}}
					>
						<Typography sx={{ padding: 0, fontWeight: "bold"}}> Category: </Typography>
						<Select
							value={category}
							label="Age"
							size="small"
							onChange={onChangeIdeaCategoryHandler}
							sx={{ width: "60%" }}
						>
							
							{listOfCateogries.map((currCategory : ICategory, index: number) =>
							{
                                return (<MenuItem key={currCategory.name} value={currCategory.name
                                }>{currCategory.name}</MenuItem>)
                                
							}
							)}
							
						</Select>


					</Box>


                    {/* select option for selecting whether the family friends also know their issues or not for this purpose  */}
					<Box
						component="span"
						sx={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
							flexGrow: 1,
							bgcolor: "background.default",
							width: `90%`,
							padding: 0,
							height: `12%`,
							marginBottom: "30px",
							// marginTop : "2%"
						}}
					>
						<Typography sx={{ padding: 0, fontWeight: "bold" }}> Does your family/friends also face this Problem? </Typography>
						<Select
							value={othersKnow}
							label="Age"
							size="small"
							onChange={onChangeOthersKnowHandler}
							sx={{ width: "60%" }}
						>
							
							{yesNo.map((currAnswer : string, index: number) =>
							{
                                return (<MenuItem key={currAnswer} value={currAnswer
                                }>{currAnswer}</MenuItem>)
                                
							}
							)}
							
						</Select>


					</Box>


                    
                    {/* box field for measuring the intensity of the problem for this purpose  */}
                    <InputField boxWidth="90%" boxHeight="12%" typographyContent="Rate the Intensity of the problem out of 10." textFieldValue={intensity} textFieldOnChangeHandler={onChangeIntensityHandler} multiLine={true} textFieldWidth="60%" ></InputField>
                
                    {/* box field Details about the project */}
                    <InputField boxWidth="90%" boxHeight="12%" typographyContent="Explain the Problem in detail: " multiLine={true} textFieldValue={ideaDescription} textFieldOnChangeHandler={onChangeIdeaDescriptionHandler} textFieldWidth="60%" ></InputField>
                    
                    <Box
						component="span"
						sx={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
							flexGrow: 1,
							bgcolor: "background.default",
							width: `90%`,
							padding: 0,
							height: `12%`,
							marginBottom: "10px",
							// marginTop : "2%"
						}}
					>
						<Typography sx={{ padding: 0, fontWeight: "bold" }}> Upload Image:  </Typography>
    
                        <Input
                            type="file"
                            inputProps={{ accept: 'image/*' }} // Specify the accepted file types
                            onChange={onChangeFileUploadHandler}
                            sx={{ width: "60%" }}
                        />

					</Box>
					
				</Box>


				{/* box for buttons  to handle the upload new idea and then to reset the value for this purpose */}
				<ButtonPair buttonContent1="Upload" buttonContent2="Reset" width="30%" height="5%" buttonBg1="#6B9DD7" buttonBg2="#FA5247" buttonHandler1={handleUpload} buttonHandler2={handleReset} ></ButtonPair>


			</Box>
		</>
	);
};

export default UploadIdeaPage;

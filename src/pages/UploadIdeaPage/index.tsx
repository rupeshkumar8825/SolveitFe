import { Alert, Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Toolbar, Typography } from "@mui/material";
import React, { SelectHTMLAttributes, useEffect, useState } from "react";
import { ICategory } from "../../interfaces/UploadIdeaRelatedInterfaces";
import { listOfCateogries, yesNo } from "../../constants/UploadIdeaRelatedConstants";
import InputField from "../../components/inputField";
import ButtonPair from "../../components/buttonPair";


const UploadIdeaPage = () => {


    // defining the states for this component 
    const [ideaName, setIdeaName] = useState<string>("");
    const [category, setCategory] = useState<string>("");
    const [othersKnow, setOthersKnow] = useState<string>("");
    const [intensity, setIntensity] = useState<string>("");
    const [ideaDescription, setIdeaDescription] = useState<string>("");


    // defining the handlers for this component for this purpose 
    const handleUpload = () => {
        console.log("creating the new idea \n");

    }

    const handleReset = () => {
        console.log("resetting all the entries\n");
    }


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
    

    // the following fields we are going to ask from the user in order to upload the new idea to the database for this purpose 
    // 1. idea name 
    // 2. Category 
    // 3. Does your family friend also face this issue 
    // 4. Rate the intensity of the problem out of 10 
    // 5. More Detail about the idea 
    // 6. Upload a supporting image for show casing the problem for this purpose 
    // 7. Upload idea button for submitting the final idea for this purpose 

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
					<InputField boxWidth="90%" boxHeight="12%" typographyContent="Idea Name: " textFieldValue={ideaName} textFieldOnChangeHandler={onChangeIdeaNameHandler} textFieldWidth="70%" multiLine={false} ></InputField>


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
							marginBottom: "10px",
							// marginTop : "2%"
						}}
					>
						<Typography sx={{ padding: 0, fontWeight: "bold" }}> Category </Typography>
						<Select
							value={category}
							label="Age"
							size="small"
							onChange={onChangeIdeaCategoryHandler}
							sx={{ width: "70%" }}
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
							marginBottom: "10px",
							// marginTop : "2%"
						}}
					>
						<Typography sx={{ padding: 0, fontWeight: "bold" }}> Does your family/friends also face this Problem? </Typography>
						<Select
							value={othersKnow}
							label="Age"
							size="small"
							onChange={onChangeOthersKnowHandler}
							sx={{ width: "70%" }}
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
                    <InputField boxWidth="80%" boxHeight="12%" typographyContent="Rate the Intensity of the problem out of 10." textFieldValue={intensity} textFieldOnChangeHandler={onChangeIntensityHandler} multiLine={true} textFieldWidth="70%" ></InputField>
                
                    {/* box field Details about the project */}
                    <InputField boxWidth="80%" boxHeight="12%" typographyContent="Explain the Problem in detail: " multiLine={true} textFieldValue={ideaDescription} textFieldOnChangeHandler={onChangeIdeaDescriptionHandler} textFieldWidth="70%" ></InputField>

					
				</Box>

				{/* box for buttons  to handle the upload new idea and then to reset the value for this purpose */}
				<ButtonPair buttonContent1="Upload" buttonContent2="Reset" width="30%" height="5%" buttonBg1="#6B9DD7" buttonBg2="#FA5247" buttonHandler1={handleUpload} buttonHandler2={handleReset} ></ButtonPair>


			</Box>
		</>
	);
};

export default UploadIdeaPage;

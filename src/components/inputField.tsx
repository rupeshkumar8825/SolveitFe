import { Typography, TextField } from "@mui/material";
import { Box, bgcolor, width, padding, height } from "@mui/system";
import React from "react";

// defining the interface that we will be requiring for this component 
interface inputFieldsProps {
    boxWidth : string, 
    boxHeight : string, 
    typographyContent : string, 
    textFieldValue : (string | null), 
    textFieldOnChangeHandler(event : React.ChangeEvent<any>) : void,
    textFieldWidth : string, 
    multiLine : boolean
}



const InputField = (props : inputFieldsProps) => {
    return (
        <>
            {/* box for a field for username  */}
            <Box
            component="span"
            sx={{
            display : "flex", 
            justifyContent: "space-between",
            alignItems : "center",
            flexGrow: 1,
            bgcolor: "background.default",
            width: `${props.boxWidth}`,
            padding:0,
            height: `${props.boxHeight}`, 
            marginBottom: "30px", 
            // marginTop : "25
            }}
            >
            <Typography  sx={{padding: 0, fontWeight: "bold"}}> {props.typographyContent} </Typography>
            {props.multiLine ? <TextField id="outlined-basic" multiline value={props.textFieldValue} onChange={props.textFieldOnChangeHandler} size="small" variant="outlined" sx={{width: `${props.textFieldWidth}`, borderColor: "red",  textAlign: "center"}}/> : <TextField id="outlined-basic" value={props.textFieldValue} onChange={props.textFieldOnChangeHandler} size="small" variant="outlined" sx={{width: `${props.textFieldWidth}`, borderColor: "red",  textAlign: "center"}}/> }
            </Box>
        
        </>
    )
}

export default InputField;
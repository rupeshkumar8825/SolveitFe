// this is the component where we will be using three buttons in a single line 
// just extend the implementation of the button pair to implement this 
import { Box, Button } from "@mui/material";
import React from "react";
import { buttonTripleProps } from "../interfaces/CommonInterfaces";




const TripleButton = (props : buttonTripleProps) => {
    return (

        <Box
          component="main"
          sx={{
            display : "flex", 
            justifyContent : "space-around", 
            alignItems : "center",
            flexGrow: 1,
            bgcolor: "background.default",
            width: `${props.width}`,
            padding:0,
            height: `${props.height}`
          }}
          >
          <Button variant="contained" onClick={props.buttonHandler1} sx={{backgroundColor: `${props.buttonBg1}`}}>
            {props.buttonContent1}
          </Button>
          <Button variant="contained" onClick={props.buttonHandler2} sx={{backgroundColor: `${props.buttonBg2}`}}>
            {props.buttonContent2}
          </Button>
          <Button variant="contained" onClick={props.buttonHandler3} sx={{backgroundColor: `${props.buttonBg3}`}}>
            {props.buttonContent3}
          </Button>
        </Box>
    )
}

export default TripleButton;
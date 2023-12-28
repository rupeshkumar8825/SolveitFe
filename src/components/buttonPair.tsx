import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { buttonPairProps } from "../interfaces/CommonInterfaces";


const ButtonPair = (props : buttonPairProps) => {
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
        </Box>
    )
}

export default ButtonPair;
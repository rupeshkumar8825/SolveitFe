import React, { useState } from "react";
import {
  AppBar,
  Typography,
  Toolbar,
  Box,
  TextField,
  Avatar,
  Divider,
  IconButton,
  Tooltip,
  Button,
} from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import MenuDropdown from "./MenuDropdown";
import { Link as RouterLink } from "react-router-dom";
const drawerWidth = `14%`;
const offSet = `13%`;
const marginValue = `5%`;

const Topbar = () => {
  const onSearchHandler = () => {
    console.log("The user has pressed/clicked the search icon.\n");
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${drawerWidth} - ${offSet})`,
        marginLeft: `calc(${drawerWidth}+ ${marginValue} )`,
        marginRight: `6%`,
        border: 1,
        borderColor: "transparent",
        backgroundColor: "#6B9DD7",
        borderRadius: 2,
        mt: 2,
      }}
    >
      <Toolbar>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            width: `100%`,
          }}
        >
          <Typography
            variant="subtitle2"
            noWrap
            component="div"
            style={{ cursor: "pointer", fontWeight: "lighter" }}
          >
            <Button color="inherit" component={RouterLink} to={"/allProjects"}>
              Home
            </Button>
          </Typography>

          <Typography
            variant="subtitle2"
            noWrap
            component="div"
            style={{ cursor: "pointer", fontWeight: "lighter" }}
          >
            <Button color="inherit" component={RouterLink} to={"/trending"}>
              Trending
            </Button>
          </Typography>
          {/* <Typography
            variant="subtitle2"
            noWrap
            component="div"
            style={{ cursor: "pointer", fontWeight: "lighter" }}
          >
            <Button
              color="inherit"
              component={RouterLink}
              to={"/generateReport"}
            >
              Generate Report
            </Button>
          </Typography> */}

          {/* adding the search bar for searching the projects  */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              width: `25%`,
              marginLeft: 20,
            }}
          >
            <TextField
              type="search"
              id="search"
              label="Search"
              size="small"
              sx={{
                width: `80%`,
                height: 0.5,
                backgroundColor: "whitesmoke",
                borderRadius: 1,
                border: 1,
              }}
            />
            <SearchRoundedIcon onClick={onSearchHandler} role="button" />
          </Box>

          <MenuDropdown></MenuDropdown>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;

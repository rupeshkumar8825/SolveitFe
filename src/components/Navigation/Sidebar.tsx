import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { red, yellow } from "@mui/material/colors";
import { TextField } from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import Topbar from "./Topbar";
import { wrap } from "module";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { IAuthState } from "../../interfaces/AuthRelatedInterfaces";

const drawerWidth = `14%`;

export default function Sidebar() {
  // fetching the current user from the react state 
  const authDetails : IAuthState = useSelector((state : any) => state.authReducer);

  
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Topbar />
      <Drawer
        sx={{
          width: `10%`,
          flexShrink: 0,

          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            borderRadius: 6,
            backgroundColor: "#6B9DD7",

            zIndex: 10,
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: 2,
          }}
        >
          <Typography fontSize={40}> SQM</Typography>
        </Toolbar>
        {/* <Divider /> */}
        <List
          sx={{
            display: "flex",
            flexWrap: "wrap",
            height: `60%`,
            marginTop: `15%`,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ListItem
            sx={{ display: "flex", justifyContent: "center", width: `100%` }}
            key="Project"
            disablePadding
          >
            <ListItemButton component={Link} to={"/home"}>
              <ListItemText
                primary="All Ideas"
                primaryTypographyProps={{
                  color: "white",
                  fontSize: "0.85em",
                  textAlign: "center",
                  fontWeight: "lighter",
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem
            sx={{ display: "flex", justifyContent: "center", width: `100%` }}
            key="Project"
            disablePadding
          >
            <ListItemButton component={Link} to={"/uploadIdea"}>
              <ListItemText
                primary="Upload New Idea"
                primaryTypographyProps={{
                  color: "white",
                  textAlign: "center",
                  fontSize: `0.85rem`,
                  fontWeight: "lighter",
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem
            sx={{ display: "flex", justifyContent: "center", width: `100%` }}
            key="Project"
            disablePadding
          >
            <ListItemButton component={Link} to={"/watchlist"}>
              <ListItemText
                primary="My WatchList"
                primaryTypographyProps={{
                  color: "white",
                  textAlign: "center",
                  fontSize: `0.85rem`,
                  fontWeight: "lighter",
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem
            sx={{ display: "flex", justifyContent: "center", width: `100%` }}
            key="Project"
            disablePadding
          >
            <ListItemButton component={Link} to={"/userProfile/:userid"}>
              <ListItemText
                primary="My Profile"
                primaryTypographyProps={{
                  color: "white",
                  textAlign: "center",
                  fontSize: `0.85rem`,
                  fontWeight: "lighter",
                }}
              />
            </ListItemButton>
          </ListItem>

          {/* <ListItem
            sx={{ display: "flex", justifyContent: "center", width: `100%` }}
            key="Project"
            disablePadding
          >
            <ListItemButton component={Link} to={"/removeTeamMember"}>
              <ListItemText
                primary="Remove Member"
                primaryTypographyProps={{
                  color: "white",
                  textAlign: "center",
                  fontSize: `0.85rem`,
                  fontWeight: "lighter",
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem
            sx={{ display: "flex", justifyContent: "center", width: `100%` }}
            key="Project"
            disablePadding
          >
            <ListItemButton component={Link} to={"/allUsers"}>
              <ListItemText
                primary="All Users"
                primaryTypographyProps={{
                  color: "white",
                  textAlign: "center",
                  fontSize: `0.85rem`,
                  fontWeight: "lighter",
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem
            sx={{ display: "flex", justifyContent: "center", width: `100%` }}
            key="Project"
            disablePadding
          >
            <ListItemButton component={Link} to={`/userProfile/${authDetails.userId}`}>
              <ListItemText
                primary="My Profile"
                primaryTypographyProps={{
                  color: "white",
                  textAlign: "center",
                  fontSize: `0.85rem`,
                  fontWeight: "lighter",
                }}
              />
            </ListItemButton>
          </ListItem> */}
        </List>
      </Drawer>
    </Box>
  );
}

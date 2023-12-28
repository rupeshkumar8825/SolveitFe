import { Logout } from "@mui/icons-material";
import {
  Menu,
  MenuItem,
  Avatar,
  Divider,
  ListItemIcon,
  IconButton,
  Tooltip,
} from "@mui/material";
import React, { useState } from "react";

const MenuDropdown = () => {
  const [menuStatus, setMenuStatus] = useState<null | HTMLElement>(null);
  const open = Boolean(menuStatus);

  const handleClose = () => {
    console.log("the user has closed the menu\n\n");

    // setting the state of menuStatus  as null
    setMenuStatus(null);
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    console.log("The user has clicked the username to see the dropdown\n");
    setMenuStatus(event.currentTarget);
  };

  return (
    <>
      <Tooltip title="Account settings">
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <Avatar sx={{ width: 32, height: 32 }}>RK</Avatar>
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={menuStatus}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> Loggedin User
        </MenuItem>
        <Divider />

        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};

export default MenuDropdown;

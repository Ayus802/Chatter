import { ArrowBack } from "@mui/icons-material";
import {
  Avatar,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import React from "react";
import { names } from "./data";

export default function Sidebar() {
  return (
    <Drawer
      open={true}
      anchor="left"
      variant="permanent"
      slotProps={{
        paper: {
          sx: {
            bgcolor: "black",
            color: "white",
            border: "solid 0 0.2px",
            borderColor: "white",
            top: "64px",
            overflow: "scroll",
          },
        },
      }}
    >
      <Typography variant="h5" component={ListItem} marginTop={"10px"}>
        Messages
      </Typography>
      <Divider />
      <List sx={{ width: "20rem" }}>
        {names.map((name) => (
          <ListItemButton>
            <Avatar sx={{ marginRight: "10px" }} /> {name}
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
}

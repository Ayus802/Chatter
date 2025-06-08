import {
  AppBar,
  Avatar,
  Box,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import React from "react";

export default function NavbarPC() {
  return (
    <Box flexGrow={1} zIndex={100}>
      <AppBar
        position="static"
        sx={{
          height: "12vh",
          bgcolor: "black",
          borderBottom: "solid 1px white",
        }}
      >
        <Toolbar>
          <IconButton>
            <Menu />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Chatter
          </Typography>

          <Avatar></Avatar>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

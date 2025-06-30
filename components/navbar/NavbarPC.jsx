"use client";
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
import { useAuth } from "@/api/context/authContext";

export default function NavbarPC() {
  const { isAuthenticated, user } = useAuth();

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
          {isAuthenticated ? (
            <>
              <Avatar></Avatar>
              <Typography variant="h6" fontSize={"1rem"}>
                {user?.name}
              </Typography>
            </>
          ) : (
            <Grid container spacing={2} justifyContent="flex-end">
              <Grid item>
                <Typography variant="body1" color="white">
                  Sign In
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" color="white">
                  Sign Up
                </Typography>
              </Grid>
            </Grid>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

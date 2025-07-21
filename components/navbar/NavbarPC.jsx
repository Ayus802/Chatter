"use client";
import {
  AppBar,
  Avatar,
  Box,
  Grid,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import React from "react";
import { useAuth } from "@/context/authContext";

export default function NavbarPC() {
  const { isAuthenticated, user, logout } = useAuth();

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
              <Link
                href="/login"
                onClick={logout}
                style={{
                  textDecoration: "none",
                  color: "white",
                  marginLeft: "20px",
                }}
              >
                Lougout
              </Link>
            </>
          ) : (
            <Grid container spacing={2} justifyContent="flex-end">
              <Grid item>
                <Link href="/login" style={{ textDecoration: "none" }}>
                  Sign In
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" style={{ textDecoration: "none" }}>
                  Sign Up
                </Link>
              </Grid>
            </Grid>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

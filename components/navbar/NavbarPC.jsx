"use client";
import {
  AppBar,
  Avatar,
  Box,
  Divider,
  Grid,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useAuth } from "@/context/authContext";
import {
  AccountBox,
  AccountBoxOutlined,
  Chat,
  ChatBubbleOutline,
  ChatBubbleOutlineOutlined,
  ChatBubbleOutlineRounded,
  ChatBubbleOutlineSharp,
  ChatBubbleOutlineTwoTone,
  Logout,
} from "@mui/icons-material";

export default function NavbarPC() {
  const { isAuthenticated, user, logout } = useAuth();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    setAnchorEl(null);
    logout();
  };

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
              <IconButton
                href="/messages"
                sx={{ color: "white", border: "solid 2px gray" }}
              >
                <ChatBubbleOutlineRounded fontSize="medium" />
              </IconButton>
              <IconButton
                onClick={(e) => setAnchorEl(e.currentTarget)}
                sx={{ color: "white" }}
              >
                <Avatar></Avatar>
              </IconButton>
              <Typography variant="h6" fontSize={"1rem"} marginX={"10px"}>
                Hii!! {user?.name}
              </Typography>
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

        <Menu anchorEl={anchorEl} open={open} onClose={handleMenuClose}>
          <MenuItem>
            <Link
              href={`/profile/${user?._id}`}
              onClick={handleMenuClose}
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              <AccountBoxOutlined sx={{ marginRight: "10px" }} />
              My Profile
            </Link>
          </MenuItem>
          <Divider />
          <MenuItem>
            <Logout />
            <Link
              href="/login"
              onClick={handleLogout}
              style={{
                textDecoration: "none",
                color: "black",
                marginLeft: "10px",
              }}
            >
              Lougout
            </Link>
          </MenuItem>
        </Menu>
      </AppBar>
    </Box>
  );
}

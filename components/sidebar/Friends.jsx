"use client";
import { ArrowBack } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  Typography,
} from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { getUserList } from "@/api/users/getUserList";
import { useAuth } from "@/context/authContext";
import { toast } from "react-toastify";

export default function Friends() {
  const [users, setUsers] = useState([]);
  const { token, setIsAuthenticated, isAuthenticated } = useAuth();
  useEffect(() => {
    if (!token) {
      return;
    }
    const fetchUsers = async () => {
      console.log("Fetching user list with token:", token);
      const users = await getUserList(token);
      setUsers(users?.data);
      console.log(users?.data);
    };
    fetchUsers().catch((error) => {
      console.error("Error aa rha:", error);
      toast.error("Please login again");
      sessionStorage.removeItem("token");
      setIsAuthenticated(false);
    });
  }, [token, isAuthenticated, setIsAuthenticated]);

  return (
    <Box borderRight="solid 1px white" height={"88vh"} overflow={"scroll"}>
      <IconButton sx={{ height: "4rem" }}>
        <ArrowBack color="white" />
        <Typography variant="h5" color="white" marginLeft={"10px"}>
          Messages
        </Typography>
      </IconButton>
      <Divider color="gray" />
      <List>
        {users.map((user) => (
          <ListItemButton
            LinkComponent={Link}
            href={`/messages/${user._id}`}
            id={user._id}
            key={user._id}
          >
            <Avatar sx={{ marginRight: "10px" }} /> {user.username}
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
}

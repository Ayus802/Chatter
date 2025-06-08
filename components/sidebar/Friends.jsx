import { ArrowBack } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
} from "@mui/material";
import React from "react";
import { names } from "./data";
import Link from "next/link";

export default function Friends() {
  return (
    <Box borderRight="solid 1px white" height={"88vh"} overflow={"scroll"}>
      <IconButton sx={{ height: "4rem" }}>
        <ArrowBack color="white" />
      </IconButton>
      <Divider />
      <List>
        {names.map((name) => (
          <ListItemButton
            LinkComponent={Link}
            href={`/messages/${name.split(" ")[0]}`}
          >
            <Avatar sx={{ marginRight: "10px" }} /> {name}
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
}

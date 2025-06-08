"use client";
import Friends from "@/components/sidebar/Friends";
import Sidebar from "@/components/sidebar/Sidebar";
import { Send, Toc } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { useParams } from "next/navigation";

export default function Messages() {
  const params = useParams();

  return params.userId ? (
    <Grid size={9} height={"88vh"}>
      <Grid
        display={"flex"}
        alignItems={"center"}
        padding={"15px"}
        borderBottom={"solid white 1px"}
        justifyContent={"space-between"}
        height={"15%"}
      >
        <Avatar />
        <Typography marginLeft={"10px"} flexGrow={1}>
          {params?.userId}
        </Typography>
        <IconButton>
          <Toc sx={{ color: "white" }} />
        </IconButton>
      </Grid>
      <Grid height={"70%"} overflow={"scroll"}>
        {/* //messages */}
      </Grid>
      <Grid
        height={"15%"}
        borderTop={"solid white 1px"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-around"}
        gap={"10px"}
      >
        <TextField
          type="text"
          placeholder="Message"
          sx={{
            border: "solid white 1px",
            borderRadius: "2rem",
            input: { color: "white" },
          }}
          fullWidth
        />
        <IconButton sx={{ bgcolor: "blueviolet", borderRadius: "2rem" }}>
          <Typography color="white">Send</Typography>
          <Send sx={{ color: "white" }} />
        </IconButton>
      </Grid>
    </Grid>
  ) : (
    <Grid> Start Chatting </Grid>
  );
}

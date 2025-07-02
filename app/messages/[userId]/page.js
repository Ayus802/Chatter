"use client";
import { getMessageList } from "@/api/message/getMessages";
import { sendMessage } from "@/api/message/sendMessage";
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
import { useEffect, useState } from "react";

export default function Messages() {
  const params = useParams();
  const [message, setMessage] = useState("");
  const [messagesSend, setMessagesSend] = useState(null);
  useEffect(() => {
    const getMessages = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found in localStorage");
        return;
      }
      console.log("Fetching messages for user:", token);
      const response = await getMessageList(params?.userId, token);
      setMessagesSend(response?.messagesSend?.messages);
      return;
    };
    getMessages().catch((error) => {
      console.error("Error fetching messages:", error);
    });
  }, []);

  const sendHandler = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    if (!token) {
      console.error("No token found in localStorage");
      return;
    }
    await sendMessage(message, params?.userId, token)
      .then((response) => {
        console.log("response");
      })
      .catch((error) => {
        console.error("Error sending message:", error);
      });
  };

  return (
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
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"flex-start"}
          padding={"10px"}
          gap={"10px"}
          sx={{
            "& > div": {
              maxWidth: "60%",
              padding: "10px",
              borderRadius: "10px",
            },
          }}
        >
          <Box
            sx={{
              bgcolor: "blueviolet",
              color: "white",
            }}
          >
            <Typography>Hi, how are you?</Typography>
          </Box>
          {messagesSend?.map((message, index) => {
            return (
              <Box
                sx={{
                  bgcolor: "gray",
                  color: "white",
                  alignSelf: "flex-end",
                }}
              >
                {console.log(message.message)}
                <Typography key={index}>{message?.message}</Typography>
              </Box>
            );
          })}
        </Box>
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
          onChange={(e) => setMessage(e.target.value)}
        />
        <IconButton
          onClick={(e) => sendHandler(e)}
          sx={{ bgcolor: "blueviolet", borderRadius: "2rem" }}
        >
          <Typography color="white">Send</Typography>
          <Send sx={{ color: "white" }} />
        </IconButton>
      </Grid>
    </Grid>
  );
}

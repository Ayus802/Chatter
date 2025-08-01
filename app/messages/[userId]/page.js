"use client";
import { Send, Toc } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { useParams } from "next/navigation";
import { use, useEffect, useState } from "react";
import { Socket } from "socket.io-client";
import { sendHandler } from "./utils";
import { getMessageList } from "@/hooks/message/useGetMessages";

export default function Messages() {
  const params = useParams();
  const [message, setMessage] = useState("");
  const [messagesSend, setMessagesSend] = useState(null);
  const [messagesReceived, setMessagesReceived] = useState(null);

  useEffect(() => {
    const getMessages = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found in localStorage");
        return;
      }
      const response = await getMessageList(params?.userId, token);
      setMessagesSend(response?.messagesSend?.messages);
      setMessagesReceived(response?.messagesReceived?.messages);
      console.log("Messages fetched:", response);
      return;
    };
    getMessages().catch((error) => {
      console.error("Error fetching messages:", error);
    });
  }, []);

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
          {messagesReceived?.map((message, index) => {
            return (
              <Box
                sx={{
                  bgcolor: "blueviolet",
                  color: "white",
                }}
                key={index}
              >
                <Typography>{message?.message}</Typography>
              </Box>
            );
          })}
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
          id="message"
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

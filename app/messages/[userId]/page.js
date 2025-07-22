"use client";
import { getMessageList } from "@/hooks/message/useGetMessages";
import { sendMessage } from "@/hooks/message/useSendMessage";
import { useReceiveMessage } from "@/hooks/message/useReceiveMessage";
import { useAuth } from "@/context/authContext";
import {
  CallEndOutlined,
  CallOutlined,
  Send,
  Toc,
  VideoCall,
  VideoCallOutlined,
  VideoCallRounded,
  VideoCallSharp,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { useParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";

export default function Messages() {
  const params = useParams();
  const [message, setMessage] = useState("");
  const [allMessages, setAllMessages] = useState([]);

  const { token, user } = useAuth();
  useReceiveMessage(setAllMessages);
  useEffect(() => {
    const getMessages = async () => {
      if (!token) {
        toast("No token found in localStorage");
        return;
      }
      const response = await getMessageList(params?.userId, token);
      console.log("Fetching messages for user:", response);

      setAllMessages(response?.allMessages || []);
      return;
    };
    getMessages().catch((error) => {
      console.error("Error fetching messages:", error);
    });
  }, [token, params?.userId]);

  const sendHandler = async (e) => {
    e.preventDefault();
    if (!token) {
      console.error("No token found in localStorage");
      return;
    }
    console.log("Sending message:", message);
    await sendMessage(message, params?.userId, token)
      .then((response) => {
        setAllMessages((prev) => [...prev, { message, senderId: user?.id }]);
        console.log("check", user);
        setMessage("");
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
          <CallOutlined sx={{ color: "white" }} />
        </IconButton>
        <IconButton>
          <IconButton>
            <VideoCallRounded sx={{ color: "white" }} />
          </IconButton>
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
          {allMessages?.map((message, index) => {
            // console.log(messagesReceive);

            return (
              <Box
                key={index}
                sx={{
                  bgcolor:
                    message?.senderId === user?.id ? "gray" : "blueviolet",
                  color: "white",
                  alignSelf:
                    message?.senderId === user?.id ? "flex-end" : "flex-start",
                }}
              >
                <Typography key={index}>{message?.message}</Typography>
                <Typography fontSize={".5rem"}>{message?.createdAt}</Typography>
              </Box>
            );
          })}
          {/*
          {messagesSend?.map((message, index) => {
            console.log(messagesSend);
            return (
              <Box
                sx={{
                  bgcolor: "gray",
                  color: "white",
                  alignSelf: "flex-end",
                }}
              >
                <Typography key={index}>{message?.message}</Typography>
              </Box>
            );
          })} */}
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
          value={message}
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

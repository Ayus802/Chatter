import { Grid, Typography } from "@mui/material";
import React from "react";

export default function page() {
  return (
    <Grid
      height={"90vh"}
      size={9}
      alignItems={"center"}
      display="flex"
      justifyContent="center"
      flexDirection="column"
    >
      <Typography variant="h3">Welcome to Chatter</Typography>
      <Typography variant="h6">Connect with your friends and family</Typography>
      <img
        src="https://cdni.iconscout.com/illustration/premium/thumb/message-app-illustration-download-in-svg-png-gif-file-formats--messaging-platform-chat-application-communication-software-marketing-concept-pack-business-illustrations-9910075.png"
        alt="Chatting"
        style={{ width: "25%", height: "25%", marginTop: "20px" }}
      />
    </Grid>
  );
}

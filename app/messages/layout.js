import Friends from "@/components/sidebar/Friends";
import { SocketContextProvider } from "@/context/socketContext";
import { Grid } from "@mui/material";
import React from "react";

export default function MessageLayout({ children }) {
  return (
    <SocketContextProvider>
      <Grid container className="">
        <Grid size={3}>
          <Friends />
        </Grid>
        {children}
      </Grid>
    </SocketContextProvider>
  );
}

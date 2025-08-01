import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

export default function page() {
  return (
    <Grid
      container
      alignContent="center"
      justifyContent="center"
      flexDirection={"column"}
      gap={2}
      marginTop="20px"
    >
      <Grid
        gap={2}
        display="flex"
        flexDirection="column"
        borderBottom="solid 1px whitesmoke"
        paddingBottom="20px"
      >
        <Typography
          variant="h4"
          color="white"
          marginTop="20px"
          fontFamily={"cursive"}
        >
          My Profile
        </Typography>
        <Divider sx={{ bgcolor: "whitesmoke" }} />
        <Avatar
          sx={{
            width: "150px",
            height: "150px",
            bgcolor: "blueviolet",
            marginX: "auto",
            marginTop: "20px",
          }}
        ></Avatar>
        <Button variant="outlined" size="small" color="primary">
          Edit Pic!!
        </Button>
      </Grid>
      <Grid container gap={2}>
        <Grid size={5}>
          <TextField
            variant="filled"
            color="primary"
            fullWidth
            sx={{ input: { color: "white" } }}
            placeholder="First Name"
          />
        </Grid>
        <Grid size={5}>
          <TextField
            variant="filled"
            color="primary"
            fullWidth
            sx={{ input: { color: "white" } }}
            placeholder="Last Name"
          />
        </Grid>
        <Grid size={12}>
          <TextField
            variant="filled"
            color="primary"
            fullWidth
            sx={{ input: { color: "white" } }}
            placeholder="Email"
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

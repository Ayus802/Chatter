"use client";

import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Link,
  Grid,
  Container,
} from "@mui/material";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const validateForm = () => {
    let valid = true;
    const newErrors = { email: "", password: "" };

    if (!formData.email) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
      valid = false;
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
      valid = false;
    } else if (!/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(formData.password)) {
      newErrors.password =
        "Password must be at least 6 characters with one uppercase and one lowercase letter";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData({
      ...formData,
      [name]: name === "rememberMe" ? checked : value,
    });
  };

  const handleSubmit = () => {
    if (validateForm()) {
      alert("Login successful!"); // Replace with PHP API call if needed
      console.log("Form Data:", formData);
    } else {
      console.log("Validation failed");
    }
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        minHeight: "88vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          bgcolor: "black",
          boxShadow: 3,
          borderRadius: 2,
          p: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          maxWidth: 400,
        }}
      >
        <Typography variant="h5" color="primary" gutterBottom>
          Task Planner Login
        </Typography>
        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email}
          variant="outlined"
          required
          sx={{ input: { color: "white" }, label: { color: "gray" } }}
        />
        <TextField
          fullWidth
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          error={!!errors.password}
          helperText={errors.password}
          variant="outlined"
          required
          sx={{ input: { color: "white" }, label: { color: "gray" } }}
        />
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <FormControlLabel
              control={
                <Checkbox
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  color="primary"
                />
              }
              label="Remember Me"
            />
          </Grid>
          <Grid item>
            <Link href="/forgot-password" sx={{ color: "secondary.main" }}>
              Forgot Password?
            </Link>
          </Grid>
        </Grid>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          sx={{ mt: 2 }}
        >
          Sign In
        </Button>
        <Typography variant="body2" sx={{ mt: 2 }}>
          Don't have an account?{" "}
          <Link href="/signup" sx={{ color: "secondary.main" }}>
            Sign Up
          </Link>
        </Typography>
      </Box>
    </Container>
  );
}

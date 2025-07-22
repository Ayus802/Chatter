"use client";
import React from "react";
import { Formik, Form } from "formik";
import { Button, TextField, Box, Typography, useTheme } from "@mui/material";
import { validateSchema } from "@/utils/validation";
import { useRouter } from "next/navigation";
import { registerUser } from "@/api/auth/registration";
import { useAuth } from "@/context/authContext";

const { registrationSchema } = validateSchema();

const RegistrationForm = () => {
  const theme = useTheme();
  const { login } = useAuth();
  const router = useRouter();

  return (
    <Formik
      initialValues={{
        name: "",
        username: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={registrationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        alert(JSON.stringify(values, null, 2));
        console.log("Form submitted:", values);
        await registerUser(values)
          .then((response) => {
            login(response);
            router.push("/");
          })
          .catch((error) => {
            console.error("Registration error:", error);
          });
        setSubmitting(false);
        resetForm();
      }}
    >
      {({
        errors,
        touched,
        handleChange,
        handleBlur,
        values,
        isSubmitting,
      }) => (
        <Form>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap={2}
            sx={{
              width: 350,
              mx: "auto",
              mt: 4,
              bgcolor: theme.palette.background.paper,
              borderRadius: 2,
              boxShadow: 3,
              p: 3,
            }}
          >
            <Typography
              variant="h5"
              sx={{ color: theme.palette.text.primary, mb: 1 }}
            >
              Register
            </Typography>
            <TextField
              label="Name"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.name && Boolean(errors.name)}
              helperText={touched.name && errors.name}
              fullWidth
              sx={{
                "& .MuiInputLabel-root": {
                  color: theme.palette.text.secondary,
                },
                "& .MuiInputBase-input": {
                  color: theme.palette.text.primary,
                  background: theme.palette.background.default,
                },
              }}
            />
            <TextField
              label="Username"
              name="username"
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.username && Boolean(errors.username)}
              helperText={touched.username && errors.username}
              fullWidth
              sx={{
                "& .MuiInputLabel-root": {
                  color: theme.palette.text.secondary,
                },
                "& .MuiInputBase-input": {
                  color: theme.palette.text.primary,
                  background: theme.palette.background.default,
                },
              }}
            />
            <TextField
              label="Password"
              name="password"
              type="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password && errors.password}
              fullWidth
              sx={{
                "& .MuiInputLabel-root": {
                  color: theme.palette.text.secondary,
                },
                "& .MuiInputBase-input": {
                  color: theme.palette.text.primary,
                  background: theme.palette.background.default,
                },
              }}
            />
            <TextField
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.confirmPassword && Boolean(errors.confirmPassword)}
              helperText={touched.confirmPassword && errors.confirmPassword}
              fullWidth
              sx={{
                "& .MuiInputLabel-root": {
                  color: theme.palette.text.secondary,
                },
                "& .MuiInputBase-input": {
                  color: theme.palette.text.primary,
                  background: theme.palette.background.default,
                },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={isSubmitting}
              fullWidth
              sx={{
                mt: 1,
                bgcolor: theme.palette.primary.main,
                color: theme.palette.primary.contrastText,
                "&:hover": {
                  bgcolor: theme.palette.primary.dark,
                },
              }}
            >
              Register
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;

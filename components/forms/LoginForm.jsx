"use client";

import { Formik, Form } from "formik";
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
import { validateSchema } from "@/utils/validation";
import loginUser from "@/api/auth/login";
import { useAuth } from "@/api/context/authContext";
import { useRouter } from "next/navigation";

const { loginSchema } = validateSchema();

export default function LoginForm() {
  const { login } = useAuth();
  const router = useRouter();

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
      <Formik
        initialValues={{
          username: "",
          password: "",
          rememberMe: false,
        }}
        validationSchema={loginSchema}
        onSubmit={(values, { setSubmitting }) => {
          alert(JSON.stringify(values, null, 2));
          loginUser(values)
            .then((response) => {
              console.log("Login successful:", response);
              login(response);
              router.push("/");
            })
            .catch((error) => {
              console.error("Login error:", error);
              alert("Login failed. Please check your credentials.");
            });

          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isSubmitting,
        }) => (
          <Form style={{ width: "100%" }}>
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
                label="Username"
                name="username"
                type="username"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.username && Boolean(errors.username)}
                helperText={touched.username && errors.username}
                variant="outlined"
                required
                sx={{ input: { color: "white" }, label: { color: "gray" } }}
              />
              <TextField
                fullWidth
                label="Password"
                name="password"
                type="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
                variant="outlined"
                required
                sx={{ input: { color: "white" }, label: { color: "gray" } }}
              />
              <Grid
                container
                justifyContent="space-between"
                alignItems="center"
              >
                <Grid item>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="rememberMe"
                        checked={values.rememberMe}
                        onChange={handleChange}
                        color="primary"
                      />
                    }
                    label="Remember Me"
                  />
                </Grid>
                <Grid item>
                  <Link
                    href="/forgot-password"
                    sx={{ color: "secondary.main" }}
                  >
                    Forgot Password?
                  </Link>
                </Grid>
              </Grid>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                type="submit"
                disabled={isSubmitting}
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
          </Form>
        )}
      </Formik>
    </Container>
  );
}

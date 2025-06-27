import * as yup from "yup";

export function validateSchema() {
  const loginSchema = yup.object().shape({
    username: yup
      .string()
      .required("Username is required")
      .min(3, "Enter valid username"),
    password: yup.string().required("Password is required"),
  });

  const registrationSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    username: yup
      .string()
      .required("Username is required")
      .min(3, "Username must be at least 3 characters")
      .matches(
        /^[a-zA-Z0-9_]+$/,
        "Username can only contain letters, numbers, and underscores"
      ),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
    bio: yup.string().max(500, "Bio must be at most 500 characters"),
  });
  return { loginSchema, registrationSchema };
}

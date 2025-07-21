import LoginForm from "@/components/forms/LoginForm";
import { AuthProvider } from "@/context/authContext";
import React from "react";

function page() {
  return (
    <AuthProvider>
      <LoginForm />
    </AuthProvider>
  );
}

export default page;

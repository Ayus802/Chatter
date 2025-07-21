import RegistrationForm from "@/components/forms/RegistrationForm";
import { AuthProvider } from "@/context/authContext";
import React from "react";

export default function page() {
  return (
    <AuthProvider>
      <RegistrationForm />
    </AuthProvider>
  );
}

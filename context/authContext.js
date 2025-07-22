"use client";

import { jwtDecode } from "jwt-decode";
import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = sessionStorage.getItem("token");
    if (storedToken) {
      const decodedUser = jwtDecode(storedToken);
      if (!decodedUser) {
        return;
      }
      setUser(decodedUser);
<<<<<<<< HEAD:context/authContext.jsx
      setToken(storedToken);
========
>>>>>>>> c707f17845248f5df069fde51f844f7189a4721c:context/authContext.js
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
      setUser(null);
      setToken(null);
    }
  }, [token, isAuthenticated]);

  const login = (userData) => {
    setUser(userData);
    setIsAuthenticated(true);
  };

  const logout = () => {
    sessionStorage.removeItem("token");
    setToken(null);
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        setIsAuthenticated,
        token,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    toast("useAuth must be used within an AuthProvider");
    return;
  }
  return context;
};

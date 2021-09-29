import React, { createContext } from "react";

import { useAuth } from "../hooks/useAuth";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const { isAuthenticated, isLoading, handleLogin, handleLogout } = useAuth();

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, handleLogin, handleLogout, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
}

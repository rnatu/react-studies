import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function Login() {
  const { isAuthenticated, handleLogin } = useContext(AuthContext);

  console.log("Login ", isAuthenticated);

  return (
    <button type="button" onClick={handleLogin}>
      Entrar
    </button>
  );
}

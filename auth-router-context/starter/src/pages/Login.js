import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function Login() {
  const { handleLogin } = useContext(AuthContext);

  return (
    <button type="button" onClick={handleLogin}>
      Entrar
    </button>
  );
}

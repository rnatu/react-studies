import { useState, useEffect } from "react";

import api from "../api";
import history from "../history";

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setInterval(() => {
      const token = localStorage.getItem("token");

      if (token) {
        api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
        setIsAuthenticated(true);
      }

      setIsLoading(false);
    }, 1000);
  }, []);

  async function handleLogin() {
    const {
      data: { token },
    } = await api.post("/authenticate");

    localStorage.setItem("token", JSON.stringify(token));

    api.defaults.headers.Authorization = `Bearer ${token}`;

    setIsAuthenticated(true);

    history.push("/users");
  }

  function handleLogout() {
    setIsAuthenticated(false);

    localStorage.removeItem("token");
    api.defaults.headers.Authorization = undefined;
    history.push("/login");
  }

  return { isAuthenticated, isLoading, handleLogin, handleLogout };
}

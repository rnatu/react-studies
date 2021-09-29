import React, { useState, useEffect, useContext } from "react";

import api from "../api";

import { AuthContext } from '../contexts/AuthContext'

export default function Users() {
  const { handleLogout } = useContext(AuthContext)
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await api.get("/users");

      setUsers(data);
    })();
  }, []);

  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.website})
          </li>
        ))}
      </ul>

      <button type="button" onClick={handleLogout}>Sair</button>
    </>
  );
}

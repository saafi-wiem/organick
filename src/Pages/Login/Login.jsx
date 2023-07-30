import React from "react";
import { useState } from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (email, password) => {
    try {
      await axios
        .post("https://devimmocerosapi.softylines.com/api/v1/auth/login", {
          email,
          password,
        })
        .then((res) => {
          if (res.status === 200) {
            console.log(res.data.data.tokens.accessToken);
            const token = res.data.data.tokens.accessToken;
            localStorage.setItem("token", token);
            navigate("/");
          }
        });
    } catch (error) {}
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div>
      <h1>Login</h1>
      <form action="">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleSubmit}>Login</button>
      </form>
    </div>
  );
}

export default Login;

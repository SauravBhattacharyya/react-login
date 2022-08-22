import React, { useState } from "react";
import axios from "axios";
import { GLOBAL_API } from "./types";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const obj = {
      email,
      password,
    };
    const res = await axios.post(`${GLOBAL_API}/login`, obj);
    if (res.data.status === 200) {
      navigate("/home", { state: { data: res.data.data } });
    }
  };

  return (
    <>
      <form>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </>
  );
};

export default Login;

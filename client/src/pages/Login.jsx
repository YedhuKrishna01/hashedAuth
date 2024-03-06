import { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const loginUser = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Navbar />
      <form onSubmit={loginUser}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          placeholder="enter email"
          name="email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          placeholder="enter password"
          name="password"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;

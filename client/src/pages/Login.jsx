import React from "react";
import Navbar from "../components/Navbar";

function Login() {
  const loginUser = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Navbar />
      <form onSubmit={loginUser}>
        <label htmlFor="email">Email:</label>
        <input type="email" placeholder="enter email" name="email" />
        <label htmlFor="password">Password:</label>
        <input type="password" placeholder="enter password" name="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;

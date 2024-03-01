import { useState } from "react";
import Navbar from "../components/Navbar";

function Register() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const registerUser = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Navbar />
      <form onSubmit={registerUser}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          placeholder="enter name"
          name="name"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;

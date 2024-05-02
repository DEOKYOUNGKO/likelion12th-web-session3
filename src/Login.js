/* Login.js */

import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const getId = (event) => {};

  return (
    <div className="wrapper_box">
      <h2>LOGIN</h2>
      <form className="login_form">
        <input
          type="text"
          className="login_input"
          placeholder="ID"
          onChange={getId}
        />
        <input placeholder="Password" type="Password" className="login_input" />
        <button type="submit" className="login_btn">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

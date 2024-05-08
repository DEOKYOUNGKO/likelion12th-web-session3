// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import Info from "./Info.js";
import Last from "./Last.js";
import Resolution from "./Resolution.js";
import { UserInfo } from "./UserInfo.js";
import { useEffect } from "react";

function App() {
  const [login, setLogin] = useState(false);
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const getId = (e) => {
    setId(e.target.value);
  };

  const getpassword = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    localStorage.setItem("key", JSON.stringify(UserInfo));
  }, []);

  const handleClick = () => {
    if (
      id === JSON.parse(localStorage.getItem("key")).id &&
      password === JSON.parse(localStorage.getItem("key")).password
    ) {
      setLogin(true);
    }
  };

  return login ? (
    <div className="container my-info" id="myinfo">
      <Info />
      <Resolution />
      <Last />
    </div>
  ) : (
    <div className="wrapper_box">
      <h2>LOGIN</h2>
      <form className="login_form">
        <input
          type="text"
          className="login_input"
          placeholder="ID"
          onChange={getId}
        />
        <input
          placeholder="Password"
          type="Password"
          className="login_input"
          onChange={getpassword}
        />
        <button submit="button" className="login_btn" onClick={handleClick}>
          Login
        </button>
      </form>
    </div>
  );
}

export default App;

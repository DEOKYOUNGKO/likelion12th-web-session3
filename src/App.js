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
    console.log(id);
  };

  const getpassword = (e) => {
    setPassword(e.target.value);
    console.log(password);
  };

  useEffect(() => {
    localStorage.setItem("key", JSON.stringify(UserInfo));
  }, []);

  console.log(JSON.parse(localStorage.getItem("key")).id);

  const handleClick = () => {
    if (
      id == JSON.parse(localStorage.getItem("key")).id &&
      password == JSON.parse(localStorage.getItem("key")).password
    ) {
      setLogin((prev) => !prev);
    }
  };

  return login ? (
    <div class="container my-info" id="myinfo">
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
        <button type="button" className="login_btn" onClick={handleClick}>
          Login
        </button>
      </form>
    </div>
  );
}

export default App;

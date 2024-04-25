// import logo from './logo.svg';
import "./App.css";
import Info from "./Info.js";
import Last from "./Last.js";
import Resolution from "./Resolution.js";

function App() {
  return (
    <div class="container my-info" id="myinfo">
      <Info />
      <Resolution />
      <Last />
    </div>
  );
}

export default App;

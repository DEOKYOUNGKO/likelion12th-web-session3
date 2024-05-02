import { useState } from "react";
import "./Info.css";

const Info = () => {
  const [mode, setMode] = useState(false);

  const handleClick = () => {
    setMode((prev) => !prev);
  };

  return mode ? (
    <div class="white">
      <button onClick={handleClick}>블러 처리</button>
      <div>
        <h1>DEOK YOUNG KO</h1>
      </div>
      <p>2002.05.27</p>
      <p>010-6899-7821</p>
      <p>scll0527@naver.com</p>
    </div>
  ) : (
    <div class="black">
      <button onClick={handleClick}>블러 처리 해제</button>
      <div>
        <h1>DEOK YOUNG KO</h1>
      </div>
      <p>2002.05.27</p>
      <p>010-6899-7821</p>
      <p>scll0527@naver.com</p>
    </div>
  );
};

export default Info;

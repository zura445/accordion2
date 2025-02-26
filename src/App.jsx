import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-white py-0 md:py-[65px] pr-[95px] relative">
        <div className="">
          <div className="">
            <img src="/mention.svg" alt="mention image" />
          </div>
          <div className="absolute top-[50px] md:top-[220px] md:left-[-70px]">
            <img className="w-[53px] md:w-[150px]" src="/box.svg" alt="" />
          </div>
        </div>
        <div className="">
          <h1 className="w=full">FAQ</h1>
        </div>
      </div>
    </>
  );
}

export default App;

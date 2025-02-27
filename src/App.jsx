import { useState } from "react";
import "./App.css";
import info from "./info.json";

function App() {
  const [accord, setAccord] = useState(0);

  return (
    <>
      <div className="bg-white py-0 md:py-[65px] pr-0 md:pr-[95px] min-w-[327px] rounded-lg md:flex relative md:gap-[88px] p-5 md:p-0">
        <div className="">
          <div className="hidden md:block">
            <img src="/mention-half.svg" alt="mention image" />
          </div>
          <div className="block md:hidden absolute top-[-110px] left-10">
            <img src="/mention-full.png" alt="mention image" />
          </div>
          <div className="absolute top-[-30px] left-[35px] md:top-[220px] md:left-[-70px]">
            <img
              src="/box.svg"
              alt="box image"
              className="w-[80px] md:w-[150px]"
            />
          </div>
        </div>
        <div className="mt-40 md:mt-0">
          <h1 className="text-[32px] font-bold flex justify-start">FAQ</h1>
          {info.map((item, index) => (
            <div key={index} className="">
              <div
                onClick={() => setAccord(item.id)}
                className="flex items-center mt-5 cursor-pointer"
              >
                <p
                  style={{ fontWeight: accord === item.id ? "bold" : "normal" }}
                  className="pt-2 text-left"
                >
                  {item.question}
                </p>
                <img
                  src="/arrow.png"
                  alt="arrow image"
                  className="w-4 h-3 ml-4"
                />
              </div>
              {accord === item.id ? (
                <p className="pt-2 text-left">{item.answer}</p>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;

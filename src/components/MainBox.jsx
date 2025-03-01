import React from "react";
import info from "../info.json";
import { useState } from "react";

function MainBox() {
  const [accord, setAccord] = useState(0);

  return (
    <div>
      <div className="mt-40 md:mt-0 mb-10 md:mb-0 h-[375px]">
        <h1 className="text-[32px] font-bold flex justify-start">FAQ</h1>
        {info.map((item, index) => (
          <div
            key={index}
            className="max-w-[333px] border-b-1 border-gray-300 pb-2"
          >
            <div
              onClick={() => {
                if (accord === item.id) {
                  setAccord(0);
                } else {
                  setAccord(item.id);
                }
              }}
              className="flex items-center mt-5 cursor-pointer md:w-[350px] justify-between"
            >
              <p
                style={{ fontWeight: accord === item.id ? "bold" : "normal" }}
                className="pt-2 text-left text-sm"
              >
                {item.question}
              </p>
              <img
                src="/arrow.png"
                alt="arrow image"
                className="w-4 h-3 ml-4"
                style={{
                  transform:
                    accord === item.id ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
            </div>
            {accord === item.id ? (
              <p className="pt-2 text-left text-xs text-gray-600 w-[280px] md:w-auto">
                {item.answer}
              </p>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainBox;

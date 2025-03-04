import React, { useState } from "react";
import info from "../info.json";
import Accordion from "./Accordion";

function MainBox() {
  const [accord, setAccord] = useState(0);

  return (
    <div>
      <div className="mt-40 md:mt-0 mb-10 md:mb-0 h-[375px]">
        <h1 className="text-[32px] font-bold flex justify-start">FAQ</h1>
        {info.map((item, index) => (
          <Accordion
            key={index}
            item={item}
            index={index}
            accord={accord}
            setAccord={setAccord}
          />
        ))}
      </div>
    </div>
  );
}

export default MainBox;

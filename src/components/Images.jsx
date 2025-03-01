import React from "react";

function Images() {
  return (
    <div>
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
    </div>
  );
}

export default Images;

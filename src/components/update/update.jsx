import React from "react";
import Info from "@/asserts/infoIcon.png";
import Correct from "@/asserts/correctIcon.png";
import DownArrow from "@/asserts/downArrowIcon.png";
import Image from "next/image";

const Update = () => {
  return (
    <div className="w-full p-2 sm:border-t sm:border-b flex justify-between items-center my-10 text-[11px] md:text-[14px] text-[#4B5665]">
      <div className="flex items-start justify-start sm:justify-between flex-col sm:flex-row sm:items-center gap-2 md:gap-5">
        <div className="flex justify-center items-center gap-1 md:gap-2">
          <Image
            src={Info}
            alt="info"
            width={20}
            height={20}
            className=" sm:w-[12px] sm:h-[12px]"
          />
          <h1>Last Update - February 22, 12</h1>
        </div>
        <div className="flex justify-center items-center gap-1 md:gap-2">
          <Image
            src={Correct}
            alt="info"
            width={20}
            height={20}
            className=" sm:w-[12px] sm:h-[12px]"
          />
          <h1>Advertising Disclosure</h1>
        </div>
      </div>
      <div className="flex justify-center items-center gap-1 md:gap-2">
        <h1>Top Relevant</h1>
        <Image
          src={DownArrow}
          alt="info"
          width={12}
          height={12}
          className=" sm:w-[12px] sm:h-[12px]"
        />
      </div>
    </div>
  );
};

export default Update;

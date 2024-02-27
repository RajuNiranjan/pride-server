import Image from "next/image";
import React from "react";
import DesktpIcon from "@/asserts/download 3.png";

const RelatedDealsCard = () => {
  return (
    <div className=" lg:w-[333px] rounded-md shadow-md border p-4 h-max flex flex-col gap-2">
      <div className="flex justify-center items-center">
        <Image
          src={DesktpIcon}
          alt="pcImage"
          width={50}
          height={50}
          className="w-[141px] h-[103px]"
        />
      </div>
      <ul className="flex items-center gap-2 my-4">
        <li className="bg-[#F2F4F7] w-max px-2 rounded-md py-1 text-[14px] text-[#074786]">
          20%off
        </li>
        <li className="bg-[#F2F4F7] w-max px-2 rounded-md py-1 text-[14px] text-[#074786]">
          Limited Time
        </li>
      </ul>
      <h1 className="font-bold text-[#626E79] text-[16px] text-center">
        Webbuilder1
      </h1>
      <p className="text-[#626E79] font-normal text-[16px]">
        Computer Modern clasic with wix support
      </p>
      <div className="flex items-center gap-2">
        <h1 className="text-[#5C6874] text-[20px]">$ 36.55</h1>
        <span className="text-[14px] text-[#9FA9B3]">$ 27.7</span>
        <span className="text-[#EF4C5D] text-[13px]">(20% Off)</span>
      </div>
      <div className="w-full">
        <button className="bg-[#1B88F4] text-white w-full rounded-md h-[48px] text-[16px]">
          View Deal
        </button>
      </div>
    </div>
  );
};

export default RelatedDealsCard;

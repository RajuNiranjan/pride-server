import React from "react";
import RightArrow from "@/asserts/rightArrowIcon.png";
import Image from "next/image";

const Navgation = () => {
  return (
    <div>
      <div className="flex items-center gap-2 text-[10px] sm:text-[14px]">
        <p className="text-[#727D87] sm:text-[13px]">Home</p>
        <Image src={RightArrow} alt="arrow" width={10} height={10} />
        <p className="text-[#5C6874]">Hosting for all</p>
        <Image src={RightArrow} alt="arrow" width={10} height={10} />
        <p className="text-[#727D87]">Hosting</p>
        <Image src={RightArrow} alt="arrow" width={10} height={10} />
        <p className="text-[#5C6874]">Hosting6</p>
        <Image src={RightArrow} alt="arrow" width={10} height={10} />
        <p className="text-[#5C6874]">Hosting5</p>
      </div>
    </div>
  );
};

export default Navgation;

import Image from "next/image";
import React from "react";
import DownArrow from "@/asserts/downArrowIcon.png";

const footerData = [
  {
    id: 1,
    name: "CATEGORIES",
    moreData: ["Web Builder", "Hosting", "Data Center", "Robotic-Automation"],
  },
  {
    id: 1,
    name: "CONTACT",
    moreData: [
      "Contact",
      "Private Policy",
      "Terms Of Service",
      "Categories",
      "About",
    ],
  },
];

const Footer = () => {
  return (
    <footer className="h-[452px] bg-[#212731] w-full p-10 text-white">
      <div className="flex justify-evenly items-start gap-10">
        {footerData?.map((item, index) => (
          <div key={index}>
            <h1 className="text-[16px]">{item.name}</h1>
            <ul className="flex flex-col gap-2 my-3">
              {item?.moreData?.map((item, index) => (
                <li
                  key={index}
                  className="cursor-pointer text-[13px] text-[#B6BDC4]">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="mt-10 flex items-center justify-center gap-1">
          <h1 className="text-[#B6BDC4] text-[13px]">United States</h1>
          <Image src={DownArrow} alt="rightarrow" width={25} height={25} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

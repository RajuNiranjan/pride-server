import Image from "next/image";
import React from "react";
import DesktopIcon from "@/asserts/download 3.png";
import Stars1 from "@/asserts/stars1.png";
import Stars2 from "@/asserts/stars2.png";
import Stars3 from "@/asserts/stars3.png";
import Tick from "@/asserts/tick.png";
import DownBlueArrow from "@/asserts/downBlue.png";
import Info from "@/asserts/infoIcon.png";
import Dimond from "@/asserts/dimond.png";
import Cup from "@/asserts/tropyIcon.png";

const HostingData = [
  {
    id: 1,
    image: DesktopIcon,
    name: "Builder 1",
    heading1: " WixPro 72-Inch Responsive Website Builder",
    heading2:
      "- Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
    heading3: "Main highlights",
    heading4:
      "[What You Get]: Receive the WixPro website builder suite, accessto premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
    rating: 9.8,
    openion: "Exceptional",
    stars: Stars1,
    icon: Cup,
    iconName: "Best Choice",
  },
  {
    id: 2,
    image: DesktopIcon,
    name: "Builder",
    heading1: " SiteCraft 68-Inch Ultimate Web Design Studio",
    heading2:
      "- Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)",
    heading3: "Main highlights",
    heading4:
      "[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.",
    rating: 9.5,
    openion: "Excellent",
    stars: Stars2,
    icon: Dimond,
    iconName: "Best Value",
  },
  {
    id: 3,
    image: DesktopIcon,
    name: "Builder 1",
    heading1: " WixPro 72-Inch Responsive Website Builder",
    heading2:
      "- Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
    heading3: "Main highlights",
    heading4:
      "[What You Get]: Receive the WixPro website builder suite, accessto premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
    rating: 9.3,
    openion: "Exceptional",
    stars: Stars1,
  },
  {
    id: 4,
    image: DesktopIcon,
    name: "CDK",
    heading1: " CDK Resposive Builder:",
    heading2:
      " An extensive library of widgets and apps, and detailed step-by-step guides",
    heading3: "Main highlights",
    rating: 9.1,
    openion: "Very Good",
    stars: Stars3,
    off: 26,
    box: [
      {
        rating: 9.8,
        name: "Building Responsive",
      },
      {
        rating: 8.9,
        name: "Cool",
      },
      {
        rating: 8.9,
        name: "Docs",
      },
    ],
    love: ["Documentation", "Easy Use", "Out Of Box"],
  },
];

const HostingCard = () => {
  return (
    <>
      {HostingData?.map((item, index) => (
        <div key={index} className="my-5 relative">
          <div className=" h-max w-full rounded-md  shadow-sm bg-white flex flex-col lg:flex-row justify-between gap-3 ">
            <div className="basis-[50%] flex justify-center items-center p-3 w-full  lg:justify-center gap-5 lg:items-center flex-col  px-3">
              <Image
                src={item?.image}
                alt="pc"
                width={100}
                height={100}
                className="w-[141px] h-[103px]"
              />
              <p className="text-[#626E79] text-[14px]">{item?.name}</p>
            </div>
            <div className="basis-[100%] flex flex-col gap-2 p-3 ">
              <div className="flex flex-col gap-2 text-[#4B5665] lg:text-[12px] xl:text-[16px]">
                <h1 className="">
                  <span className="font-bold">{item?.heading1}</span>
                  {item?.heading2}
                </h1>
                {item?.off && (
                  <p className="bg-[#F2F4F7] text-[13px] text-[#074786] rounded-md p-1 w-max">
                    {item?.off} % Off
                  </p>
                )}
                <div>
                  {item?.heading3 && (
                    <h1 className="text-[#2C384A] font-bold">
                      {item?.heading3}
                    </h1>
                  )}

                  {item?.heading4 && (
                    <p className="ml-5 mt-3">{item?.heading4}</p>
                  )}
                </div>
              </div>
              {item?.box && (
                <div className="w-full lg:ml-10 flex flex-col gap-3 rounded-md p-3 bg-[#FFF4ED]">
                  {item?.box?.map((item, index) => (
                    <div key={index} className="flex items-center gap-2 ">
                      <p className="bg-white w-10 flex justify-center items-center text-[#1B88F4] rounded-md h-7">
                        {item?.rating}
                      </p>
                      <p className="text-[#4B5665] text-[15px]">{item?.name}</p>
                    </div>
                  ))}
                </div>
              )}
              {item?.love && (
                <div className="my-2">
                  <p className="text-[16px]">Why we love it</p>
                  <ul className="flex flex-col gap-2 my-2">
                    {item?.love?.map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Image src={Tick} alt="tick" width={24} height={24} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="flex items-center mt-3">
                <p className="text-[#1B88F4] text-[16px]">Show more </p>
                <Image src={DownBlueArrow} alt="pc" width={16} height={16} />
              </div>
            </div>
            <div className="basis-[50%] flex flex-col items-center justify-between">
              <div className="bg-[#F3F9FF] w-[135px] h-[118px]  px-5 flex justify-center items-center flex-col rounded-b-xl">
                <div className="flex ml-14 items-end justify-end ">
                  <Image src={Info} alt="info" width={10} height={10} />
                </div>
                <h1 className="text-[32px] text-[#074786]">{item?.rating}</h1>
                <p className="text-[14px] text-[#074786]">{item?.openion}</p>
                <Image src={item?.stars} alt="stars" width={66} height={11} />
              </div>
              <div className="w-[232px] p-2">
                <button className="bg-[#1B88F4] text-white w-full rounded-md h-[48px] text-[16px]">
                  View
                </button>
              </div>
            </div>
          </div>
          <div className="absolute -left-5 top-5">
            <h1 className="h-10 w-10 rounded-full border flex justify-center items-center ">
              {item?.id}
            </h1>
          </div>
          <div className="absolute left-0 -top-8">
            {item?.icon && item?.iconName && (
              <div className=" bg-[#FF7724] rounded-r-lg gap-2 h-8 w-[136px] flex justify-center items-center">
                <Image src={item?.icon} alt="imd" width={20} height={20} />
                <h1 className="text-white text-[16px]">{item?.iconName}</h1>
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default HostingCard;

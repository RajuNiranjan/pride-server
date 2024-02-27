import React from "react";

const ModelData = [
  "Tools",
  "AWS Builder",
  "Start Build",
  "Build Supplies",
  "Tooling",
  "BlueHosting",
];

const Model = () => {
  return (
    <div className="flex items-center gap-5 flex-wrap my-5 ">
      {ModelData?.map((item, index) => (
        <div
          key={index}
          className="bg-white w-max shadow-sm text-[14px] text-[#4B5665] px-3 py-1  rounded-lg flex justify-center items-center">
          <h1>{item}</h1>
        </div>
      ))}
    </div>
  );
};

export default Model;

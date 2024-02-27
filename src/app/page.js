import SignUp from "@/components/signup/signup";
import React from "react";

const Home = () => {
  return (
    <div className=" px-10 sm:px-20 lg:px-40 py-10">
      <h1 className="text-xl md:text-[28px] lg:text-[48px] text-[#2C384A]">
        Best Website builder in the US
      </h1>
      <div>
        <SignUp />
      </div>
    </div>
  );
};

export default Home;

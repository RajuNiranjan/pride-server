import React from "react";

const SignUp = () => {
  return (
    <div className=" sm:h-[170px] my-10 w-full  flex flex-col sm:flex-row gap-2  sm:justify-between items-center">
      <div>
        <h1 className="hidden sm:inline sm:text-[20px] md:text-[22px] lg:text-[26px] xl:text-[32px] text-[#5C6874]">
          Sign up and get exclusive <br />
          special deals
        </h1>
        <h1 className="sm:hidden text-md text-[#5C6874]">
          Sign up and get exclusive special deals
        </h1>
      </div>
      <div className="h-[52px]  flex items-center justify-center  sm:w-[200px]  md:w-max lg:w-[300px]">
        <input
          type="text"
          className="focus:outline-none w-full h-full px-2 border rounded-l-lg lg:w-[348px]"
        />
        <button className="bg-[#1B88F4] h-full w-[100px] lg:w-[97px] text-white rounded-r-xl flex justify-center items-center  text-[14px]">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SignUp;

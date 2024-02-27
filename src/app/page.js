import Hosting from "@/components/hosting/hosting";
import Navgation from "@/components/navgation/navgation";
import RelatedDeals from "@/components/related_deals/ralated_deals";
import SignUp from "@/components/signup/signup";
import Update from "@/components/update/update";
import Model from "@/ui/model";
import React from "react";

const Home = () => {
  return (
    <div className=" px-10 sm:px-20 lg:px-40 py-10">
      <h1 className="text-xl md:text-[28px] lg:text-[48px] text-[#2C384A]">
        Best Website builder in the US
      </h1>
      <div>
        <Update />
        <Model />
        <Navgation />
        <div>
          <Hosting />
        </div>
        <RelatedDeals />
        <SignUp />
      </div>
    </div>
  );
};

export default Home;

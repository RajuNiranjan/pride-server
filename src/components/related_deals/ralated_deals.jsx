import RelatedDealsCard from "@/ui/related_deals_card";
import React from "react";

const RelatedDeals = () => {
  return (
    <div className="my-10">
      <h1 className="text-[20px] sm:text-[26px] md:text-[32px] text-[#2C384A]">
        Related deals you might like for
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 xl:grid-cols-3 my-5">
        <RelatedDealsCard />
        <RelatedDealsCard />
        <RelatedDealsCard />
      </div>
    </div>
  );
};

export default RelatedDeals;

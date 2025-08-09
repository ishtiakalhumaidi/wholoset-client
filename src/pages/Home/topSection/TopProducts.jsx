import React from "react";
import Top from "./Top";

const TopProducts = () => {
  return (
    <div className="py-16 px-4 md:px-10 lg:px-20 bg-base-100">
      {/* Header Section */}
      <div className="flex flex-col justify-center items-center text-center mb-12">
        <h2 className="text-4xl md:text-6xl font-bold text-primary  leading-tight mb-4">
          You Deserve More Than Just a Deal
        </h2>
        <p className="text-content text-lg max-w-2xl">
          Explore handpicked bestsellers, top-rated choices, and unbeatable bulk
          offers — all crafted to give you more value, more trust, and more joy
          with every purchase.
        </p>
      </div>

      {/* Section Block */}
      <div className="space-y-16">
        <Top category={"New Arrival"} />
        <Top category={"Trending"} />
        <Top category={"Offers"} />
        <Top category={"Rating"} />
      </div>
    </div>
  );
};

export default TopProducts;

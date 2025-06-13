import React from "react";
import ProductCard from "../../components/ui/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

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
        {/* Top Offers */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-semibold text-primary">Top Offers</h3>
            <button className="btn btn-outline btn-sm">View More</button>
          </div>

          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            navigation
            className="!px-2 custom-swiper-nav"
          >
            {[...Array(10)].map((_, index) => (
              <SwiperSlide key={index}>
                <ProductCard />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Top Rated */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-semibold text-primary">
              Top Rated Products
            </h3>
            <button className="btn btn-outline btn-sm">View More</button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>

        {/* Trending */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-semibold text-primary">
              Trending Products
            </h3>
            <button className="btn btn-outline btn-sm">View More</button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopProducts;

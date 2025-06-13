import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { IoArrowDown } from "react-icons/io5";

const Banner = () => {
  return (
    <div>
      <div className="relative bg-gray-900 -z-10">
        <div className="absolute inset-x-0 bottom-0">
          <svg
            viewBox="0 0 224 12"
            fill="currentColor"
            className="w-full -mb-1 text-base-100"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
          </svg>
        </div>
        <div className=" pb-10">
          <div className="relative ">
           <Swiper
  cssMode={true}
  navigation={true}
  pagination={true}
  mousewheel={true}
  keyboard={true}
  modules={[Navigation, Pagination, Mousewheel, Keyboard]}
  className="mySwiper"
>
  {/* slider-1 */}
  <SwiperSlide>
    <div className="flex flex-col-reverse md:flex-row gap-6 w-10/12 mx-auto py-10">
      <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-2xl lg:text-left">
        <p className="font-bold uppercase text-primary font-accent">Limited-Time Tech Deal</p>
        <h1 className="text-5xl font-bold leading-none sm:text-6xl text-white">
          40% Off Bulk Electronics!
        </h1>
        <p className="mt-6 mb-8 text-lg sm:mb-12 text-gray-300">
          Stock up on laptops, smartphones & accessories. Min order: 50 units.
        </p>
        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
          <a href="#electronics" className="btn btn-accent font-accent rounded-full">
            Claim Deal Now
          </a>
        </div>
      </div>
      <div className="flex justify-center items-center flex-1/3">
        <img
          className="object-cover w-10/12 max-h-[500px] rounded-2xl"
          src="https://i.postimg.cc/T3qYvC8f/image.png"
          alt="Bulk Electronics Offer"
        />
      </div>
    </div>
  </SwiperSlide>

  {/* slider-2 */}
  <SwiperSlide>
    <div className="flex flex-col-reverse md:flex-row gap-6 w-10/12 mx-auto py-10">
      <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-2xl lg:text-left">
        <p className="font-bold uppercase text-primary font-accent">Exclusive Fashion Drop</p>
        <h1 className="text-5xl font-bold leading-none sm:text-6xl text-white">
          Apparel Bundles at $2.99/Unit!
        </h1>
        <p className="mt-6 mb-8 text-lg sm:mb-12 text-gray-300">
          Premium tees, jackets & uniforms. Limited stock, min order: 50 units.
        </p>
        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
          <a href="#apparel" className="btn btn-accent font-accent  rounded-full">
            Secure Stock Now
          </a>
        </div>
      </div>
      <div className="flex justify-center  items-center flex-1/3">
        <img
          className="object-cover w-10/12 max-h-[500px] rounded-2xl"
          src="https://i.postimg.cc/j50D31Gp/image.png"
          alt="Bulk Fashion Offer"
        />
      </div>
    </div>
  </SwiperSlide>

  {/* slider-3 */}
  <SwiperSlide>
    <div className="flex flex-col-reverse md:flex-row gap-6 w-10/12 mx-auto py-10">
      <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-2xl lg:text-left">
        <p className="font-bold uppercase text-primary font-accent">Heavy-Duty Savings</p>
        <h1 className="text-5xl font-bold leading-none sm:text-6xl text-white">
          30% Off Industrial Machinery!
        </h1>
        <p className="mt-6 mb-8 text-lg sm:mb-12 text-gray-300">
          Top-tier tools & equipment, direct from makers. Min order: 50 units.
        </p>
        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
          <a href="#machinery" className="btn btn-accent font-accent  rounded-full">
            Lock in Savings
          </a>
        </div>
      </div>
      <div className="flex justify-center items-center flex-1/3">
        <img
          className="object-cover w-10/12 max-h-[500px] rounded-2xl"
          src="https://i.postimg.cc/V68j05L0/image.png"
          alt="Bulk Machinery Offer"
        />
      </div>
    </div>
  </SwiperSlide>
</Swiper>
            <a
              href="#categories"
              aria-label="Scroll down"
              className="flex items-center justify-center w-10 h-10 mx-auto text-white duration-300 transform border border-gray-400 rounded-full hover:text-teal-accent-400 hover:border-teal-accent-400 hover:shadow hover:scale-110"
            >
              <IoArrowDown />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

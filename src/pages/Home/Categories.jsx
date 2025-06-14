import React, { useEffect } from "react";
import CategoryCard from "../../components/ui/CategoryCard";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { GiClothes } from "react-icons/gi";
import { GrVirtualMachine } from "react-icons/gr";
import { IoHomeOutline } from "react-icons/io5";
import { PiBuildingOffice } from "react-icons/pi";
import {
  MdOutlineHealthAndSafety,
  MdOutlineChair,
  MdOutlineSportsSoccer,
} from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

const Categories = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  const categories = [
    { name: "Electronics & Gadgets", icon: HiOutlineDevicePhoneMobile },
    { name: "Apparel & Fashion", icon: GiClothes },
    { name: "Industrial Machinery", icon: GrVirtualMachine },
    { name: "Home Appliances", icon: IoHomeOutline },
    { name: "Office Supplies", icon: PiBuildingOffice },
    { name: "Health & Personal Care", icon: MdOutlineHealthAndSafety },
    { name: "Furniture & Decor", icon: MdOutlineChair },
    { name: "Sporting Goods", icon: MdOutlineSportsSoccer },
  ];
  return (
    <div id="categories" className="max-w-11/12 mx-auto my-20">
      <div className="flex flex-col justify-center items-center text-center ">
        <h2 className="text-4xl md:text-6xl font-bold text-primary mb-2 ">
          Explore Our Product by Categories
        </h2>
        <p className="text-content text-lg max-w-2xl mx-auto mb-10">
          From industrial machinery to fashion and gadgets — discover
          high-demand products at wholesale prices for your business.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-6 max-w-10/12 mx-auto">
        {categories.map((category, index) => (
          <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
            <CategoryCard name={category.name} icon={category.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;

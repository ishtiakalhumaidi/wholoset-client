import Navbar from "daisyui/components/navbar";
import React from "react";
import Banner from "./Banner";
import Categories from "./Categories";
import WhyChoose from "./WhyChoose";
import ProductCard from "../../components/ui/ProductCard";
import TopProducts from "./topSection/TopProducts";

const Home = () => {
  return (
    <div>
      <title>Home | Wholoset</title>
      <Banner />
      <Categories />
      <TopProducts />
      <WhyChoose />
    </div>
  );
};

export default Home;

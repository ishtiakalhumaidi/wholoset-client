import Navbar from "daisyui/components/navbar";
import React from "react";
import Banner from "./Banner";
import Categories from "./Categories";
import WhyChoose from "./WhyChoose";
import ProductCard from "../../components/ui/ProductCard";
import TopProducts from "./topSection/TopProducts";
import FAQ from "./FAQ";

const Home = () => {
  return (
    <div>
      <title>Home | Wholoset</title>
      <Banner />
      <Categories />
      <TopProducts />
      <WhyChoose />
      <FAQ/>
    </div>
  );
};

export default Home;

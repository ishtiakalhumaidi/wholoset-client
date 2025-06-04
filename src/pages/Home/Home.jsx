import Navbar from "daisyui/components/navbar";
import React from "react";
import Banner from "./Banner";
import Categories from "./Categories";
import WhyChoose from "./WhyChoose";

const Home = () => {
  return (
    <div>
      <Banner />
      <Categories />
      <WhyChoose />
    </div>
  );
};

export default Home;

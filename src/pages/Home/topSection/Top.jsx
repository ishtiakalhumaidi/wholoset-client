import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import axios from "axios";
import ProductCard from "../../../components/ui/ProductCard";
import { Link } from "react-router";

const Top = ({ category }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(
        `http://localhost:3000/top-products?category=${category.toLowerCase()}`
      )
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.log(error.code);
      });
  }, [category]);
  return (
    <div className="mb-16">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-semibold text-primary">Top {category}</h3>
        <Link to={"/all-product"} className="btn btn-outline btn-sm">
          View More
        </Link>
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        autoHeight={false}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        navigation
        className="!px-2 custom-swiper-nav"
      >
        {products.map((product) => (
          <SwiperSlide key={product._id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Top;

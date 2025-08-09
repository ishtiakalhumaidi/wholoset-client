import React, { useEffect, useState } from "react";
import ProductCard from "../components/ui/ProductCard";
import TableProductCard from "../components/ui/TableProductCard";
import { CiGrid41, CiViewTable } from "react-icons/ci";
import { useLoaderData } from "react-router";
import axios from "axios";

const AllProduct = () => {
  const [view, setView] = useState("grid");
  const [products, setProducts] = useState([]);
  const [sortby, setSortby] = useState("");

  const handleSort = (value) => {
    console.log(value);
    setSortby(value);
  };
  useEffect(() => {
    const filterBy = async () => {
      const res = await axios.get(
        `
https://wholoset-server.vercel.app/products?sortby=${sortby}`
      );
      setProducts(res.data);
      console.log(res.data);
    };
    filterBy();
  }, [sortby]);

  return (
    <div className="w-10/12 mx-auto">
      <title>All Products | Wholoset</title>
      <div className="flex justify-between my-10">
        <div>
          <h2 className="text-3xl text-primary font-accent">All Products</h2>
          <p>Explore our all type of products here</p>
        </div>

        <div className=" space-x-3 flex items-center">
          <select
            onChange={(e) => handleSort(e.target.value)}
            className="text-base-content bg-base-300 py-3 px-1 rounded-lg place-self-start"
            defaultValue=""
          >
            <option value="">Filter By (Default)</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
            <option value="popularity"> Popularity</option>
            <option value="discount"> Discount</option>
            <option value="newest">Newest Arrivals</option>
            <option value="rating">Highest Rating</option>
          </select>
          <div className="btn-group  join join-horizontal mb-4">
            <button
              onClick={() => setView("grid")}
              className={`btn join-item ${
                view === "grid" ? "btn-primary text-white" : "btn-ghost  "
              }`}
            >
              <CiGrid41 className="text-xl" />
            </button>

            <button
              onClick={() => setView("table")}
              className={`btn join-item ${
                view === "table" ? "btn-primary text-white" : "btn-ghost"
              }`}
            >
              <CiViewTable className="text-xl" />
            </button>
          </div>
        </div>
      </div>

      <div
        className={`${
          view === "grid"
            ? "grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-4"
            : "overflow-auto"
        }`}
      >
        {view === "grid" ? (
          products.map((product) => (
            <ProductCard product={product} key={product._id} />
          ))
        ) : (
          <table className="table w-full text-sm ">
            <thead>
              <tr className="text-base-content  bg-base-200 text-center">
                <th>Image</th>
                <th className="text-left">Product Info</th>
                <th>Price</th>
                <th>Rating</th>
                <th className="text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <TableProductCard product={product} key={product._id} />
              ))}
              {/* Include the <tr> from above */}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AllProduct;

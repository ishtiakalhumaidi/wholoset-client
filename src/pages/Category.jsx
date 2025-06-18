import React, { useState } from "react";
import ProductCard from "../components/ui/ProductCard";
import TableProductCard from "../components/ui/TableProductCard";
import { CiGrid41, CiViewTable } from "react-icons/ci";
import { useLoaderData, useParams } from "react-router";

const Category = () => {
  const [view, setView] = useState("grid");
  const products = useLoaderData();
  const { name } = useParams();
  const category = name
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className="w-10/12 mx-auto">
      <title>Category | Wholoset</title>
      <div className="flex justify-between my-10">
        <div>
          <h2 className="text-3xl text-primary font-accent">{category}</h2>
          <p>Explore our all {category.toLowerCase()} products here</p>
        </div>
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

export default Category;

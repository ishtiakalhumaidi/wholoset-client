import React, { useState } from "react";
import ProductCard from "../components/ui/ProductCard";
import TableProductCard from "../components/ui/TableProductCard";
import { CiGrid41, CiViewTable } from "react-icons/ci";

const AllProduct = () => {
  const [view, setView] = useState("grid");
  return (
    <div>
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

    
      <div>
        {view === "grid" ? (
          <ProductCard />
        ) : (
          <table className="table w-full text-sm">
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
              <TableProductCard />
              {/* Include the <tr> from above */}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AllProduct;

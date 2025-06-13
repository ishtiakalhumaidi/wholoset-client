import React from "react";

const TableProductCard = () => {
  return (
    <tr className="bg-base-100 border-b border-base-300">
      {/* Image */}
      <td className="p-4">
        <img
          src="https://cdn11.bigcommerce.com/s-21x65e8kfn/images/stencil/original/products/70526/359688/UND9194_1000_11__50731.1747992022.jpg"
          alt="Product"
          className="w-28 h-28 object-cover rounded-lg"
        />
      </td>

      {/* Product Info */}
      <td className="p-4 space-y-1">
        <h2 className="text-lg font-bold text-base-content">
          Elite Sports Shoes
        </h2>
        <p className="text-sm">
          <span className="font-medium">Brand:</span> Nike
        </p>
        <p className="text-sm">
          <span className="font-medium">Category:</span> Athletic Footwear
        </p>
        <p className="text-sm">
          <span className="font-medium">Min Qty:</span> 10 pairs
        </p>
        <p className="text-xs text-gray-500">
          High-performance running shoes designed for durability, speed, and
          comfort.
        </p>
      </td>

      {/* Pricing */}
      <td className="p-4 text-center">
        <p className="text-base font-semibold text-accent">$25.00 / pair</p>
        <p className="text-sm line-through text-gray-400">$30.00</p>
        <span className="badge badge-primary badge-sm mt-1">Save 17%</span>
      </td>

      {/* Rating */}
      <td className="p-4 text-center">
        <div className="rating rating-sm justify-center">
          <input
            type="radio"
            name="rating-1"
            className="mask mask-star-2 bg-yellow-400"
            checked
            readOnly
          />
          <input
            type="radio"
            name="rating-1"
            className="mask mask-star-2 bg-yellow-400"
            checked
            readOnly
          />
          <input
            type="radio"
            name="rating-1"
            className="mask mask-star-2 bg-yellow-400"
            checked
            readOnly
          />
          <input
            type="radio"
            name="rating-1"
            className="mask mask-star-2 bg-yellow-400"
            readOnly
          />
          <input
            type="radio"
            name="rating-1"
            className="mask mask-star-2 bg-yellow-400"
            readOnly
          />
        </div>
        <p className="text-xs text-gray-500 mt-1">4.2 (15k)</p>
      </td>

      {/* Actions */}
      <td className="p-4 text-right space-x-2">
        <button className="btn btn-sm btn-secondary rounded-xl border-0">
          Add to Cart
        </button>
        <button className="btn btn-sm btn-outline btn-accent rounded-xl">
          Details
        </button>
      </td>
    </tr>
  );
};

export default TableProductCard;

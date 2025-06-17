import React from "react";
import { Link } from "react-router";

const TableProductCard = ({ product }) => {
  const {
    brand,
    category,
    description,
    image,
    minQuantity,
    name,
    price,
    rating,
    oldPrice,
    discount,
  } = product;
  return (
    <tr className="bg-base-100 border-b border-base-300">
      {/* Image */}
      <td className="p-4">
        <img
          src={image}
          alt="Product"
          className="w-28 h-28 object-cover rounded-lg"
        />
      </td>

      {/* Product Info */}
      <td className="p-4 space-y-1">
        <h2 className="text-base sm:text-lg font-bold text-base-content">
          {name}
        </h2>
        <p className="text-sm">
          <span className="font-medium">Brand:</span> {brand}
        </p>
        <p className="text-sm">
          <span className="font-medium">Category:</span> {category}
        </p>
        <p className="text-sm">
          <span className="font-medium">Min Qty:</span> {minQuantity} pairs
        </p>
        <p className="text-xs text-gray-500">{description.split(" ").slice(0, 9).join(" ")}...</p>
      </td>

      {/* Pricing */}
      <td className="p-4 text-center">
        <p className="text-base font-semibold text-accent">${price} / pair</p>
        <p className="text-sm line-through text-gray-400">${oldPrice}</p>
        <span className="badge badge-primary badge-sm py-4 sm:py-2 mt-1">
          Save {discount}%
        </span>
      </td>

      {/* Rating */}
      <td className="p-4 text-center">
        <div className="rating rating-sm justify-center">
          {[...Array(5)].map((_, index) => (
            <input
              key={index}
              type="radio"
              name={`rating-${name}`}
              className={`mask mask-star-2 opacity-100 ${
                index < parseInt(rating) ? "bg-yellow-400 " : "bg-base-300"
              }`}
              readOnly
              disabled
            />
          ))}
        </div>
        <p className="text-xs text-gray-500 mt-1">{rating} (15k)</p>
      </td>

      {/* Actions */}
      <td className="p-4 text-right space-x-2">
       <Link
            to={`/product-details/${product._id}`}
            className="btn btn-outline btn-accent rounded-lg w-full"
          >
            Details
          </Link>
      </td>
    </tr>
  );
};

export default TableProductCard;

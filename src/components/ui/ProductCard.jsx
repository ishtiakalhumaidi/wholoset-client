import React from "react";
import { Link } from "react-router";
// import ReactStars from "react-rating-stars-component";

const ProductCard = ({ product }) => {
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
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-base-100 border border-base-300 hover:scale-103 duration-700 my-2">
      <figure className=" p-4 pb-0">
        <img
          src={image}
          alt="Product Image"
          className="w-full object-cover h-48 rounded-lg"
        />
      </figure>
      <div className="p-5 space-y-2">
        <h2 className="text-xl font-bold text-base-content">{name}</h2>
        <p className="text-sm text-base-content">
          <span className="font-medium">Brand:</span> {brand}
        </p>
        <p className="text-sm text-base-content">
          <span className="font-medium">Category:</span> {category}
        </p>
        <p className="text-sm text-base-content">
          <span className="font-medium">Min Qty:</span> {minQuantity} pairs
        </p>
        <p className="text-sm text-base-content mt-1">{description}</p>
        <div className="mt-2">
          <p className="text-lg font-semibold text-accent">
            ${price.toFixed(2)} / pair
          </p>
          <div className="flex items-center gap-1">
            {" "}
            <p className="line-through text-sm text-gray-400">
              ${oldPrice.toFixed(2)}{" "}
            </p>{" "}
            <span className="badge badge-primary badge-sm ">
              Save {parseFloat(discount).toFixed(1)}%
            </span>
          </div>
        </div>
        <div className="flex items-center gap-1 mt-2">
          <div className="rating rating-sm">
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

          <span className="text-sm text-gray-500 ml-1">
            {rating} (15k reviews)
          </span>
        </div>
        <div className="mt-4 flex gap-2">
          <Link
            to={`/product-details/${product._id}`}
            className="btn btn-outline btn-accent rounded-lg w-full"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

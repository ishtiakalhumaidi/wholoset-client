import React from "react";
// import ReactStars from "react-rating-stars-component";

const ProductCard = () => {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-base-100 border border-base-300">
      <figure className="bg-primary p-4">
        <img
          src="https://via.placeholder.com/300x200"
          alt="Product Image"
          className="w-full object-cover h-48 rounded-lg"
        />
      </figure>
      <div className="p-5 space-y-2">
        <h2 className="text-xl font-bold text-base-content">Elite Sports Shoes</h2>
        <p className="text-sm text-base-content">
          <span className="font-medium">Brand:</span> Nike
        </p>
        <p className="text-sm text-base-content">
          <span className="font-medium">Category:</span> Athletic Footwear
        </p>
        <p className="text-sm text-base-content">
          <span className="font-medium">Min Qty:</span> 10 pairs
        </p>
        <p className="text-sm text-base-content mt-1">
          High-performance running shoes designed for durability, speed, and
          comfort — ideal for bulk purchase.
        </p>
        <div className="mt-2">
          <p className="text-lg font-semibold text-accent">$25.00 / pair</p>
          <div className="flex items-center gap-1">
            {" "}
            <p className="line-through text-sm text-gray-400">$30.00 </p>{" "}
            <span className="badge badge-primary badge-sm ">Save 17%</span>
          </div>
        </div>
        <div className="flex items-center gap-1 mt-2">
          <div className="rating rating-sm">
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
          <span className="text-sm text-gray-500 ml-1">4.2 (15k reviews)</span>
        </div>
        <div className="mt-4 flex gap-2">
          <button className="btn btn-secondary rounded-l-2xl border-none flex-1">
            Add to Cart
          </button>
          <button className="btn btn-outline btn-accent rounded-r-2xl">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

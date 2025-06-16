import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../contexts/AuthContext";

const ProductDetails = () => {
  const { user } = useContext(AuthContext);
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(0);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setQuantity(res.data.minQuantity || 0);
      })
      .catch((err) => {
        console.error("Fetching error", err);
      });
  }, [id]);

  const isTooLow = quantity < product.minQuantity;
  const isTooHigh = quantity > product.mainQuantity;
  const isInvalid = isTooLow || isTooHigh;

  const suggestedQuantities = [
    product.minQuantity || 0,
    (product.minQuantity || 0) + 10,
    (product.minQuantity || 0) + 20,
  ];

  const handleAddCart = () => {
    const data = { productId: id, quantity, action: "add" };
    axios
      .patch(`http://localhost:3000/users/cart?email=${user.email}`, data)
      .then((res) => {
        console.log(res.data);
        
        return axios.get(`http://localhost:3000/products/${id}`);
      })
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.error("An error occurred", err);
      });
  };

  return (
    <div className="max-w-6xl mx-auto p-6 md:p-10 bg-white dark:bg-base-200 rounded-2xl shadow-xl my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-xl object-cover shadow-md"
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-4xl font-bold text-primary font-secondary">
            {product.name}
          </h2>
          <p className="text-base-content font-accent">
            <span className="font-bold">Brand:</span> {product.brand}
          </p>
          <p className="text-base-content font-accent">
            <span className="font-bold">Category:</span> {product.category}
          </p>
          <p className="text-base-content font-accent">
            <span className="font-bold">Available Quantity:</span>{" "}
            {product.mainQuantity}
          </p>
          <p className="text-base-content font-accent">
            <span className="font-bold">Minimum Order Quantity:</span>{" "}
            {product.minQuantity}
          </p>
          <p className="text-base-content font-accent">
            <span className="font-bold">Price:</span> $
            {product.price?.toFixed(2)} / unit
          </p>
          <p className="text-base-content font-accent">
            <span className="font-bold">Rating:</span> ⭐{" "}
            {product.rating?.toFixed(1)} / 5
          </p>
          <p className="text-sm font-primary text-base-content">
            <span className="font-bold font-accent">Description:</span>{" "}
            {product.description}
          </p>

          <div className="mt-4">
            <label className="block text-sm font-semibold text-base-content font-accent mb-1">
              Select Quantity:
            </label>

            <div className="flex gap-2 mb-3">
              {suggestedQuantities.map((qty) => (
                <button
                  key={qty}
                  type="button"
                  onClick={() => setQuantity(qty)}
                  className="btn btn-sm btn-outline rounded-xl font-primary"
                >
                  {qty}
                </button>
              ))}
            </div>

            <input
              type="number"
              value={quantity}
              onChange={(e) => {
                const value = parseInt(e.target.value);
                setQuantity(isNaN(value) ? "" : value);
              }}
              min="1"
              className="input input-bordered border-2 border-gray-300 focus:border-accent rounded-xl w-32 focus:outline-none font-primary"
            />

            {isTooLow && (
              <p className="text-red-500 text-sm mt-1 font-primary">
                Quantity must be at least {product.minQuantity}.
              </p>
            )}
            {isTooHigh && (
              <p className="text-red-500 text-sm mt-1 font-primary">
                Only {product.mainQuantity} units available.
              </p>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button
              className="btn btn-secondary rounded-xl font-primary"
              onClick={handleAddCart}
              disabled={isInvalid}
            >
              Add to Cart
            </button>
            <button
              className="btn btn-primary rounded-xl font-primary"
              onClick={() =>
                console.log("Buying now:", { ...product, quantity })
              }
              disabled={isInvalid}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

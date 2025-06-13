import React, { useState } from "react";

const ProductDetails = () => {
  const product = {
    image: "https://example.com/product.jpg",
    name: "Industrial Drill Machine",
    brand: "Bunngle Ltd.",
    category: "Industrial Machinery & Tools",
    mainQuantity: 100,
    minQuantity: 10,
    price: 49.99,
    rating: 4.5,
    description:
      "High-performance industrial-grade drill machine suitable for heavy-duty tasks. Built with precision and durability in mind.",
  };

  const [quantity, setQuantity] = useState(product.minQuantity);

  const isTooLow = quantity < product.minQuantity;
  const isTooHigh = quantity > product.mainQuantity;
  const isInvalid = isTooLow || isTooHigh;

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      setQuantity(value);
    } else {
      setQuantity("");
    }
  };

  const handleSuggestedClick = (value) => {
    setQuantity(value);
  };

  const suggestedQuantities = [product.minQuantity, product.minQuantity + 10, product.minQuantity + 20];

  const handleAddToCart = () => {
    console.log("Added to cart:", { ...product, quantity });
  };

  const handleBuyNow = () => {
    console.log("Buying now:", { ...product, quantity });
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
          <h2 className="text-4xl font-bold text-primary font-secondary">{product.name}</h2>
          <p className="text-base-content font-accent">
            <span className="font-bold">Brand:</span> {product.brand}
          </p>
          <p className="text-base-content font-accent">
            <span className="font-bold">Category:</span> {product.category}
          </p>
          <p className="text-base-content font-accent">
            <span className="font-bold">Available Quantity:</span> {product.mainQuantity}
          </p>
          <p className="text-base-content font-accent">
            <span className="font-bold">Minimum Order Quantity:</span> {product.minQuantity}
          </p>
          <p className="text-base-content font-accent">
            <span className="font-bold">Price:</span> ${product.price.toFixed(2)} / unit
          </p>
          <p className="text-base-content font-accent">
            <span className="font-bold">Rating:</span> ⭐ {product.rating} / 5
          </p>

          <p className=" text-sm font-primary text-base-content ">
            <span className="font-bold font-accent">Description:</span> {product.description}
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
                  onClick={() => handleSuggestedClick(qty)}
                  className="btn btn-sm btn-outline rounded-xl font-primary"
                >
                  {qty}
                </button>
              ))}
            </div>

           
            <input
              type="number"
              value={quantity}
              onChange={handleInputChange}
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

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button
              className="btn btn-accent rounded-xl font-primary"
              onClick={handleAddToCart}
              disabled={isInvalid}
            >
              Add to Cart
            </button>
            <button
              className="btn btn-primary rounded-xl font-primary"
              onClick={handleBuyNow}
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

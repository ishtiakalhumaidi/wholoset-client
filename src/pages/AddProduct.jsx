import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Product Submitted:", data);
    await new Promise((resolve) => setTimeout(resolve, 500));
    toast.success("Product added successfully!");
    reset();
  };

  return (
    <div className="max-w-5xl mx-auto p-8 bg-white dark:bg-base-200 rounded-2xl shadow-xl">
      <h2 className="text-4xl font-bold text-center text-primary mb-10 font-secondary">
        Submit New Product
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* Image & Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Image Upload */}
          <label className="form-control w-full">
            <span className="label-text font-semibold text-base-content mb-1">
              Product Image URL
            </span>
            <input
              type="url"
              {...register("image", { required: "Image URL is required" })}
              placeholder="https://example.com/image.jpg"
              className="focus:outline-0 focus:border-accent input input-bordered w-full"
            />
            {errors.image && (
              <span className="text-red-500 text-sm mt-1">
                {errors.image.message}
              </span>
            )}
          </label>

          {/* Product Name */}
          <label className="form-control w-full">
            <span className="label-text font-semibold text-base-content mb-1">
              Product Name
            </span>
            <input
              type="text"
              {...register("name", { required: "Product name is required" })}
              placeholder="e.g. Industrial Drill Machine"
              className="focus:outline-0 focus:border-accent input input-bordered w-full"
            />
            {errors.name && (
              <span className="text-red-500 text-sm mt-1">
                {errors.name.message}
              </span>
            )}
          </label>
        </div>

        {/* Quantity & Min Quantity */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <label className="form-control w-full">
            <span className="label-text font-semibold text-base-content mb-1">
              Main Quantity
            </span>
            <input
              type="number"
              min="1"
              {...register("mainQuantity", {
                required: "Main quantity is required",
              })}
              placeholder="e.g. 100"
              className="focus:outline-0 focus:border-accent input input-bordered w-full"
            />
            {errors.mainQuantity && (
              <span className="text-red-500 text-sm mt-1">
                {errors.mainQuantity.message}
              </span>
            )}
          </label>

          <label className="form-control w-full">
            <span className="label-text font-semibold text-base-content mb-1">
              Minimum Selling Quantity
            </span>
            <input
              type="number"
              min="1"
              {...register("minQuantity", {
                required: "Minimum quantity is required",
              })}
              placeholder="e.g. 10"
              className="focus:outline-0 focus:border-accent input input-bordered w-full"
            />
            {errors.minQuantity && (
              <span className="text-red-500 text-sm mt-1">
                {errors.minQuantity.message}
              </span>
            )}
          </label>
        </div>

        {/* Brand & Category */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <label className="form-control w-full">
            <span className="label-text font-semibold text-base-content mb-1">
              Brand Name
            </span>
            <input
              type="text"
              {...register("brand", { required: "Brand name is required" })}
              placeholder="e.g. Bunngle Ltd."
              className="focus:outline-0 focus:border-accent input input-bordered w-full"
            />
            {errors.brand && (
              <span className="text-red-500 text-sm mt-1">
                {errors.brand.message}
              </span>
            )}
          </label>

          <label className="form-control w-full">
            <span className="label-text font-semibold text-base-content mb-1">
              Category
            </span>
            <select
              {...register("category", { required: "Select a category" })}
              className="select select-bordered w-full focus:outline-0 focus:border-accent"
              defaultValue=""
            >
              <option disabled value="">
                -- Select --
              </option>
              <option>Electronics & Gadgets</option>
              <option>Home & Kitchen Appliances</option>
              <option>Fashion & Apparel</option>
              <option>Industrial Machinery & Tools</option>
              <option>Health & Beauty</option>
              <option>Automotive Parts & Accessories</option>
              <option>Office Supplies & Stationery</option>
            </select>
            {errors.category && (
              <span className="text-red-500 text-sm mt-1">
                {errors.category.message}
              </span>
            )}
          </label>
        </div>

        {/* Description */}
        <label className="form-control w-full">
          <span className="label-text font-semibold text-base-content mb-1">
            Short Description
          </span>
          <textarea
            {...register("description", {
              required: "Description is required",
              maxLength: 300,
            })}
            placeholder="Briefly describe the product (max 300 chars)"
            className="textarea textarea-bordered w-full focus:outline-0 focus:border-accent"
            rows={4}
          />
          {errors.description && (
            <span className="text-red-500 text-sm mt-1">
              {errors.description.message}
            </span>
          )}
        </label>

        {/* Price & Rating */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <label className="form-control w-full">
            <span className="label-text font-semibold text-base-content mb-1">
              Price (Per Unit)
            </span>
            <input
              type="number"
              step="0.01"
              {...register("price", { required: "Price is required" })}
              placeholder="e.g. 49.99"
              className="focus:outline-0 focus:border-accent input input-bordered w-full"
            />
            {errors.price && (
              <span className="text-red-500 text-sm mt-1">
                {errors.price.message}
              </span>
            )}
          </label>

          <label className="form-control w-full">
            <span className="label-text font-semibold text-base-content mb-1">
              Rating (1-5)
            </span>
            <input
              type="number"
              min="1"
              max="5"
              step="0.1"
              {...register("rating", {
                required: "Rating is required",
                min: 1,
                max: 5,
              })}
              placeholder="4.5"
              className="focus:outline-0 focus:border-accent input input-bordered w-full"
            />
            {errors.rating && (
              <span className="text-red-500 text-sm mt-1">
                {errors.rating.message}
              </span>
            )}
          </label>
        </div>

        {/* Static Note */}
        <div className="p-5 bg-base-100 border rounded-xl text-sm text-accent ">
          <p>
            <strong>Note:</strong> Products added here will be reviewed before
            publishing on our wholesale platform. Ensure all information is
            accurate.
          </p>
        </div>

        {/* Submit */}
        <button className="btn btn-primary w-full rounded-xl text-lg font-semibold">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;

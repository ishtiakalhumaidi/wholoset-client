import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../contexts/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import { imageUpload } from "../api/imageUpload";

const AddProduct = () => {
  const { user } = useContext(AuthContext);
  const [uploadedImageError, setUploadedImageError] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const handleImageUpload = async (e) => {
    e.preventDefault();
    setIsUploading(true);
    setImagePreview(null);
    setUploadedImageError(null);
    const image = e.target.files[0];
    try {
      const imageURL = await imageUpload(image);
      setImagePreview(imageURL);
      setValue("image", imageURL);
    } catch (err) {
      setUploadedImageError("Image Upload Failed: " + err.message);
    } finally {
      setIsUploading(false);
    }
  };

  const onSubmit = async (data) => {
    if (parseFloat(data.oldPrice) < parseFloat(data.price)) {
      alert("Old Price Should be Greater Than New Price");
      return;
    }
    const newProduct = {
      ...data,
      minQuantity: parseFloat(data.minQuantity),
      mainQuantity: parseFloat(data.mainQuantity),
      oldPrice: parseFloat(data.oldPrice),
      price: parseFloat(data.price),
      rating: parseFloat(data.rating),
      sellerEmail: user.email,
    };

    Swal.fire({
      title: "Are you sure?",
      text: "Please confirm that all the provided information is accurate.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#34c38f",
      cancelButtonColor: "#f25c54",
      confirmButtonText: "Yes, submit it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .post("https://wholoset-server.vercel.app/add-products", newProduct)
          .then(() => {
            Swal.fire({
              title: "Added!",
              confirmButtonColor: "#34c38f",
              text: "Your product has been successfully added.",
              icon: "success",
            });
            navigate("/my-product");
          })
          .catch((error) => {
            console.error(error);
          });
        reset();
        setImagePreview(null);
      }
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-10 my-12 bg-white dark:bg-base-200 rounded-3xl shadow-lg">
      <h2 className="text-4xl font-bold text-center text-primary mb-12 font-secondary">
        Submit New Product
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        {/* IMAGE UPLOAD */}
        <div className="flex flex-col items-center">
          <label
            htmlFor="avatar"
            className="cursor-pointer max-w-full min-w-96 min-h-44 rounded-xl border-1 border-dashed  flex items-center justify-center overflow-hidden bg-base-100 hover:bg-primary/10 transition"
            title="Click to upload product image"
          >
            {imagePreview ? (
              <img
                src={imagePreview}
                alt="Uploaded preview"
                className="w-full h-full object-cover rounded-xl"
              />
            ) : (
              <span className="text-primary font-semibold">
                {isUploading ? "Uploading..." : "Click to Upload Image"}
              </span>
            )}
            <input
              type="file"
              id="avatar"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </label>
          {uploadedImageError && (
            <p className="text-red-600 text-sm mt-2">{uploadedImageError}</p>
          )}
          {errors.image && (
            <span className="text-error text-sm mt-1">
              {errors.image.message}
            </span>
          )}
        </div>

        {/* HIDDEN IMAGE URL INPUT */}
        <input
          type="hidden"
          {...register("image", { required: "Image URL is required" })}
        />

        {/* PRODUCT NAME */}
        <div>
          <label className="block text-base-content font-semibold mb-2">
            Product Name
          </label>
          <input
            type="text"
            placeholder="Industrial Drill Machine"
            {...register("name", { required: "Product name is required" })}
            className="input input-bordered w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
          {errors.name && (
            <p className="text-error text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* QUANTITY */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-base-content font-semibold mb-2">
              Main Quantity
            </label>
            <input
              type="number"
              min="1"
              placeholder="100"
              {...register("mainQuantity", {
                required: "Main quantity is required",
              })}
              className="input input-bordered w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            {errors.mainQuantity && (
              <p className="text-error text-sm mt-1">
                {errors.mainQuantity.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-base-content font-semibold mb-2">
              Minimum Selling Quantity
            </label>
            <input
              type="number"
              min="1"
              placeholder="10"
              {...register("minQuantity", {
                required: "Minimum quantity is required",
              })}
              className="input input-bordered w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            {errors.minQuantity && (
              <p className="text-error text-sm mt-1">
                {errors.minQuantity.message}
              </p>
            )}
          </div>
        </div>

        {/* BRAND & CATEGORY */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-base-content font-semibold mb-2">
              Brand Name
            </label>
            <input
              type="text"
              placeholder="Bunngle Ltd."
              {...register("brand", { required: "Brand name is required" })}
              className="input input-bordered w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            {errors.brand && (
              <p className="text-error text-sm mt-1">{errors.brand.message}</p>
            )}
          </div>

          <div>
            <label className="block text-base-content font-semibold mb-2">
              Category
            </label>
            <select
              {...register("category", { required: "Select a category" })}
              defaultValue=""
              className="select select-bordered w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option disabled value="">
                Choose a Category
              </option>
              <option>Electronics & Gadgets</option>
              <option>Apparel & Fashion</option>
              <option>Industrial Machinery</option>
              <option>Home Appliances</option>
              <option>Office Supplies</option>
              <option>Health & Personal Care</option>
              <option>Furniture & Decor</option>
              <option>Sporting Goods</option>
            </select>
            {errors.category && (
              <p className="text-error text-sm mt-1">
                {errors.category.message}
              </p>
            )}
          </div>
        </div>

        {/* DESCRIPTION */}
        <div>
          <label className="block text-base-content font-semibold mb-2">
            Short Description
          </label>
          <textarea
            {...register("description", {
              required: "Description is required",
              maxLength: 300,
            })}
            rows={4}
            placeholder="Briefly describe the product (max 300 chars)"
            className="textarea textarea-bordered w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
          {errors.description && (
            <p className="text-error text-sm mt-1">
              {errors.description.message}
            </p>
          )}
        </div>

        {/* PRICE & RATING */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-base-content font-semibold mb-2">
              Old Price (Per Unit)
            </label>
            <input
              type="number"
              step="0.01"
              placeholder="59.99"
              {...register("oldPrice", { required: "Old Price is required" })}
              className="input input-bordered w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            {errors.oldPrice && (
              <p className="text-error text-sm mt-1">
                {errors.oldPrice.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-base-content font-semibold mb-2">
              Price (Per Unit)
            </label>
            <input
              type="number"
              step="0.01"
              placeholder="49.99"
              {...register("price", { required: "Price is required" })}
              className="input input-bordered w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            {errors.price && (
              <p className="text-error text-sm mt-1">{errors.price.message}</p>
            )}
          </div>

          <div>
            <label className="block text-base-content font-semibold mb-2">
              Rating (1-5)
            </label>
            <input
              type="number"
              min="1"
              max="5"
              step="0.1"
              placeholder="4.5"
              {...register("rating", {
                required: "Rating is required",
                min: 1,
                max: 5,
              })}
              className="input input-bordered w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            {errors.rating && (
              <p className="text-error text-sm mt-1">{errors.rating.message}</p>
            )}
          </div>
        </div>

        {/* NOTE */}
        <div className="bg-base-100 border border-primary rounded-xl p-5 text-primary text-sm font-medium">
          <p>
            <strong>Note:</strong> Products added here will be reviewed before
            publishing on our wholesale platform. Ensure all information is
            accurate.
          </p>
        </div>

        {/* SUBMIT BUTTON */}
        <button
          type="submit"
          disabled={isUploading}
          className="btn btn-primary w-full rounded-xl text-lg font-semibold"
        >
          {isUploading ? "Uploading Image..." : "Add Product"}
        </button>
      </form>
    </div>
  );
};

export default AddProduct;

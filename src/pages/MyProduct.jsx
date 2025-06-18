import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Link } from "react-router";
import useMyProducts from "../api/useMyProductsApi";

const MyProduct = () => {
  const [editingProduct, setEditingProduct] = useState(null);
  const { user } = useContext(AuthContext);
  const { getMyProducts } = useMyProducts();
  const [products, setProducts] = useState([]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const handleEdit = (product) => {
    reset(product);
    document.getElementById("my_modal_3").showModal();
  };
  const onSubmit = async (data) => {
    if (parseFloat(data.oldPrice) < parseFloat(data.price)) {
      alert("Old Price Should to be Greater Thn New Price");
      return;
    }
    const updatedProduct = {
      ...data,
      minQuantity: parseFloat(data.minQuantity),
      mainQuantity: parseFloat(data.mainQuantity),
      oldPrice: parseFloat(data.oldPrice),
      price: parseFloat(data.price),
      rating: parseFloat(data.rating),
      sellerEmail: user.email,
    };
    document.getElementById("my_modal_3").close();
    Swal.fire({
      title: "Are you sure?",
      text: "You want to update your product data!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#34c38f",
      cancelButtonColor: "#f25c54",
      confirmButtonText: "Yes, update it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .put(
            `http://localhost:3000/update-product/${editingProduct._id}`,
            updatedProduct
          )
          .then((result) => {
            if (result.data.modifiedCount) {
              const newList = products.map((product) =>
                product._id === editingProduct._id ? updatedProduct : product
              );
              setProducts(newList);
              Swal.fire({
                title: "Updated!",
                confirmButtonColor: "#34c38f",
                text: "Your product has been updated successfully.",
                icon: "success",
              });
            }
          })
          .catch((error) => {
            console.log("Update failed", error);
          });
        reset();
      }
    });
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#34c38f",
      cancelButtonColor: "#f25c54",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:3000/delete-product/${id}`)
          .then((res) => {
            console.log(res.data);
            if (res.data.deletedCount) {
              setProducts(products.filter((product) => product._id != id));
            }
          })
          .catch((error) => {
            console.error("delete error", error);
          });
        Swal.fire({
          title: "Deleted!",
          confirmButtonColor: "#34c38f",
          text: "Your product has been deleted.",
          icon: "success",
        });
      }
    });
  };

  useEffect(() => {
    if (!user || !user.email) return;
    getMyProducts(user.email)
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, [user, getMyProducts]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-2xl font-primary font-semibold text-primary mb-4">
        Your Product:
      </h2>
      <div className="bg-base-100 shadow-xl rounded-2xl overflow-x-auto">
        {products.length == 0 ? (
          <div className="my-10 flex flex-col justify-center items-center space-y-4 text-center">
            <p className="text-lg font-medium text-gray-600">
              Oops! You haven’t added any products yet.
            </p>
            <Link to="/add-product" className="btn btn-accent rounded-xl">
              Add your first product
            </Link>
          </div>
        ) : (
          <table className="min-w-full divide-y divide-base-300">
            {/* Table Head */}
            <thead className="bg-base-200">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-base-content uppercase tracking-wider">
                  Image
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-base-content uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-base-content uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-base-content uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-base-content uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="bg-base-100 divide-y divide-base-300">
              {products.map((product) => (
                <tr
                  key={product._id}
                  className="hover:bg-base-200 transition duration-200"
                >
                  <td className="px-6 py-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded-lg border border-base-300 shadow-sm"
                    />
                  </td>
                  <td className="px-6 py-4 text-base-content font-medium">
                    {product.name}
                  </td>
                  <td className="px-6 py-4 text-base-content font-medium">
                    {product.category}
                  </td>
                  <td className="px-6 py-4 text-accent font-semibold">
                    ${product.price.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex gap-3 justify-center">
                      <button
                        onClick={() => {
                          setEditingProduct(product);
                          handleEdit(product);
                        }}
                        className="btn btn-accent rounded-lg"
                      >
                        Update
                      </button>

                      <button
                        onClick={() => handleDelete(product._id)}
                        className="btn btn-primary rounded-lg"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/*! modal for update */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
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
                  className="focus:outline-0 focus:border-accent input input-bordered w-full rounded-xl"
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
                  {...register("name", {
                    required: "Product name is required",
                  })}
                  placeholder="e.g. Industrial Drill Machine"
                  className="focus:outline-0 focus:border-accent input input-bordered w-full rounded-xl"
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
                  className="focus:outline-0 focus:border-accent input input-bordered w-full rounded-xl"
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
                  className="focus:outline-0 focus:border-accent input input-bordered w-full rounded-xl"
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
                  className="focus:outline-0 focus:border-accent input input-bordered w-full rounded-xl"
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
                  className="select select-bordered w-full focus:outline-0 focus:border-accent rounded-xl"
                  defaultValue=""
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
                className="textarea textarea-bordered w-full focus:outline-0 focus:border-accent rounded-xl mb-2"
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
                  Old Price (Per Unit)
                </span>
                <input
                  type="number"
                  step="0.01"
                  {...register("oldPrice", {
                    required: "Old Price is required",
                  })}
                  placeholder="e.g. 59.99"
                  className="focus:outline-0 focus:border-accent input input-bordered w-full rounded-xl"
                />
                {errors.oldPrice && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.oldPrice.message}
                  </span>
                )}
              </label>
              <label className="form-control w-full">
                <span className="label-text font-semibold text-base-content mb-1">
                  Price (Per Unit)
                </span>
                <input
                  type="number"
                  step="0.01"
                  {...register("price", { required: "Price is required" })}
                  placeholder="e.g. 49.99"
                  className="focus:outline-0 focus:border-accent input input-bordered w-full rounded-xl"
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
                  className="focus:outline-0 focus:border-accent input input-bordered w-full rounded-xl"
                />
                {errors.rating && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.rating.message}
                  </span>
                )}
              </label>
            </div>

            {/* Submit */}
            <button className="btn btn-primary w-full rounded-xl text-lg font-semibold">
              Update Product
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default MyProduct;

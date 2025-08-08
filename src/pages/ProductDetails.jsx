import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const ProductDetails = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { id } = useParams();

  // React Query to fetch product details (v5 object form)
  const {
    data: product = {},
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: () =>
      axios.get(`http://localhost:3000/products/${id}`).then((res) => res.data),
    enabled: !!id,
  });

  // Local state for quantity
  const [quantity, setQuantity] = useState(0);

  // Update quantity when product loads or changes
  React.useEffect(() => {
    if (product.minQuantity) {
      setQuantity(product.minQuantity);
    }
  }, [product.minQuantity]);

  // Quantity validation
  const isTooLow = quantity < product.minQuantity;
  const isTooHigh = quantity > product.mainQuantity;
  const isInvalid = isTooLow || isTooHigh;

  const suggestedQuantities = [
    product.minQuantity || 0,
    (product.minQuantity || 0) + 10,
    (product.minQuantity || 0) + 20,
  ];

  // react-hook-form setup
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: user?.displayName || "",
      email: user?.email || "",
      countryCode: "+1",
      phone: "",
      country: "Bangladesh",
      address: "",
      paymentMethod: "Cash on Delivery",
    },
  });

  // Mutation for adding product to cart
  const addToCartMutation = useMutation({
    mutationFn: (data) =>
      axios.patch(`http://localhost:3000/users/cart?email=${user.email}`, data),
    onSuccess: () => {
      // Refetch product and cart data after adding to cart
      queryClient.invalidateQueries({ queryKey: ["cartProducts", user.email] });
      refetch();
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Product has been added to your cart.",
        showConfirmButton: false,
        timer: 1500,
      });
    },
    onError: (error) => {
      Swal.fire({
        icon: "error",
        title: "Error adding to cart",
        text: error.message || "Something went wrong",
      });
    },
  });

  // Mutation for purchase
  const purchaseMutation = useMutation({
    mutationFn: (purchaseData) =>
      axios.patch(
        `http://localhost:3000/users/buy?email=${user.email}`,
        purchaseData
      ),
    onSuccess: () => {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Purchase confirmed!",
        showConfirmButton: false,
        timer: 1500,
      });
      queryClient.invalidateQueries({ queryKey: ["cartProducts", user.email] });
      navigate(`/my-orders/${user.email}`);
      document.getElementById("my_modal_3")?.close();
    },
    onError: (error) => {
      Swal.fire({
        icon: "error",
        title: "Purchase failed",
        text: error.message || "Invalid quantity or other error",
      });
    },
  });

  const onSubmit = (data) => {
    if (isInvalid) {
      Swal.fire({
        icon: "error",
        title: "Invalid quantity",
        text: `Please select quantity between ${product.minQuantity} and ${product.mainQuantity}`,
      });
      return;
    }

    const purchaseData = {
      productId: id,
      sellerEmail: product.sellerEmail,
      ...data,
      quantity,
    };

    purchaseMutation.mutate(purchaseData);
  };

  const increaseQty = () => {
    if (quantity < product.mainQuantity) setQuantity(quantity + 1);
  };
  const decreaseQty = () => {
    if (quantity > product.minQuantity) setQuantity(quantity - 1);
  };

  const handleAddCart = () => {
    if (isInvalid) {
      Swal.fire({
        icon: "error",
        title: "Invalid quantity",
        text: `Please select quantity between ${product.minQuantity} and ${product.mainQuantity}`,
      });
      return;
    }
    addToCartMutation.mutate({ productId: id, quantity, action: "add" });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6 md:p-10 bg-white dark:bg-base-200 rounded-2xl shadow-xl my-10">
      <title>Product Details | Wholoset</title>
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
              disabled={isInvalid || addToCartMutation.isLoading}
            >
              {addToCartMutation.isLoading ? "Adding..." : "Add to Cart"}
            </button>
            <button
              className="btn btn-primary rounded-xl font-primary"
              onClick={() => document.getElementById("my_modal_3").showModal()}
              disabled={isInvalid}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box relative">
          {/* Close button */}
          <button
            type="button"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => document.getElementById("my_modal_3").close()}
          >
            ✕
          </button>

          <h3 className="font-bold text-lg mb-4">Complete Your Purchase</h3>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Full Name */}
            <label className="form-control w-full">
              <span className="label-text font-medium text-sm mb-1">
                Full Name
              </span>
              <input
                disabled
                {...register("fullName", { required: "Full name is required" })}
                type="text"
                className="input input-bordered rounded-xl w-full focus:outline-secondary"
              />
              {errors.fullName && (
                <span className="text-red-500 text-sm">
                  {errors.fullName.message}
                </span>
              )}
            </label>

            {/* Email */}
            <label className="form-control w-full">
              <span className="label-text font-medium text-sm mb-1">Email</span>
              <input
                disabled
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Invalid email",
                  },
                })}
                type="email"
                className="input input-bordered rounded-xl w-full focus:outline-secondary"
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  {errors.email.message}
                </span>
              )}
            </label>

            {/* Phone Number */}
            <label className="form-control w-full">
              <span className="label-text font-medium text-sm mb-1">
                Phone Number
              </span>
              <div className="flex gap-2">
                <select
                  {...register("countryCode")}
                  className="select select-bordered rounded-xl max-w-[120px] focus:outline-secondary"
                >
                  <option value="+1">+1</option>
                  <option value="+880">+880</option>
                  <option value="+44">+44</option>
                  <option value="+91">+91</option>
                </select>
                <input
                  {...register("phone", {
                    required: "Phone number is required",
                    minLength: { value: 7, message: "Too short" },
                  })}
                  type="tel"
                  placeholder="123456789"
                  className="input input-bordered w-full rounded-xl focus:outline-secondary"
                />
              </div>
              {errors.phone && (
                <span className="text-red-500 text-sm">
                  {errors.phone.message}
                </span>
              )}
            </label>

            {/* Country */}
            <label className="form-control w-full">
              <span className="label-text font-medium text-sm mb-1">
                Country
              </span>
              <select
                {...register("country", { required: true })}
                className="select select-bordered rounded-xl w-full focus:outline-secondary"
              >
                <option value="Bangladesh">Bangladesh</option>
                <option value="USA">United States</option>
                <option value="UK">United Kingdom</option>
                <option value="India">India</option>
              </select>
            </label>

            {/* Address */}
            <label className="form-control w-full">
              <span className="label-text font-medium text-sm mb-1">
                Address
              </span>
              <input
                {...register("address", { required: "Address is required" })}
                type="text"
                placeholder="Street, City, Postal Code"
                className="input input-bordered rounded-xl w-full focus:outline-secondary"
              />
              {errors.address && (
                <span className="text-red-500 text-sm">
                  {errors.address.message}
                </span>
              )}
            </label>

            {/* Quantity selector */}
            <div className="flex items-center justify-between mt-2">
              <span className="font-medium text-sm">Quantity</span>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={decreaseQty}
                  className="btn btn-sm rounded-xl bg-base-200 hover:bg-base-300"
                  disabled={quantity <= product.minQuantity}
                >
                  −
                </button>
                <span className="font-medium">{quantity}</span>
                <button
                  type="button"
                  onClick={increaseQty}
                  className="btn btn-sm rounded-xl bg-base-200 hover:bg-base-300"
                  disabled={quantity >= product.mainQuantity}
                >
                  +
                </button>
              </div>
            </div>

            {/* Payment Method */}
            <div className="form-control mt-3">
              <span className="label-text font-medium text-sm mb-1">
                Payment Method
              </span>
              <label className="label cursor-pointer gap-2">
                <input
                  {...register("paymentMethod", { required: true })}
                  type="radio"
                  value="Cash on Delivery"
                  className="radio radio-sm"
                  defaultChecked
                />
                <span className="label-text">Cash on Delivery</span>
              </label>
            </div>

            <button
              type="submit"
              className="btn btn-primary w-full rounded-xl mt-4"
              disabled={isInvalid || purchaseMutation.isLoading}
            >
              {purchaseMutation.isLoading
                ? "Processing..."
                : "Confirm Purchase"}
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default ProductDetails;

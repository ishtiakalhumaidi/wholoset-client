import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaTrashAlt } from "react-icons/fa";
import { AuthContext } from "../contexts/AuthContext";
import { Link } from "react-router";
import useCartProductsApi from "../api/useCartProductsApi";

const CartPage = () => {
  const { user } = useContext(AuthContext);
  const { getCartProducts } = useCartProductsApi();
  const [subtotal, setSubtotal] = useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    // send to backend later
  };

  const [cartProducts, setCartProducts] = useState([]);

  const shipping = 29;
  const tax = 4;
  const total = subtotal + shipping + tax;
  console.log(cartProducts);

  useEffect(() => {
    if (!cartProducts || cartProducts.length === 0) {
      setSubtotal(0);
      return;
    }

    const newTotal = cartProducts.reduce((sum, element) => {
      if (!element) return sum;
      return sum + element.price * element.quantity;
    }, 0);

    setSubtotal(newTotal);
  }, [cartProducts]);

  useEffect(() => {
    if (!user?.email) return;

    const fetchCart = async () => {
      const data = await getCartProducts(user.email);
      setCartProducts(data);
    };

    fetchCart();
  }, [user]);

  const handleIncreaseDecrease = (data) => {
    console.log(data);
    axios
      .patch(`http://localhost:3000/users/cart?email=${user.email}`, data)
      .then(() => {
        return getCartProducts(user.email);
      })
      .then((updatedCart) => {
        setCartProducts(updatedCart);
      })
      .catch((err) => {
        console.error("An error occurred", err);
      });
  };

  return (
    <div className="grid md:grid-cols-3 gap-6 p-6 bg-base-100">
      {/* Left: Cart Items */}
      <div className="md:col-span-2 space-y-4">
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

        {cartProducts.length == 0 ? (
          <div className="my-10 flex flex-col justify-center items-center space-y-4 text-center">
            <p className="text-lg font-medium text-gray-600">
              Your cart is currently empty.
            </p>
            <Link to="/all-product" className="btn btn-accent rounded-xl">
              Browse products
            </Link>
          </div>
        ) : (
          <div className="space-y-4 max-w-4xl mx-auto my-6">
            {cartProducts.map((cartProduct) =>
              cartProduct.name ? (
                <div
                  key={cartProduct._id}
                  className="bg-base-200 rounded-xl p-4 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={cartProduct.image}
                      alt={cartProduct.name}
                      className="w-20 h-20 object-contain rounded-lg border"
                    />
                    <div>
                      <h3 className="font-semibold text-lg">
                        {cartProduct.name}
                      </h3>
                      <p className="text-sm font-medium text-primary mt-1">
                        ${(cartProduct.price * cartProduct.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() =>
                        handleIncreaseDecrease({
                          productId: cartProduct._id,
                          action: "remove",
                        })
                      }
                      className="btn btn-sm btn-outline btn-square rounded-xl"
                    >
                      −
                    </button>
                    <span className="text-sm font-medium">
                      {cartProduct.quantity}
                    </span>
                    <button
                      onClick={() =>
                        handleIncreaseDecrease({
                          productId: cartProduct._id,
                          action: "add",
                        })
                      }
                      className="btn btn-sm btn-outline btn-square rounded-xl"
                    >
                      +
                    </button>
                    <button
                      onClick={() =>
                        handleIncreaseDecrease({
                          productId: cartProduct._id,
                          action: "delete",
                        })
                      }
                      className="btn btn-sm btn-ghost text-error text-xl rounded-xl"
                    >
                      <FaTrashAlt />
                    </button>
                  </div>
                </div>
              ) : (
                <div
                  key={cartProduct.productId}
                  className="bg-red-50 border border-red-200 text-red-600 rounded-xl p-4 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 flex items-center justify-center rounded-lg border border-red-200 bg-red-100 text-red-400 font-semibold text-sm">
                      Deleted
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg line-through">
                        Unknown Product
                      </h3>
                      <p className="text-sm font-medium text-red-500 mt-1">
                        This product is no longer available.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <button
                      onClick={() =>
                        handleIncreaseDecrease({
                          productId: cartProduct.productId,
                          action: "delete",
                        })
                      }
                      className="btn btn-sm btn-ghost text-error text-xl rounded-xl"
                    >
                      <FaTrashAlt />
                    </button>
                  </div>
                </div>
              )
            )}
          </div>
        )}
      </div>

      {/* Right: Checkout */}
      <div className="bg-base-200 rounded-xl p-6 shadow-sm space-y-4">
        {/* Totals Box */}
        <div className="text-sm font-medium bg-base-100 rounded-xl p-4 shadow border border-base-300 space-y-1">
          <div className="flex justify-between">
            <span>Subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping:</span>
            <span>${shipping.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Tax:</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-lg font-bold border-t pt-2 mt-2">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <h3 className="font-bold text-lg mb-4">Shipping Information</h3>

          {/* Full Name */}
          <label className="form-control w-full">
            <span className="label-text font-medium text-sm mb-1">
              Full Name
            </span>
            <input
              {...register("fullName", { required: "Full name is required" })}
              type="text"
              placeholder="John Doe"
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
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Invalid email format",
                },
              })}
              type="email"
              placeholder="example@email.com"
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
                defaultValue="+880"
              >
                <option value="+1">+1 (US)</option>
                <option value="+880">+880 (BD)</option>
                <option value="+44">+44 (UK)</option>
                <option value="+91">+91 (IN)</option>
                <option value="+61">+61 (AU)</option>
              </select>
              <input
                {...register("phone", {
                  required: "Phone number is required",
                  minLength: {
                    value: 7,
                    message: "Too short",
                  },
                })}
                type="tel"
                placeholder="1234567890"
                className="input input-bordered rounded-xl w-full focus:outline-secondary"
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
            <span className="label-text font-medium text-sm mb-1">Country</span>
            <select
              {...register("country", { required: true })}
              className="select select-bordered rounded-xl w-full focus:outline-secondary"
            >
              <option value="Bangladesh">Bangladesh</option>
              <option value="United States">United States</option>
              <option value="India">India</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="Germany">Germany</option>
            </select>
          </label>

          {/* Address */}
          <label className="form-control w-full">
            <span className="label-text font-medium text-sm mb-1">
              Full Address
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

          {/* Payment */}
          <div className="form-control flex items-start gap-3">
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

          {/* Buttons */}
          <button
            type="submit"
            className="btn btn-primary w-full rounded-xl mt-3"
          >
            Checkout
          </button>
          <button type="button" className="btn btn-outline w-full rounded-xl">
            Continue Shopping
          </button>
        </form>
      </div>
    </div>
  );
};

export default CartPage;

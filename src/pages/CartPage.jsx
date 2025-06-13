import { useForm } from "react-hook-form";
import { FaTrashAlt } from "react-icons/fa";

const CartPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    // send to backend later
  };

  const quantity = 2;
  const price = 25;
  const subtotal = quantity * price;
  const shipping = 2;
  const tax = 4;
  const total = subtotal + shipping + tax;

  return (
    <div className="grid md:grid-cols-3 gap-6 p-6 bg-base-100">
      {/* Left: Cart Items */}
      <div className="md:col-span-2 space-y-4">
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

        <div className="bg-base-200 rounded-xl p-4 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-4">
            <img
              src="https://via.placeholder.com/80"
              alt="Product"
              className="w-20 h-20 object-contain rounded-lg"
            />
            <div>
              <h3 className="font-semibold text-lg">Wholesale Item</h3>
              <p className="text-sm font-medium text-primary mt-1">
                ${price.toFixed(2)}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="btn btn-sm btn-outline btn-square rounded-xl">−</button>
            <span className="text-sm font-medium">{quantity}</span>
            <button className="btn btn-sm btn-outline btn-square rounded-xl">+</button>
            <button className="btn btn-sm btn-ghost text-error text-xl rounded-xl">
              <FaTrashAlt />
            </button>
          </div>
        </div>
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
            <span className="label-text font-medium text-sm mb-1">Full Name</span>
            <input
              {...register("fullName", { required: "Full name is required" })}
              type="text"
              placeholder="John Doe"
              className="input input-bordered rounded-xl w-full focus:outline-secondary"
            />
            {errors.fullName && (
              <span className="text-red-500 text-sm">{errors.fullName.message}</span>
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
              <span className="text-red-500 text-sm">{errors.email.message}</span>
            )}
          </label>

          {/* Phone Number */}
          <label className="form-control w-full">
            <span className="label-text font-medium text-sm mb-1">Phone Number</span>
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
              <span className="text-red-500 text-sm">{errors.phone.message}</span>
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
            <span className="label-text font-medium text-sm mb-1">Full Address</span>
            <input
              {...register("address", { required: "Address is required" })}
              type="text"
              placeholder="Street, City, Postal Code"
              className="input input-bordered rounded-xl w-full focus:outline-secondary"
            />
            {errors.address && (
              <span className="text-red-500 text-sm">{errors.address.message}</span>
            )}
          </label>

          {/* Payment */}
          <div className="form-control flex items-start gap-3">
            <span className="label-text font-medium text-sm mb-1">Payment Method</span>
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
          <button type="submit" className="btn btn-primary w-full rounded-xl mt-3">
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

import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import Lottie from "lottie-react";
import signUpLottie from "../../assets/lotties/RegisterLottie.json";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contexts/AuthContext";
import axios from "axios";
import { Bounce, toast } from "react-toastify";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const SignUp = () => {
  const { googleLogIn, isLoading, createUser, updateUserData } =
    useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password, fullName, photoURL } = data;

    createUser(email, password)
      .then(() => {
        return updateUserData(fullName, photoURL);
      })
      .then(() => {
        const userData = {
          displayName: fullName,
          email,
          photoURL,
        };
        toast.success("Your account has been created successfully!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
        return axios.post("http://localhost:3000/users", userData);
      })
      .then((res) => {
        console.log("User saved:", res.data);
        navigate("/");
      })
      .catch((error) => {
        console.error("Error:", error.code || error.message);
      });
  };

  // googleSignUp
  const googleSignUp = () => {
    setError(null);
    googleLogIn()
      .then((result) => {
        toast.success("Your account has been created successfully!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
        const data = {
          displayName: result.user.displayName,
          email: result.user.email,
          photoURL: result.user.photoURL,
        };

        axios
          .post("http://localhost:3000/users", data)
          .then((res) => {
            console.log("User saved:", res.data);
          })
          .catch((err) => {
            console.error("User didn't add", err);
          });
        navigate("/");
        console.log(result.user);
      })
      .catch((error) => {
        setError(error.code);
      });
  };

  return (
    <div className="my-10 md:my-26 flex flex-col lg:flex-row bg-base-100">
      {/* Lottie Animation */}
      <div className="lg:w-1/2 w-full hidden md:flex items-center justify-center p-10">
        <div className="text-center">
          <Lottie animationData={signUpLottie} style={{ height: "500px" }} />
        </div>
      </div>

      {/* Form Section */}
      <div className="lg:w-1/2 w-full flex items-center justify-center p-6">
        <div className="w-full max-w-md space-y-6">
          <h2 className="text-3xl font-bold text-center text-base-content">
            Create an Account
          </h2>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            {/* Full Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base-content">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="input border-base-content w-full focus:outline-0 focus:border-accent"
                {...register("fullName", { required: "Full Name is required" })}
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            {/* photoURL */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base-content">Photo URL</span>
              </label>
              <input
                {...register("photoURL", {
                  required: "Photo URL is required",
                  pattern: {
                    value: /^https:\/\/.+/i,
                    message: "Please enter a valid image URL.",
                  },
                })}
                type="url"
                placeholder="https://example.com/photo.jpg"
                className="input border-base-content w-full focus:outline-0 focus:border-accent"
              />

              {errors.photoURL && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.photoURL.message}
                </p>
              )}
            </div>
            {/* Email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base-content">
                  Email address
                </span>
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="input border-base-content w-full focus:outline-0 focus:border-accent"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Enter a valid email",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="relative form-control">
              <label className="label">
                <span className="label-text text-base-content">Password</span>
              </label>
              <input
                type={showPass ? "text" : "password"}
                placeholder="Create a password"
                className="input border-base-content w-full focus:outline-0 focus:border-accent"
                {...register("password", {
                  required: "Password is required",
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{6,}$/,
                    message:
                      "Password must be at least 6 characters long and include at least one uppercase, one lowercase, and one special character.",
                  },
                })}
              />
              {showPass ? (
                <FaRegEyeSlash
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-2 top-9 "
                />
              ) : (
                <FaRegEye
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-2 top-9 "
                />
              )}
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="btn bg-base-content text-base-100 w-full text-base font-semibold"
            >
              Sign Up
            </button>
          </form>

          <div className="divider">Or sign up with</div>

          <button
            onClick={googleSignUp}
            className="btn btn-outline w-full gap-2 hover:shadow-md"
          >
            <FcGoogle className="text-xl" />
            {isLoading && !error
              ? "Signing up with Google..."
              : "Sign up with Google"}
          </button>

          <p className="text-center text-sm">
            Already have an account?{" "}
            <Link
              to="/sign-in"
              className="link link-hover text-accent font-medium"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

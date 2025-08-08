import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import signInLottie from "../../assets/lotties/LogInLottie.json";
import Lottie from "lottie-react";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contexts/AuthContext";
import axios from "axios";
import { Bounce, toast } from "react-toastify";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const SignIn = () => {
  const { logIn, googleLogIn, isLoading } = useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log("Form Data:", data);
    logIn(data.email, data.password)
      .then((result) => {
        toast.success("You have been signin successfully!", {
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
        location.state ? navigate(location.state) : navigate("/");
        // console.log(result.user);
      })
      .catch((error) => {
        console.log(error.code);
      });
  };

  const googleSignIn = () => {
    setError(null);
    googleLogIn()
      .then((result) => {
        const data = {
          displayName: result.user.displayName,
          email: result.user.email,
          photoURL: result.user.photoURL,
        };

        axios
          .post("https://wholoset-server.vercel.app/users", data)
          .then((res) => {
            // console.log("User saved:", res.data);
          })
          .catch((err) => {
            console.error("User didn't add", err);
          });
        toast.success("You have been signin successfully!", {
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
        location.state ? navigate(location.state) : navigate("/");
        // console.log(result.user);
      })
      .catch((error) => {
        setError(error.code);
      });
  };

  return (
    <div className="flex flex-col items-center lg:flex-row-reverse bg-base-100 my-10 md:my-26">
      <title>Sign In | Wholoset</title>
      <div className="lg:w-1/2 w-full md:flex items-center justify-center p-10 hidden">
        <div className="text-center">
          <Lottie
            className="scale-x-[-1]"
            animationData={signInLottie}
            style={{ height: "500px" }}
          />
        </div>
      </div>

      <div className="lg:w-1/2 w-full flex items-center justify-center p-6">
        <div className="w-full max-w-md space-y-6">
          <h2 className="text-3xl font-bold text-center text-base-content">
            Sign in
          </h2>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
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
                    message: "Enter a valid email address",
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
              <label className=" label flex justify-between">
                <span className="label-text text-base-content">Password</span>
              </label>
              <input
                type={showPass ? "text" : "password"}
                placeholder="Enter your password"
                className=" input border-base-content w-full focus:outline-0 focus:border-accent"
                {...register("password", {
                  required: "Password is required",
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
              Sign In
            </button>
          </form>

          <div className="divider">Or continue with</div>

          <button
            onClick={googleSignIn}
            className="btn btn-outline w-full gap-2 hover:shadow-md"
          >
            <FcGoogle className="text-xl" />
            {isLoading && !error
              ? "Signing in with Google..."
              : "Sign in with Google"}
          </button>

          <p className="text-center text-sm">
            New to Wholoset?{" "}
            <Link
              to="/sign-up"
              className="link link-hover text-accent font-medium"
            >
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

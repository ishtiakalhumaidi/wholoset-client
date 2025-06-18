import React from "react";
import errorLottie from "../../assets/lotties/error.json";
import Lottie from "lottie-react";
import { Link } from "react-router";

const Error404 = () => {
  return (
    <div className="flex flex-col-reverse text-center md:text-left md:flex-row w-screen h-screen overflow-hidden justify-center items-center max-w-10/12 mx-auto">
      <title>Error404 | Wholoset</title>
      <div>
        <h2 className="text-4xl md:text-6xl font-bold text-[#f25c54]">
          404 error...
        </h2>
        <p className="md:text-2xl text-xl max-w-3xl my-4">
          The page you are looking for might have been removed had its name
          changed or is temporarily unavailable.
        </p>
        <Link to={"/"} className="btn btn-accent rounded-xl">
          GO TO HOMEPAGE
        </Link>
      </div>
      <div>
        <Lottie animationData={errorLottie}></Lottie>
      </div>
    </div>
  );
};

export default Error404;

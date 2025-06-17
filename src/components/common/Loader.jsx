import React from "react";
import { MoonLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="h-dvh flex justify-center items-center overflow-hidden">
      <MoonLoader />
    </div>
  );
};

export default Loader;

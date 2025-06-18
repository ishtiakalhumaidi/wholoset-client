import React from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";

const useMyProducts = () => {
  const axiosSecure = useAxiosSecure();

  const getMyProducts = (email) => {
    return axiosSecure.get(`my-product?email=${email}`).then((res) => res.data);
  };

  return { getMyProducts };
};

export default useMyProducts;

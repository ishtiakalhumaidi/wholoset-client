import React from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";

const useCartProductsApi = () => {
  const axiosSecure = useAxiosSecure();
  const getCartProducts = (email) => {
    return axiosSecure.get(`product/${email}/cart`).then((res) => res.data);
  };
  return { getCartProducts };
};

export default useCartProductsApi;

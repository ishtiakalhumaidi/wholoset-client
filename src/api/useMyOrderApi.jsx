import React from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";

const useMyOrderApi = () => {
  const axiosSecure = useAxiosSecure();

  const getMyOrder = (email) => {
    return axiosSecure.get(`product/${email}/orders`).then((res) => res.data);
  };
  return { getMyOrder };
};

export default useMyOrderApi;

import axios from "axios";
import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/",
});

const useAxiosSecure = () => {
  const { user } = useContext(AuthContext);

  axiosInstance.interceptors.request.use((config) => {
    if (user && user.accessToken) {
      config.headers.authorization = `Bearer ${user.accessToken}`;
    }
    return config;
  });

  return axiosInstance;
};

export default useAxiosSecure;

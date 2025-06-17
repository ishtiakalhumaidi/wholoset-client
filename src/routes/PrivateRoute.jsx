import React, { useContext } from "react";
import Swal from "sweetalert2";
import { Navigate, useLocation } from "react-router";
import Loader from "../components/common/Loader";
import { AuthContext } from "../contexts/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useContext(AuthContext);
  const location = useLocation();

  if (isLoading) {
    return <Loader />;
  }

  if (!user) {
    Swal.fire({
      position: "center",
      icon: "warning",
      title: "Hold on!",
      text: "You need to be logged in to access this page.",
      showConfirmButton: false,
      timer: 1200,
    });
    return <Navigate state={location.pathname} to={"/sign-in"} />;
  }

  return children;
};

export default PrivateRoute;

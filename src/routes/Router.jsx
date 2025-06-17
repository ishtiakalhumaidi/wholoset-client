import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import AllProduct from "../pages/AllProduct";
import AddProduct from "../pages/AddProduct";
import MyProduct from "../pages/MyProduct";
import CartPage from "../pages/CartPage";
import ProductDetails from "../pages/ProductDetails";
import PrivateRoute from "./PrivateRoute";
import Loader from "../components/common/Loader";
import Error404 from "../pages/error/Error404";
import Category from "../pages/Category";
import MyOrder from "../pages/MyOrder";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <Error404 />,
    children: [
      { index: true, Component: Home },
      {
        path: "sign-in",
        Component: SignIn,
      },
      {
        path: "sign-up",
        Component: SignUp,
      },
      {
        path: "category/:name",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/category/${params.name}`),
        element: (
          <PrivateRoute>
            <Category />
          </PrivateRoute>
        ),
        hydrateFallbackElement: <Loader />,
      },
      {
        path: "my-orders/:name",

        element: (
          <PrivateRoute>
            <MyOrder />
          </PrivateRoute>
        ),
        // hydrateFallbackElement: <Loader />,
      },
      {
        path: "all-product",
        loader: () => fetch("http://localhost:3000/products"),
        element: (
          <PrivateRoute>
            <AllProduct />
          </PrivateRoute>
        ),
        hydrateFallbackElement: <Loader />,
      },
      {
        path: "add-product",
        element: (
          <PrivateRoute>
            <AddProduct />
          </PrivateRoute>
        ),
      },
      {
        path: "my-product",
        element: (
          <PrivateRoute>
            <MyProduct />
          </PrivateRoute>
        ),
      },
      {
        path: "my-cart",
        Component: CartPage,
      },
      {
        path: "product-details/:id",
        element: (
          <PrivateRoute>
            <ProductDetails />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

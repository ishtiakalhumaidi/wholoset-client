import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import AllProduct from "../pages/AllProduct";
import AddProduct from "../pages/AddProduct";
import MyProduct from "../pages/MyProduct";
import CartPage from "../pages/CartPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
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
        path: "all-product",
        Component: AllProduct,
      },
      {
        path: "add-product",
        Component: AddProduct,
      },
      {
        path: "my-product",
        Component: MyProduct,
      },
      {
        path: "my-cart",
        Component: CartPage,
      },
    ],
  },
]);

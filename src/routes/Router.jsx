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
import UserProfile from "../pages/UserProfile";
import Terms from "../pages/Terms";
import Privacy from "../pages/Privacy";
import DashboardLayout from "../layouts/DashboardLayout";
import AboutUs from "../pages/AboutUs";

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
        path: "about",
        Component: AboutUs,
      },
      {
        path: "category/:name",
        loader: ({ params }) =>
          fetch(`https://wholoset-server.vercel.app/category/${params.name}`),
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
        loader: () => fetch("https://wholoset-server.vercel.app/products"),
        element: <AllProduct />,
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
        path: "my-profile",
        element: (
          <PrivateRoute>
            <UserProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "my-cart",
        element: (
          <PrivateRoute>
            <CartPage />
          </PrivateRoute>
        ),
      },
      {
        path: "product-details/:id",
        element: (
          <PrivateRoute>
            <ProductDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "terms",
        Component: Terms,
      },
      {
        path: "policy",
        Component: Privacy,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    errorElement: <Error404 />,
  },
]);

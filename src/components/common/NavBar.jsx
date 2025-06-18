import React, { useContext, useEffect, useState } from "react";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { LuArrowUpRight } from "react-icons/lu";
import { Link, NavLink, useLocation, useNavigate } from "react-router";
import { Slide } from "react-awesome-reveal";
import { FiShoppingCart } from "react-icons/fi";
import { AuthContext } from "../../contexts/AuthContext";
import { FaRegCircleUser } from "react-icons/fa6";
import { Tooltip } from "react-tooltip";
import Swal from "sweetalert2";
import useCartProductsApi from "../../api/useCartProductsApi";

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { getCartProducts } = useCartProductsApi();
  const { user, logOut, isLoading } = useContext(AuthContext);
  const [cartProducts, setCartProducts] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (!cartProducts || cartProducts.length === 0) {
      setTotal(0);
      return;
    }

    const newTotal = cartProducts.reduce((sum, element) => {
      if (!element) return sum;
      return sum + element.price * element.quantity;
    }, 0);

    setTotal(newTotal);
  }, [cartProducts]);

  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to sign out!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#34c38f",
      cancelButtonColor: "#f25c54",
      confirmButtonText: "Sign Out",
    }).then((result) => {
      if (result.isConfirmed) {
        logOut()
          .then(() => {
            Swal.fire({
              title: "Sign out!",
              confirmButtonColor: "#34c38f",
              text: "Sign out successfully",
              icon: "success",
            });
            navigate("/");
          })
          .catch((error) => {
            console.log(error.code);
          });
      }
    });
  };

  useEffect(() => {
    if (!user?.email || isLoading) return;

    getCartProducts(user.email)
      .then((data) => {
        setCartProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching cart products:", error);
      });
  }, [user, getCartProducts, isLoading]);

  const navLinks = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/all-product"}>All product</NavLink>
      </li>
      <li>
        <NavLink to={"/add-Product"}>Add Product</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to={"/My-product"}>My product</NavLink>
        </li>
      )}
    </>
  );

  return (
    <div
      className={`${
        location.pathname === "/" ? "bg-gray-900" : "bg-base-100"
      } relative z-[50]`}
    >
      <Slide direction="down" cascade triggerOnce>
        <div className="bg-base-300 rounded-b-4xl sm:rounded-b-full relative z-[50]">
          <div className="navbar w-11/12 mx-auto">
            <div className="navbar-start">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[100] mt-3 w-52 p-2 shadow"
                >
                  {navLinks}
                </ul>
              </div>
              <Link to={"/"} className="text-2xl font-primary font-extrabold">
                Wholoset
              </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal border-2 gap-2 rounded-full">
                {navLinks}
              </ul>
            </div>
            <div className="navbar-end gap-2">
              {/* Cart */}
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle"
                >
                  <div className="indicator">
                    <FiShoppingCart className="text-2xl" />
                    <span className="badge badge-sm indicator-item bg-primary text-white border-none">
                      {cartProducts?.length || 0}
                    </span>
                  </div>
                </div>
                <div
                  tabIndex={0}
                  className="mt-3 card dropdown-content w-72 bg-base-100 shadow-lg border border-base-200 z-[100]"
                >
                  <div className="card-body space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-base-content text-lg">
                        {cartProducts?.length || 0} Items
                      </span>
                      <span className="text-sm text-accent">
                        Subtotal: <strong>${total.toFixed(2)}</strong>
                      </span>
                    </div>
                    <ul className="text-sm text-base-content space-y-1">
                      {cartProducts?.length > 0 ? (
                        cartProducts.map((cartProduct) =>
                          cartProduct ? (
                            <li
                              key={cartProduct._id}
                              className="flex justify-between"
                            >
                              <span>{cartProduct.name}</span>
                              <span>
                                $
                                {(
                                  cartProduct.price * cartProduct.quantity
                                ).toFixed(2)}
                              </span>
                            </li>
                          ) : null
                        )
                      ) : (
                        <li>No items in cart</li>
                      )}
                    </ul>
                    <div className="card-actions">
                      <Link
                        to={"my-cart"}
                        className="btn btn-primary btn-block rounded-xl"
                      >
                        View Cart
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* ThemeToggle */}
              <ThemeToggle />
              {!user && (
                <>
                  <Link
                    to={"sign-in"}
                    className="btn btn-outline hover:bg-base-content hover:text-base-100 rounded-full font-accent hidden sm:flex"
                  >
                    Sign In
                  </Link>
                  <Link
                    to={"sign-up"}
                    className="btn bg-base-content text-base-100 hover:bg-base-100 hover:text-base-content rounded-full font-accent"
                  >
                    Sign Up
                  </Link>
                </>
              )}
              {user && (
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content={`${user.displayName}`}
                  >
                    <div className="w-10 rounded-full">
                      {user?.photoURL ? (
                        <img
                          referrerPolicy="no-referrer"
                          alt={user?.displayName || "User"}
                          src={user.photoURL}
                        />
                      ) : (
                        <FaRegCircleUser className="w-full h-full" />
                      )}
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow z-[100]"
                  >
                    <li>
                      <Link to={"/my-profile"} className="justify-between">
                        Profile
                        <span className="badge">New</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={`/my-orders/${user.email}`}>My Orders</Link>
                    </li>
                    <li onClick={handleLogOut}>
                      <a>Logout</a>
                    </li>
                  </ul>
                </div>
              )}
              <Tooltip id="my-tooltip" />
            </div>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default NavBar;

import React from "react";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { LuArrowUpRight } from "react-icons/lu";
import { Link, NavLink, useLocation } from "react-router";
import { Slide } from "react-awesome-reveal";
import { FiShoppingCart } from "react-icons/fi";

const NavBar = () => {
  const location = useLocation();
  // console.log(location);
  const navLinks = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      {/* <li>
        <a href="#categories">Categories</a>
      </li> */}
      <li>
        <NavLink to={"/all-product"}>All product</NavLink>
      </li>
      <li>
        <NavLink to={"/add-Product"}>Add Product</NavLink>
      </li>
      <li>
        <NavLink to={"/My-product"}>My product</NavLink>
      </li>
    </>
  );

  return (
    <div
      className={`${location.pathname == "/" ? "bg-gray-900" : "bg-base-100"}`}
    >
      <Slide direction="down" cascade triggerOnce>
        <div className="bg-base-300 rounded-b-4xl sm:rounded-b-full">
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
                    {" "}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />{" "}
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                  {navLinks}
                </ul>
              </div>
              <Link to={"/"} className="text-2xl font-primary  font-extrabold">
                Wholoset
              </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal border-2 gap-2  rounded-full">
                {navLinks}
              </ul>
            </div>
            <div className="navbar-end gap-2">
              {/* cart */}
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle"
                >
                  <div className="indicator">
                    <FiShoppingCart className="text-2xl" />
                    <span className="badge badge-sm indicator-item bg-primary text-white border-none">
                      0
                    </span>
                  </div>
                </div>

                <div
                  tabIndex={0}
                  className="mt-3 z-10 card dropdown-content w-72 bg-base-100 shadow-lg border border-base-200"
                >
                  <div className="card-body space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-base-content text-lg">
                        8 Items
                      </span>
                      <span className="text-sm text-accent">
                        Subtotal: <strong>$999</strong>
                      </span>
                    </div>

                    <ul className="text-sm text-base-content space-y-1">
                      <li className="flex justify-between">
                        <span>Sports Shoes</span>
                        <span>$120</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Backpack</span>
                        <span>$89</span>
                      </li>
                      <li className="text-center text-xs text-gray-400 italic">
                        +6 more items
                      </li>
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

              {/* themeToggle */}
              <ThemeToggle />

              <Link
                to={"sign-in"}
                className="btn btn-outline hover:bg-base-content hover:text-base-100 rounded-full font-accent hidden sm:flex"
              >
                Sign In
              </Link>
              <Link
                to={"sign-up"}
                className="btn bg-base-content text-base-100 hover:bg-base-100 hover:text-base-content rounded-full font-accent  "
              >
                Sign Up
              </Link>
              <div className="dropdown dropdown-end ">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src="https://www.svgrepo.com/show/524199/user-circle.svg"
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow z-50"
                >
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default NavBar;

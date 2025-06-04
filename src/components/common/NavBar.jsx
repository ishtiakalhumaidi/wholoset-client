import React from "react";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { LuArrowUpRight } from "react-icons/lu";
import { Link, NavLink } from "react-router";
import { Slide } from "react-awesome-reveal";

const NavBar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <a href="#categories" >Categories</a>
      </li>
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
    <div className="bg-gray-900 ">
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
              <ThemeToggle />

              <Link className="btn btn-outline hover:bg-base-content hover:text-base-100 rounded-full font-accent hidden sm:flex">
                Sign In
              </Link>
              <Link className="btn bg-base-content text-base-100 hover:bg-base-100 hover:text-base-content rounded-full font-accent  ">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default NavBar;

import React from "react";
import { Slide } from "react-awesome-reveal";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <Slide direction="up" cascade triggerOnce>
      <div className="relative mt-16 bg-gray-900">
        <svg
          className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-gray-900"
          preserveAspectRatio="none"
          viewBox="0 0 1440 54"
        >
          <path
            fill="currentColor"
            d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
          />
        </svg>

        <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
            {/* Logo Column */}
            <div className="md:max-w-11/12 lg:col-span-2">
              <a
                href="/"
                aria-label="Go home"
                title="Company"
                className="inline-flex items-center"
              >
                <span className="ml-2 text-3xl font-bold tracking-wide text-gray-100 font-accent">
                  Wholoset
                </span>
              </a>
              <div className="mt-4 lg:max-w-sm">
                <p className="text-sm text-gray-200">
                  Your trusted global B2B wholesale marketplace. Connect with
                  suppliers for bulk deals across electronics, apparel,
                  machinery, and more. Secure transactions and seamless
                  logistics, tailored for retailers and institutions.
                </p>
              </div>
            </div>

            {/* Category and Custom Nav */}
            <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
              <div>
                <p className="font-semibold tracking-wide text-gray-100">
                  Category
                </p>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a
                      href="/category/electronics-gadgets"
                      className="transition-colors duration-300 text-gray-200 hover:text-gray-100"
                    >
                      Electronics & Gadgets
                    </a>
                  </li>
                  <li>
                    <a
                      href="/category/apparel-fashion"
                      className="transition-colors duration-300 text-gray-200 hover:text-gray-100"
                    >
                      Apparel & Fashion
                    </a>
                  </li>
                  <li>
                    <a
                      href="/category/industrial-machinery"
                      className="transition-colors duration-300 text-gray-200 hover:text-gray-100"
                    >
                      Industrial Machinery
                    </a>
                  </li>
                  <li>
                    <a
                      href="/category/home-appliances"
                      className="transition-colors duration-300 text-gray-200 hover:text-gray-100"
                    >
                      Home Appliances
                    </a>
                  </li>
                  <li>
                    <a
                      href="/category/office-supplies"
                      className="transition-colors duration-300 text-gray-200 hover:text-gray-100"
                    >
                      Office Supplies
                    </a>
                  </li>
                  <li>
                    <a
                      href="/category/health-personal-care"
                      className="transition-colors duration-300 text-gray-200 hover:text-gray-100"
                    >
                      Health & Personal Care
                    </a>
                  </li>
                  <li>
                    <a
                      href="/category/furniture-decor"
                      className="transition-colors duration-300 text-gray-200 hover:text-gray-100"
                    >
                      Furniture & Decor
                    </a>
                  </li>
                  <li>
                    <a
                      href="/category/sporting-goods"
                      className="transition-colors duration-300 text-gray-200 hover:text-gray-100"
                    >
                      Sporting Goods
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-semibold tracking-wide text-gray-100">
                  Navigation
                </p>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a
                      href="/"
                      className="text-gray-200 hover:text-teal-accent-400"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="/categories"
                      className="text-gray-200 hover:text-teal-accent-400"
                    >
                      Categories
                    </a>
                  </li>
                  <li>
                    <a
                      href="/products"
                      className="text-gray-200 hover:text-teal-accent-400"
                    >
                      All Product
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-semibold tracking-wide text-gray-100">
                  Legal
                </p>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a
                      href="/terms"
                      className="text-gray-200 hover:text-teal-accent-400"
                    >
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      href="/policy"
                      className="text-gray-200 hover:text-teal-accent-400"
                    >
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Footer bottom */}
          <div className="flex flex-col justify-between pt-5 pb-10 border-t border-white sm:flex-row">
            <p className="text-sm text-gray-100">
              © {new Date().getFullYear()} Wholoset Ltd. All rights reserved.
            </p>
            <div className="flex items-center mt-4 space-x-4 sm:mt-0">
              <a
                href="/"
                className="transition-colors duration-300 text-white hover:text-teal-accent"
              >
                <FaFacebook />
              </a>
              <a
                href="/"
                className="transition-colors duration-300 text-white hover:text-teal-accent"
              >
                <FaXTwitter />
              </a>
              <a
                href="/"
                className="transition-colors duration-300 text-white hover:text-teal-accent"
              >
                <BsInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default Footer;

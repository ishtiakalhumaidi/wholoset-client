import React, { useState, useEffect } from "react";
import {
  FiMenu,
  FiX,
  FiHome,
  FiUsers,
  FiShoppingBag,
  FiSettings,
  FiPackage,
  FiShoppingCart,
  FiUser,

  FiChevronDown,
} from "react-icons/fi";
import { useUser } from "../contexts/UserProvider";
import Loader from "../components/common/Loader";
import ThemeToggle from "../components/ThemeToggle/ThemeToggle";
import { Link } from "react-router";

const DashboardLayout = () => {
  const { currentUser: nowUser, loading } = useUser();
  const [userRole] = useState(nowUser?.role);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [currentUser] = useState(nowUser);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    }, observerOptions);

    document.querySelectorAll("[data-aos]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const navItems = {
    admin: [
      { name: "Dashboard", to: "/dashboard", icon: FiHome },
      { name: "Manage Users", to: "/dashboard/users", icon: FiUsers },
      { name: "Orders", to: "/dashboard/orders", icon: FiShoppingBag },
      { name: "Settings", to: "/dashboard/settings", icon: FiSettings },
    ],
    seller: [
      { name: "Dashboard", to: "/dashboard", icon: FiHome },
      { name: "My Products", to: "/dashboard/products", icon: FiPackage },
      { name: "Orders", to: "/dashboard/orders", icon: FiShoppingBag },
      { name: "Profile", to: "/dashboard/profile", icon: FiUser },
    ],
    buyer: [
      { name: "Dashboard", to: "/dashboard", icon: FiHome },
      {
        name: "Browse Products",
        to: "/dashboard/browse",
        icon: FiShoppingCart,
      },
      { name: "My Orders", to: "/dashboard/orders", icon: FiShoppingBag },
      { name: "Profile", to: "/dashboard/profile", icon: FiUser },
    ],
  };
  if (loading) return <Loader />;

  const MockContent = () => (
    <div className="space-y-8">
      {/* Hero Section */}
      <div
        className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-3xl p-8 backdrop-blur-sm border border-base-300/50"
        data-aos="fade-up"
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
          Welcome back, {currentUser.displayName}
        </h1>
        {/* <p className="text-base-content/70 text-lg mb-6">
          Here's what's happening with your business today
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-base-100/50 backdrop-blur-sm rounded-2xl p-6 border border-base-300/50 hover:shadow-lg transition-all duration-300 hover:scale-105">
            <div className="text-3xl font-bold text-primary mb-2">$12,345</div>
            <div className="text-base-content/60">Total Revenue</div>
            <div className="text-success text-sm">+12% from last month</div>
          </div>
          <div className="bg-base-100/50 backdrop-blur-sm rounded-2xl p-6 border border-base-300/50 hover:shadow-lg transition-all duration-300 hover:scale-105">
            <div className="text-3xl font-bold text-secondary mb-2">156</div>
            <div className="text-base-content/60">Active Orders</div>
            <div className="text-warning text-sm">3 pending review</div>
          </div>
          <div className="bg-base-100/50 backdrop-blur-sm rounded-2xl p-6 border border-base-300/50 hover:shadow-lg transition-all duration-300 hover:scale-105">
            <div className="text-3xl font-bold text-accent mb-2">89%</div>
            <div className="text-base-content/60">Customer Satisfaction</div>
            <div className="text-success text-sm">+5% improvement</div>
          </div>
        </div> */}
        <h2 className="text-3xl font-bold animate-pulse text-primary">We are working on it be patient something good are coming...</h2>
      </div>

      {/* Quick Actions */}
      <div data-aos="fade-up" data-aos-delay="200">
        <h2 className="text-2xl font-bold mb-6">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "Add Product",
            "View Analytics",
            "Customer Support",
            "Inventory",
          ].map((action, idx) => (
            <button
              key={action}
              className="btn btn-outline hover:btn-primary transition-all duration-300 hover:scale-105 hover:shadow-lg"
              data-aos="zoom-in"
              data-aos-delay={300 + idx * 100}
            >
              {action}
            </button>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div data-aos="fade-up" data-aos-delay="400">
        <h2 className="text-2xl font-bold mb-6">Recent Activity</h2>
        <div className="bg-base-100/50 backdrop-blur-sm rounded-2xl border border-base-300/50 overflow-hidden">
          {[
            {
              action: "New order received",
              time: "2 minutes ago",
              status: "success",
            },
            { action: "Product updated", time: "1 hour ago", status: "info" },
            {
              action: "Customer message",
              time: "3 hours ago",
              status: "warning",
            },
            {
              action: "Payment processed",
              time: "5 hours ago",
              status: "success",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-4 border-b border-base-300/30 last:border-b-0 hover:bg-base-200/30 transition-colors duration-200"
              data-aos="slide-right"
              data-aos-delay={500 + idx * 100}
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      item.status === "success"
                        ? "bg-success"
                        : item.status === "warning"
                        ? "bg-warning"
                        : "bg-info"
                    }`}
                  ></div>
                  <span className="font-medium">{item.action}</span>
                </div>
                <span className="text-sm text-base-content/60">
                  {item.time}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen bg-gradient-to-br from-base-200 via-base-300/30 to-base-200 overflow-hidden">
      <style>{`
        [data-aos] {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        [data-aos].animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        [data-aos="fade-up"].animate-in {
          transform: translateY(0);
        }
        
        [data-aos="zoom-in"] {
          transform: scale(0.9) translateY(20px);
        }
        
        [data-aos="zoom-in"].animate-in {
          transform: scale(1) translateY(0);
        }
        
        [data-aos="slide-right"] {
          transform: translateX(-30px);
        }
        
        [data-aos="slide-right"].animate-in {
          transform: translateX(0);
        }

        .glass-effect {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
      `}</style>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-50 w-72 overflow-y-auto bg-base-100/95 backdrop-blur-xl border-r border-base-300/50
          transform transition-all duration-300 ease-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:static md:inset-auto
        `}
        data-aos="slide-right"
      >
        {/* Logo */}
        <div className="p-6 border-b border-base-300/50">
          <Link to={"/"} className="text-2xl font-bold text-primary">
            Wholoset
          </Link>
          <div className="text-sm text-base-content/60 mt-1">Dashboard</div>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col p-4 space-y-2">
          {navItems[userRole].map(({ name, to, icon: Icon }, idx) => (
            <button
              key={to}
              className={`
                flex items-center px-4 py-3 rounded-xl transition-all duration-300 group
                hover:bg-primary/10 hover:text-primary hover:scale-105 hover:shadow-md
                text-base-content/80 hover:text-primary
              `}
              onClick={() => setSidebarOpen(false)}
              data-aos="fade-right"
              data-aos-delay={idx * 100}
            >
              <Icon className="w-5 h-5 mr-3 transition-colors" />
              <span className="font-medium">{name}</span>
              <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
              </div>
            </button>
          ))}
        </nav>

        {/* User Profile in Sidebar */}
        <div className="mt-auto p-4 border-t border-base-300/50">
          <div className="flex items-center space-x-3 p-3 rounded-xl hover:bg-base-200/50 transition-colors cursor-pointer">
            <img
              src={currentUser.photoURL}
              alt="Profile"
              className="w-10 h-10 rounded-full ring-2 ring-primary/20"
            />
            <div className="flex-1 min-w-0">
              <div className="font-medium text-sm truncate">
                {currentUser.displayName}
              </div>
              <div className="text-xs text-base-content/60 truncate">
                {currentUser.email}
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main content area */}
      <div className="flex flex-col flex-1 min-w-0">
        {/* Top navbar */}
        <header
          className="flex items-center justify-between px-6 py-4 bg-base-100/80 backdrop-blur-xl border-b border-base-300/50 sticky top-0 z-30"
          data-aos="fade-down"
        >
          {/* Left side */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="btn btn-ghost btn-circle hover:btn-primary md:hidden"
              aria-label="Toggle sidebar"
            >
              {sidebarOpen ? (
                <FiX className="w-5 h-5" />
              ) : (
                <FiMenu className="w-5 h-5" />
              )}
            </button>

         
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-3">
            <ThemeToggle />

            {/* Profile Dropdown */}
            <div className="dropdown dropdown-end">
              <label
                tabIndex={0}
                className="btn btn-ghost hover:btn-primary rounded-full px-3 py-2 flex items-center space-x-2"
                onClick={() => setProfileOpen(!profileOpen)}
              >
                <img
                  src={currentUser.photoURL}
                  alt="Profile"
                  className="w-8 h-8 rounded-full ring-2 ring-primary/20"
                />
                <span className="hidden md:block font-medium">
                  {currentUser.displayName}
                </span>
                <FiChevronDown className="w-4 h-4" />
              </label>

              {profileOpen && (
                <ul className="dropdown-content menu p-2 shadow-lg bg-base-100 rounded-xl w-52 border border-base-300/50 backdrop-blur-xl">
                  <li>
                    <a className="hover:bg-primary/10 hover:text-primary rounded-lg">
                      Profile Settings
                    </a>
                  </li>
                  <li>
                    <a className="hover:bg-primary/10 hover:text-primary rounded-lg">
                      Billing
                    </a>
                  </li>
                  <li>
                    <a className="hover:bg-primary/10 hover:text-primary rounded-lg">
                      Help Center
                    </a>
                  </li>
                  <div className="divider my-1"></div>
                  <li>
                    <a className="hover:bg-error/10 hover:text-error rounded-lg">
                      Sign Out
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-6 overflow-auto">
          <div data-aos="fade-in">
            <MockContent />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;

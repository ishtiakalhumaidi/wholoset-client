import React from "react";
import NavBar from "../components/common/NavBar";
import { Outlet } from "react-router";
import Footer from "../components/common/Footer";
import ScrollToTop from "../components/ui/ScrollToTop";

const MainLayout = () => {
  return (
    <div>
      <ScrollToTop />
      <header>
        <NavBar />
      </header>
      <main className="pt-18">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;

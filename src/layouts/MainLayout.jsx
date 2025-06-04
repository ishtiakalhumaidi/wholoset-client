import React from "react";
import NavBar from "../components/common/NavBar";
import { Outlet } from "react-router";
import Footer from "../components/common/Footer";

const MainLayout = () => {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;

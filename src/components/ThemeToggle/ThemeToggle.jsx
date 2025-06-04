import React, { useEffect, useState } from "react";
import { IoMoon } from "react-icons/io5";
import { MdOutlineWbSunny } from "react-icons/md";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    return (
      localStorage.getItem("theme") ||
      document.documentElement.getAttribute("data-theme") ||
      "light"
    );
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <button className="text-2xl cursor-pointer" onClick={toggleTheme}>
      {theme === "dark" ? <MdOutlineWbSunny /> : <IoMoon />}
    </button>
  );
};

export default ThemeToggle;

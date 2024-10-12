"use client";

import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { BsSun, BsMoon } from "react-icons/bs";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="flex justify-between items-center p-4 bg-light-navbar dark:bg-dark-navbar shadow-lg fixed top-0 left-0 w-full">
      <h1 className="text-xl font-bold">Ifzy</h1>
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2"
        aria-label="Toggle Theme"
      >
        {theme === "light" ? (
          <BsMoon size={24} color="#000000" />
        ) : (
          <BsSun size={24} color="#ffffff" />
        )}
      </button>
    </nav>
  );
};

export default Navbar;

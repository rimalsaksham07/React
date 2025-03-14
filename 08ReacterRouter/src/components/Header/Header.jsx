import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo or Name */}
        <NavLink to="/" className="text-2xl font-bold text-gray-800 hover:text-blue-500 transition-colors duration-300">
          My Portfolio
        </NavLink>

        {/* Navigation Links */}
        <nav className="space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-gray-600 hover:text-blue-500 transition-colors duration-300 ${
                isActive ? "font-semibold text-blue-500 underline" : ""
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-gray-600 hover:text-blue-500 transition-colors duration-300 ${
                isActive ? "font-semibold text-blue-500" : ""
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `text-gray-600 hover:text-blue-500 transition-colors duration-300 ${
                isActive ? "font-semibold text-blue-500" : ""
              }`
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-gray-600 hover:text-blue-500 transition-colors duration-300 ${
                isActive ? "font-semibold text-blue-500" : ""
              }`
            }
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
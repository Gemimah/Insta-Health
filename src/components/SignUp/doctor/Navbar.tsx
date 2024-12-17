import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "/Group 1000001874.png";

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/LoginRegister");
  };

  const handleLogin = () => {
    navigate("/LoginRegister");
  };

  return (
    <>
      <nav className="bg-white shadow py-2">
        <div className="container mx-auto flex items-center justify-between">
          {/* Brand Name / Logo Section */}
          <div className="flex items-center">
            <img src={logo} alt="Insta Health" className="h-8 w-auto mr-2" />
            <a
              href="/"
              className="text-lg font-bold text-primary hover:text-blue-700"
            >
              InstaHealth
            </a>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-700 font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-blue-700 font-medium"
            >
              About Us
            </Link>
            <Link
              to="/services"
              className="text-gray-700 hover:text-blue-700 font-medium"
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-blue-700 font-medium"
            >
              Contact
            </Link>
          </div>

          {/* Right Side Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              onClick={handleLogin}
            >
              Login
            </button>
            <button
              className="border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50"
              onClick={handleSignUp}
            >
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <div className="flex flex-col space-y-2 mt-2">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-700 font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-blue-700 font-medium"
            >
              About Us
            </Link>
            <Link
              to="/services"
              className="text-gray-700 hover:text-blue-700 font-medium"
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-blue-700 font-medium"
            >
              Contact
            </Link>
          </div>
          <div className="flex flex-col space-y-2 mt-4">
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              onClick={handleLogin}
            >
              Login
            </button>
            <button
              className="border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50"
              onClick={handleSignUp}
            >
              Sign Up
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-between p-4 md:p-6">
        <div>
          <h1 className="text-2xl font-bold">JointDevs</h1>
        </div>
        
        {/* Hamburger menu for mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-active">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <ul className="flex bg-black rounded-md">
            <li
              className={`bg-black px-8 py-2 text-active font-thin text-sm rounded-md ${
                location.pathname === "/" ? "bg-white text-black" : ""
              }`}
            >
              <Link to="/" className="transition-colors">
                Home
              </Link>
            </li>

            <li
              className={`bg-black px-8 py-2 text-active font-thin text-sm rounded-md ${
                location.pathname === "/services" ? "bg-white text-black" : ""
              }`}
            >
              <Link to="/services" className="transition-colors">
                Services
              </Link>
            </li>
            <li
              className={`bg-black px-8 py-2 text-active font-thin text-sm rounded-md ${
                location.pathname === "/blogs" ? "bg-white text-black" : ""
              }`}
            >
              <Link to="/blogs" className="transition-colors">
                Blogs
              </Link>
            </li>
            <li
              className={`bg-black px-8 py-2 text-active font-thin text-sm rounded-md ${
                location.pathname === "/contact" ? "bg-white text-black" : ""
              }`}
            >
              <Link to="/contact" className="transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="hidden md:block">
          <button className="px-6 py-2 bg-zinc-600 text-active rounded-md cursor-pointer hover:bg-zinc-700 transition-colors">
            Get Quote
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black p-4 z-50">
          <ul className="flex flex-col space-y-4">
            <li
              className={`px-4 py-2 text-active font-thin text-sm ${
                location.pathname === "/" ? "bg-white text-black rounded-md" : ""
              }`}
            >
              <Link to="/" className="transition-colors block">
                Home
              </Link>
            </li>
            <li
              className={`px-4 py-2 text-active font-thin text-sm ${
                location.pathname === "/services" ? "bg-white text-black rounded-md" : ""
              }`}
            >
              <Link to="/services" className="transition-colors block">
                Services
              </Link>
            </li>
            <li
              className={`px-4 py-2 text-active font-thin text-sm ${
                location.pathname === "/blogs" ? "bg-white text-black rounded-md" : ""
              }`}
            >
              <Link to="/blogs" className="transition-colors block">
                Blogs
              </Link>
            </li>
            <li
              className={`px-4 py-2 text-active font-thin text-sm ${
                location.pathname === "/contact" ? "bg-white text-black rounded-md" : ""
              }`}
            >
              <Link to="/contact" className="transition-colors block">
                Contact
              </Link>
            </li>
            <li>
              <button className="w-full px-6 py-2 bg-zinc-600 text-active rounded-md cursor-pointer hover:bg-zinc-700 transition-colors">
                Get Quote
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navigation;
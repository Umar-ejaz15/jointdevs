import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import DarkModeToggle from "./DarkModeToggle";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="flex justify-between items-center h-16 bg-white text-black dark:bg-black dark:text-white relative shadow-sm font-mono px-4 w-full">
      <h1 className="text-4xl font-bold">Techon</h1>
      <div className="flex md:hidden justify-between items-center gap-4">
        <DarkModeToggle className="md:hidden" />
        <button onClick={() => toggleMenu()} className="text-4xl transition-all duration-300 ease-in-out">
          {isMenuOpen ? <AiOutlineClose /> : <BiMenu />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="w-full h-screen absolute top-16 p-8 bg-white dark:bg-black left-0 md:hidden transition-all duration-300 ease-in-out z-50">
          <ul className="flex md:hidden flex-col justify-center items-center gap-8 text-xl">
            <li className="w-full text-center hover:bg-gray-100 dark:hover:bg-gray-800 py-2 rounded-lg transition-all duration-200">
              <Link to="/" onClick={toggleMenu}>Home</Link>
            </li>
            <li className="w-full text-center hover:bg-gray-100 dark:hover:bg-gray-800 py-2 rounded-lg transition-all duration-200">
              <Link to="/about" onClick={toggleMenu}>About</Link>
            </li>
            <li className="w-full text-center hover:bg-gray-100 dark:hover:bg-gray-800 py-2 rounded-lg transition-all duration-200">
              <Link to="/services" onClick={toggleMenu}>Services</Link>
            </li>
            <li className="w-full text-center hover:bg-gray-100 dark:hover:bg-gray-800 py-2 rounded-lg transition-all duration-200">
              <Link to="/work" onClick={toggleMenu}>Work</Link>
            </li>
            <li className="w-full text-center hover:bg-gray-100 dark:hover:bg-gray-800 py-2 rounded-lg transition-all duration-200">
              <Link to="/contact" onClick={toggleMenu}>Contact</Link>
            </li>
          </ul>
          <div className="flex mt-8 justify-center items-center">
            <Button txt="Get Started" />
          </div>
        </div>
      )}

      <div className="hidden md:flex items-center gap-10">
        <ul className="hidden md:flex gap-5 text-lg">
          <li className="hover:text-blue-600 dark:hover:text-purple-600 transition-all duration-200">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-blue-600 dark:hover:text-purple-600 transition-all duration-200">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-blue-600 dark:hover:text-purple-600 transition-all duration-200">
            <Link to="/services">Services</Link>
          </li>
          <li className="hover:text-blue-600 dark:hover:text-purple-600 transition-all duration-200">
            <Link to="/work">Work</Link>
          </li>
          <li className="hover:text-blue-600 dark:hover:text-purple-600 transition-all duration-200">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="hidden md:flex gap-5 items-center">
          <DarkModeToggle />
          <Button txt="Get Started" />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
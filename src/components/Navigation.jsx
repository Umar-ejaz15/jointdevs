import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import DarkModeToggle from "./DarkModeToggle";
import { BiMenu } from "react-icons/bi";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="flex  justify-between items-center h-16 bg-white text-black dark:bg-black dark:text-white  relative shadow-sm font-mono px-4">
      <h1 className="text-4xl font-bold">Techon</h1>
      <div className="flex md:hidden justify-between items-center gap-4">
        <DarkModeToggle className="md:hidden"  />
        <button onClick={() => toggleMenu()} className="text-4xl">
          <BiMenu className="md:hidden" />
        </button>
      </div>

      {isMenuOpen && (
        <div className="w-full h-screen absolute top-16 p-16 bg-white/50 left-0 md:hidden items-center gap-10">
          <ul className=" flex md:hidden flex-col justify-center items-center  gap-5 text-lg">
            <li className="hover:border-b hover:border-blue-600  dark:border-purple-600 ">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:border-b hover:border-blue-600  dark:border-purple-600 ">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:border-b hover:border-blue-600  dark:border-purple-600 ">
              <Link to="/services">Services</Link>
            </li>
            <li className="hover:border-b hover:border-blue-600  dark:border-purple-600 ">
              <Link to="/work">Work</Link>
            </li>
            <li className="hover:border-b hover:border-blue-600  dark:border-purple-600 ">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <div className="flex mt-5 justify-center items-center">
            <Button txt="Get Started" />
          </div>
        </div>
      )}

      <div className="hidden md:flex items-center gap-10">
        <ul className="hidden md:flex  gap-5 text-lg">
          <li className="hover:border-b hover:border-blue-600  dark:border-purple-600 ">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:border-b hover:border-blue-600  dark:border-purple-600 ">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:border-b hover:border-blue-600  dark:border-purple-600 ">
            <Link to="/services">Services</Link>
          </li>
          <li className="hover:border-b hover:border-blue-600  dark:border-purple-600 ">
            <Link to="/work">Work</Link>
          </li>
          <li className="hover:border-b hover:border-blue-600  dark:border-purple-600 ">
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

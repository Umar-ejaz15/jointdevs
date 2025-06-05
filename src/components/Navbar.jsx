import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { ArrowDown, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white z-50 shadow-sm">
      <div className="flex justify-between items-center px-4 sm:px-8 md:px-12 lg:px-20 py-4">
        <nav className="flex justify-between items-center w-full">
          <div className="w-40">
            <img src="/logo.jpg" alt="LOGO" className="w-full h-full object-contain" />
          </div>
          <div className="hidden md:block">
            <ul className="flex text-sm font-bold justify-between items-center gap-6 uppercase">
              <li className="hover:text-red-500 transition-colors">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:text-red-500 transition-colors">
                <Link to="/about">About us</Link>
              </li>
              <li className="relative group">
                <Link
                  to="/services"
                  className="hover:text-red-500 flex items-center gap-1 transition-colors"
                >
                  Our Services <ArrowDown className="w-4 h-4" />
                </Link>
                <div className="absolute top-full left-0 mt-2 w-56 z-10">
                  <ul className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 bg-white shadow-xl rounded-lg py-2">
                    <li className="px-4 py-3 hover:bg-red-50 transition-colors">
                      <Link to="/services/ecommerce" className="block">
                        Ecommerce
                      </Link>
                    </li>
                    <li className="px-4 py-3 hover:bg-red-50 transition-colors">
                      <Link to="/services/graphic-design" className="block">
                        Graphic Design
                      </Link>
                    </li>
                    <li className="px-4 py-3 hover:bg-red-50 transition-colors">
                      <Link to="/services/web-design" className="block">
                        Web Design
                      </Link>
                    </li>
                    <li className="px-4 py-3 hover:bg-red-50 transition-colors">
                      <Link
                        to="/services/digital-marketing"
                        className="block"
                      >
                        Digital Marketing
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="hover:text-red-500 transition-colors">
                <Link to="/casestudies">Case Studies</Link>
              </li>
              <li>
                <Link to="/contact">
                  <Button
                    className="px-8 cursor-pointer py-5 text-base font-semibold transition-all duration-300 hover:bg-red-600 hover:scale-105"
                    variant="destructive"
                  >
                    Contact Us
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </div>
      {isOpen && (
        <div className="fixed top-20 left-0 right-0 bg-white shadow-xl md:hidden h-[calc(100vh-5rem)] overflow-y-auto">
          <ul className="flex flex-col items-center gap-6 py-8 uppercase">
            <li className="w-full text-center hover:bg-red-50 py-3 transition-colors">
              <Link to="/" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li className="w-full text-center hover:bg-red-50 py-3 transition-colors">
              <Link to="/about" onClick={toggleMenu}>
                About us
              </Link>
            </li>
            <li className="w-full">
              <button
                onClick={() => setShowServices(!showServices)}
                className="flex items-center justify-center w-full hover:bg-red-50 py-3 transition-colors"
              >
                Our Services{" "}
                <ArrowDown
                  className={`w-4 h-4 ml-1 transition-transform ${
                    showServices ? "rotate-180" : ""
                  }`}
                />
              </button>
              {showServices && (
                <ul className="bg-gray-50 py-4 space-y-2">
                  <li className="hover:bg-red-50 py-3 transition-colors">
                    <Link
                      to="/services/ecommerce"
                      onClick={toggleMenu}
                      className="block text-center"
                    >
                      Ecommerce
                    </Link>
                  </li>
                  <li className="hover:bg-red-50 py-3 transition-colors">
                    <Link
                      to="/services/graphic-design"
                      onClick={toggleMenu}
                      className="block text-center"
                    >
                      Graphic Design
                    </Link>
                  </li>
                  <li className="hover:bg-red-50 py-3 transition-colors">
                    <Link
                      to="/services/web-design"
                      onClick={toggleMenu}
                      className="block text-center"
                    >
                      Web Design
                    </Link>
                  </li>
                  <li className="hover:bg-red-50 py-3 transition-colors">
                    <Link
                      to="/services/digital-marketing"
                      onClick={toggleMenu}
                      className="block text-center"
                    >
                      Digital Marketing
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="w-full text-center hover:bg-red-50 py-3 transition-colors">
              <Link to="/casestudies" onClick={toggleMenu}>
                Case Studies
              </Link>
            </li>
            <li className="w-full px-4">
              <Link to="/contact" onClick={toggleMenu}>
                <Button
                  variant="destructive"
                  className="w-full py-6 text-lg font-semibold hover:bg-red-600 transition-colors"
                >
                  Contact Us
                </Button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
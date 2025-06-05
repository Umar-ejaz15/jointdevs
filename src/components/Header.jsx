import { Mail, Phone } from "lucide-react";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-black px-4 sm:px-8 md:px-12 lg:px-20 w-full flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between items-center text-white py-3">
      <div className="flex flex-row sm:flex-row gap-4 sm:gap-8 justify-center items-center sm:items-start">
        <div className="flex items-center justify-center gap-3 hover:text-red-500 transition-colors">
          <Phone size={15} className="text-red-500" />
          <p className="text-sm sm:text-base">+380 98 765 43 21</p>
        </div>
        <div className="flex items-center justify-center gap-3 hover:text-red-500 transition-colors">
          <Mail size={15} className="text-red-500" />
          <p className="text-sm sm:text-base">info@example.com</p>
        </div>
      </div>
      <div>
        <div className="social-icons flex gap-2">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-500 p-2 rounded-full hover:bg-red-600 transition-colors"
          >
            <FaFacebook size={15} className="text-white" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-500 p-2 rounded-full hover:bg-red-600 transition-colors"
          >
            <FaInstagram size={15} className="text-white" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-500 p-2 rounded-full hover:bg-red-600 transition-colors"
          >
            <FaLinkedin size={15} className="text-white" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
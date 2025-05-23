import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="dark:bg-zinc-950 dark:text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-gray-300 transition-colors duration-300">Home</a></li>
              <li><a href="/about" className="hover:text-gray-300 transition-colors duration-300">About us</a></li>
              <li><a href="/services" className="hover:text-gray-300 transition-colors duration-300">Our Services</a></li>
              <li><a href="/case-studies" className="hover:text-gray-300 transition-colors duration-300">Case Studies</a></li>
              <li><a href="/contact" className="hover:text-gray-300 transition-colors duration-300">Contact us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2"><FaMapMarkerAlt className="text-gray-300" /> 12-Shamsabad Near Eid Ghah Chowk Multan</li>
              <li className="flex items-center gap-2"><FaEnvelope className="text-gray-300" /><a href="mailto:Info@xpanzia.com" className="hover:text-gray-300 transition-colors duration-300">Info@xpanzia.com</a></li>
              <li className="flex items-center gap-2"><FaPhoneAlt className="text-gray-300" /><a href="tel:+923081699905" className="hover:text-gray-300 transition-colors duration-300">+923081699905</a></li>
              <li className="flex items-center gap-2"><FaPhoneAlt className="text-gray-300" /><a href="tel:+14698989062" className="hover:text-gray-300 transition-colors duration-300">+14698989062</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow us</h3>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-gray-300 transition-colors duration-300 text-xl"><FaFacebookF /></a>
              <a href="#" className="hover:text-gray-300 transition-colors duration-300 text-xl"><FaInstagram /></a>
              <a href="#" className="hover:text-gray-300 transition-colors duration-300 text-xl"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
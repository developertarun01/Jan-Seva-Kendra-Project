import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Dezire Online Works
        </Link>
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:text-gray-200">Home</Link></li>
          <li><Link to="/services" className="hover:text-gray-200">Services</Link></li>
          <li><Link to="/about" className="hover:text-gray-200">About</Link></li>
          <li><Link to="/contact" className="hover:text-gray-200">Contact</Link></li>
          <li><Link to="/faqs" className="hover:text-gray-200">FAQs</Link></li>
          {/* <li><Link to="/login" className="hover:text-gray-200">Login</Link></li> */}
        </ul>
      </div>
    </nav>
  );
}
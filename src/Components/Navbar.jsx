import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-red-600">
          F1Streetwear
        </Link>

        {/* Toggle Button (Mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          {/* Hamburger Icon */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 font-medium">
          <Link to="/" className="hover:text-red-500">Home</Link>
          <Link to="/contactus" className="hover:text-red-500">Contactus</Link>
          <Link to="/cart" className="hover:text-red-500">Cart</Link>
          <Link to="/login" className="hover:text-red-500">Login</Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 font-medium">
          <Link to="/" className="block hover:text-red-500" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/category/tees" className="block hover:text-red-500" onClick={() => setIsOpen(false)}>Categories</Link>
          <Link to="/cart" className="block hover:text-red-500" onClick={() => setIsOpen(false)}>Cart</Link>
          <Link to="/login" className="block hover:text-red-500" onClick={() => setIsOpen(false)}>Login</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

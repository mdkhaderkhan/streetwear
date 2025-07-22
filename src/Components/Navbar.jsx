// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // optional, install: npm i lucide-react

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-4 py-3">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="text-2xl font-bold text-red-600">
          F1Streetwear
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 font-medium">
          <Link to="/" className="hover:text-red-500">Home</Link>
          <Link to="/category/tees" className="hover:text-red-500">Categories</Link>
          <Link to="/cart" className="hover:text-red-500">Cart</Link>
          <Link to="/login" className="hover:text-red-500">Login</Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-3 space-y-2 text-center font-medium">
          <Link to="/" className="block hover:text-red-500" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/category/tees" className="block hover:text-red-500" onClick={() => setMenuOpen(false)}>Categories</Link>
          <Link to="/cart" className="block hover:text-red-500" onClick={() => setMenuOpen(false)}>Cart</Link>
          <Link to="/login" className="block hover:text-red-500" onClick={() => setMenuOpen(false)}>Login</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-red-600">
        F1Streetwear
      </Link>
      <div className="space-x-9">
        <Link to="/" className="hover:text-red-500">Home</Link>
        <Link to="/category/1" className="hover:text-red-500">Categories</Link>
        <Link to="/cart" className="hover:text-red-500">Cart</Link>
        <Link to="/login" className="hover:text-red-500">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;

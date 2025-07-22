// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Category from './Pages/Category';
import Product from './Pages/Product'; // ✅ keep only this for product details
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import ForgotPassword from './Pages/ForgotPassword';
import Navbar from './Components/Navbar';
import ContactUs from './Components/Contactus';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;




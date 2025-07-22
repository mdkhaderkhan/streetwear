import React, { useEffect, useState } from 'react';

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const subtotal = cart.reduce((acc, item) => acc + item.price * (item.qty || 1), 0);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-8">
      <h2 className="text-3xl font-bold mb-6">Your Cart</h2>
      
      {cart.length === 0 ? (
        <p className="text-gray-400">Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={index} className="mb-6 border-b border-white/10 pb-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg">
                    {item.title} <span className="text-sm text-gray-400">(x{item.qty || 1})</span>
                  </span>
                  <span className="text-lg font-semibold">${(item.price * (item.qty || 1)).toFixed(2)}</span>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-8 text-2xl font-bold">
            Subtotal: ${subtotal.toFixed(2)}
          </div>

          <button className="mt-6 px-8 py-3 bg-white text-black rounded hover:bg-gray-200 transition">
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
}

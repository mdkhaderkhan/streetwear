import React from 'react';

export default function Login() {
  return (
    <div className="p-8 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <input type="email" placeholder="Email" className="border px-4 py-2 mb-4 w-full rounded" />
      <input type="password" placeholder="Password" className="border px-4 py-2 mb-4 w-full rounded" />
      <button className="w-full bg-black text-white py-2 rounded">Login</button>
    </div>
  );
}

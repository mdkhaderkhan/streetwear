import React from "react";

const Signup = () => {
  return (
    <div className="max-w-md mx-auto py-10">
      <h2 className="text-xl font-semibold mb-4">Sign Up</h2>
      <input type="text" placeholder="Name" className="w-full p-2 border rounded mb-4" />
      <input type="email" placeholder="Email" className="w-full p-2 border rounded mb-4" />
      <input type="password" placeholder="Password" className="w-full p-2 border rounded mb-4" />
      <button className="w-full bg-black text-white py-2 rounded">Create Account</button>
    </div>
  );
};

export default Signup;
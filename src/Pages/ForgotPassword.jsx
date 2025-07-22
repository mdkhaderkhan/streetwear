import React from "react";

const ForgotPassword = () => {
  return (
    <div className="max-w-md mx-auto py-10">
      <h2 className="text-xl font-semibold mb-4">Forgot Password</h2>
      <input type="email" placeholder="Enter your email" className="w-full p-2 border rounded mb-4" />
      <button className="w-full bg-black text-white py-2 rounded">Reset Password</button>
    </div>
  );
};

export default ForgotPassword;

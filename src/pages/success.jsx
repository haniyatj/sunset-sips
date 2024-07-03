import React from 'react';
import { Link } from 'react-router-dom';

const CheckoutSuccess = () => {
  return (
<div className="flex flex-col h-screen">

    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto text-center">
        <svg className="w-20 h-20 text-green-500 mx-auto mb-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2l4-4m-6 5l2 2l4-4" />
        </svg>
        <h2 className="text-2xl font-semibold mb-4">Payment Successful!</h2>
        <p className="text-gray-600 mb-6">Thank you for your purchase. Your order is on its way!</p>
        <Link to="/">
          <button className="bg-my-clr-100 text-white py-2 px-4 rounded hover:bg-black transition duration-300">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
    </div>
  );
};

export default CheckoutSuccess;

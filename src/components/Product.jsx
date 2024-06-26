import React, { useState, useEffect } from "react";
import useCartStore from '../stores/cartStore';

const ProductModal = ({ product, onClose }) => {

  const addToCart = useCartStore((state) => state.addToCart);
  const [selectedProduct, setSelectedProduct] = useState(null); // State to track the selected product for the modal

  const handleProductClick = (product) => {

    const productWithQuantity = {
      ...product,
      quantity: 1 // Initializing quantity to 1
    };
   // setSelectedProduct(productWithQuantity);
     // Set the selected product when clicked
     addToCart(productWithQuantity);
   onClose(); 
  };

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div className="relative bg-white rounded-lg p-8">
          <button onClick={onClose} className="absolute top-0 right-0 p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="flex items-center">
            <img src={product.image} alt={product.name} className="w-32 h-32 mr-4" />
            <div>
              <h2 className="text-xl font-dm">{product.name}</h2>
              <p className="text-gray-600">{product.description}</p>
              <p className="text-gray-700 font-dm">Price: ${product.price}</p>
              <div className="flex items-center mt-4">
                <button className="px-3 py-1 bg-my-clr-100 text-white rounded mr-4 "onClick={() => handleProductClick(product)}
>Add to Cart</button>
                <div className="flex items-center">
                  <button className="px-2 py-1  bg-my-clr-100 rounded-md">-</button>
                  <span className="mx-2">1</span>
                  <button className="px-2 py-1  bg-my-clr-100 rounded-md">+</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;

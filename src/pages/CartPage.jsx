// CartPage.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import useCartStore from '../stores/cartStore';
import NavBar from "../components/NavBar";
import { motion as m } from "framer-motion"

function CartPage() {

  const apiUrl = "http://localhost:3001";

  const [cart, setCart] = useState([]);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  const [quantities, setQuantities] = useState(cart.map(item => 1)); // Initialize all quantities to 1

  const makePayment = async () => {
    console.log('sending', cart)
    const stripe = await loadStripe("pk_test_51OtZKOEMgOiIuLB0FggBF1rko43TmGfKTIwVn7RUWmD9uwB2s2ZjRW5zYwkWQVaLUEMiyREvTPl87LSvHIFNPY2600a7oTf8bX")
    const body = {
      products: cart
    }
    const headers = {
      "Content-Type": "application/json"
    }
    const response = await fetch(`${apiUrl}/menu/create-checkout-session`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body)
    })
    const session = await response.json();
    console.log('session is', session)
    const { sessionId } = session;
    const result = await stripe.redirectToCheckout(
      {
        sessionId: sessionId
      }
    );

    // Check if redirection succeeded
    if (result.error) {
      // Handle redirection error
      console.error("Redirection error:", result.error);
    } else {
      // Redirection succeeded, no need for further action
      console.log("Redirection succeeded!");
    }

  }

  useEffect(() => {
    const initialCart = useCartStore.getState().cart;
    setCart(initialCart)
    setQuantities(initialCart.map(item => 1));

    // Subscribe to changes in the cart
    const unsubscribe = useCartStore.subscribe(
      (newCart) => {
        if (Array.isArray(newCart)) {
          setCart(newCart);
          // Update quantities when cart changes
          setQuantities(newCart.map(item => 1));
        }
      },
      (state) => state.cart
    );

    // Unsubscribe from the store on component unmount
    return () => unsubscribe();
  }, [removeFromCart]);

  const increaseQuantity = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index] += 1;
    setQuantities(newQuantities);
    updateCartQuantity(index, newQuantities[index]);
  };

  const decreaseQuantity = (index) => {
    const newQuantities = [...quantities];
    if (newQuantities[index] > 1) {
      newQuantities[index] -= 1;
      setQuantities(newQuantities);
      updateCartQuantity(index, newQuantities[index]);
    }
  };

  const updateCartQuantity = (index, newQuantity) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity = newQuantity;
    setCart(updatedCart);
  };

  const deleteItem = (productID) => {
    removeFromCart(productID);
    setCart(prevCart => prevCart.filter(item => item._id !== productID));
  }

  return (
    <m.div initial={{ y: " 100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      exit={{ opacity: 1 }}>
      <NavBar />
      <div className="container mx-auto mt-8 flex">
        <div className="w-2/3 ml-4">
          <h1 className="text-xl font-dm  mb-4">Your Cart</h1>
          <div className="bg-white shadow-md rounded my-6 overflow-x-auto">
            <table className="w-full table-auto">
              <thead className='font-dm '>
                <tr className="bg-my-clr-100">
                  <th className="py-2 px-4 text-left">Item</th>
                  <th className="py-2 px-4 text-left">Price</th>
                  <th className="py-2 px-4 text-center">Quantity</th>
                  <th className="py-2 px-4 text-center">Total</th>
                  <th className="py-2 px-4 text-center"></th>
                </tr>
              </thead>
              <tbody className="text-gray-800">
                {cart.map((item, index) => (
                  <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-2 px-4 whitespace-nowrap">{item.name}</td>
                    <td className="py-2 px-4">${item.price.toFixed(2)}</td>
                    <td className="py-2 px-4 text-center">
                      <button onClick={() => decreaseQuantity(index)} className="bg-gray-200 text-black px-2 py-1 rounded-md mr-2">-</button>
                      {quantities[index]}
                      <button onClick={() => increaseQuantity(index)} className="bg-gray-200 text-black px-2 py-1 rounded-md ml-2">+</button>
                    </td>
                    <td className="py-2 px-4 text-center">${(item.price * quantities[index]).toFixed(2)}</td>
                    <td className="py-2 px-4 text-center">
                      <button className="text-black font-bold py-2 px-4 rounded" onClick={() => deleteItem(item._id)}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>

                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="w-1/3 ml-8 border border-my-clr-100 rounded p-4 mr-6">
          <h2 className="text-xl font-dm mb-4">Order Details</h2>
          <table className="w-full">
            <tbody>
              <tr>
                <td className="py-1 px-2 border">Subtotal</td>
                <td className="py-1 px-2 border">${cart.reduce((acc, item, index) => acc + item.price * quantities[index], 0).toFixed(2)}</td>
              </tr>
              <tr>
                <td className="py-1 px-2 border">Tax</td>
                <td className="py-1 px-2 border">$0.00</td> 
              </tr>
              <tr>
                <td className="py-1 px-2 border">Total</td>
                <td className="py-1 px-2 border">${cart.reduce((acc, item, index) => acc + item.price * quantities[index], 0).toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
          <div className="text-center mt-4">
            <Link to='/Payment'>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Pay ${cart.reduce((acc, item, index) => acc + item.price * quantities[index], 0).toFixed(2)}</button>
            </Link>
          </div>
        </div>
      </div>
    </m.div>
  );
  
}
export default CartPage;

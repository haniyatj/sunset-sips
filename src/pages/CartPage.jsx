import React, { useState ,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import useCartStore from '../stores/cartStore';
import './styles.css'; 

function CartPage() {

  const apiUrl = "http://localhost:3001";

  const [cart, setCart] = useState([]);
  const  removeFromCart = useCartStore((state) => state. removeFromCart);

  const [quantities, setQuantities] = useState(cart.map(item => 1)); // Initialize all quantities to 1

  


  const  makePayment= async()=>
  {
    console.log('sendnng',cart)
    const stripe=await loadStripe("pk_test_51OtZKOEMgOiIuLB0FggBF1rko43TmGfKTIwVn7RUWmD9uwB2s2ZjRW5zYwkWQVaLUEMiyREvTPl87LSvHIFNPY2600a7oTf8bX")
    const body=
    {
      products:cart
    }
    const headers=
    {
      "Content-Type":"application/json"

    }
    const response =await fetch (`${apiUrl}/menu/create-checkout-session`,{
      method:"POST",
      headers:headers,
      body:JSON.stringify(body)
    })
    const session=await response.json();
    console.log ('session is',session)
    const { sessionId } = session;
    const result= await stripe.redirectToCheckout(
      {
        sessionId:sessionId
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


  console.log("nicee" ,initialCart)


  console.log ('woww')
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
    const initialCart = useCartStore.getState().cart;

    const newQuantities = [...quantities];
    newQuantities[index] += 1;
    setQuantities(newQuantities);
    updateCartQuantity(index, newQuantities[index]);
    console.log("lesgo" ,initialCart)


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
  const deleteItem = (productID) =>
  {
    console.log(productID)
    removeFromCart(productID)
     // Update the cart state with the updated cart
  setCart(prevCart => prevCart.filter(item => item._id !== productID));
  }

  
  return (
    <div style={{ backgroundColor: "white" }} >
      <div className="ml-10 mr-10 mt-8">
        <h1 className="text-xl font-dm mb-4">Your Cart</h1>
        <div className="bg-white shadow-md rounded my-6">
          <table className="min-w-max w-full table-auto">
            <thead>
              <tr className="text-gray-600 uppercase text-sm leading-normal" style={{ backgroundColor: "rgb(219,166,161)" }}>
                <th className="py-3 px-6 text-left">Item</th>
                <th className="py-3 px-6 text-left">Price</th>
                <th className="py-3 px-6 text-center">Quantity</th>
                <th className="py-3 px-6 text-center">Total</th>
                <th className="py-3 px-6 text-center"></th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {cart.map((item, index) => (
                <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-3 px-6 text-left whitespace-nowrap">{item.name}</td>
                  <td className="py-3 px-6 text-left">${item.price.toFixed(2)}</td>
                  <td className="py-3 px-6 text-center">
                    <button onClick={() => decreaseQuantity(index)} className="bg-gray-200 text-gray-600 px-2 py-1 rounded-md mr-2">-</button>
                    {quantities[index]}
                    <button onClick={() => increaseQuantity(index)} className="bg-gray-200 text-gray-600 px-2 py-1 rounded-md ml-2">+</button>
                  </td>
                  <td className="py-3 px-6 text-center">${(item.price * quantities[index]).toFixed(2)}</td>
                  <td className="py-3 px-6 text-center">
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => deleteItem(item._id)}>
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="text-right">
          <span className="font-bold text-xl">Total: ${cart.reduce((acc, item, index) => acc + item.price * quantities[index], 0).toFixed(2)}</span>
        </div>
        <Link to='/Payment'>
        <div className='flex justify-center py-16'>
          <button className="bg-red-500 hover:bg-red-700 text-white font-dm py-2 px-4 rounded" onClick={makePayment}>Checkout</button>
        </div>
       </Link>
      </div>
    </div>
  );
}

export default CartPage;

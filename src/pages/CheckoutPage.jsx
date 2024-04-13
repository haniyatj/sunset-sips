import {ReactComponentElement,useState} from 'react';
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { PaymentElement } from "@stripe/react-stripe-js";

function CheckoutPage() {

  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: `${window.location.origin}/completion`,
      },
    });

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occured.");
    }

    setIsProcessing(false);
  }

  return (
    <div className="flex justify-center items-start mt-8">
      <div className="flex-1 mr-4 h-40">
        <h1 className="text-xl font-dm mb-4">Your Order</h1>
        <div className="bg-white shadow-md rounded p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="font-semibold">Chocolate Cake</span>
            <span>$12.99</span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span className="font-semibold">Strawberry Cheesecake</span>
            <span>$15.99</span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span className="font-semibold">Vanilla Ice Cream</span>
            <span>$8.49</span>
          </div>
          <hr className="my-2 border-t border-gray-300" />
          <div className="flex justify-between items-center">
            <span className="font-semibold">Total</span>
            <span>$37.47</span>
          </div>
        </div>
      </div>
      <div className="flex-1 ml-4">
        <h1 className="text-xl font-dm mb-4">Stripe Payment</h1>

        {/* Fake Stripe payment component */}
        <div className="bg-white shadow-md rounded p-4">
          <p className="text-gray-600">Enter your payment details here:</p>
          <div className="mt-4 p-4 bg-gray-100 rounded">
          <form id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement id="payment-element" />
      <button disabled={isProcessing || !stripe || !elements} id="submit">
        <span id="button-text">
          {isProcessing ? "Processing ... " : "Pay now"}
        </span>
      </button>
      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
    </form>
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;

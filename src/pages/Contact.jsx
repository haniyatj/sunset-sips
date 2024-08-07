
import React, { useState } from "react";
import axios from "axios";
import NavBar from "../components/NavBar";

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [responseMessage, setResponseMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/form/submit", formData);
      setResponseMessage("We have received your Feedback!Thank you."); // Assuming the server returns a message
      setFormData({ name: "", email: "", message: "" }); // Clear form fields after successful submission
    } catch (error) {
      console.error("Error submitting form:", error);
      setResponseMessage("Error submitting form. Please try again."); // Set error message
    }
  };

  const handlePopupClose = () => {
    setResponseMessage(null); // Clear response message
  };

  return (
    <>
      <div className="flex flex-col h-screen">
        <NavBar />
        <div className="bg-gray-100 items-center justify-center">
          <div className="relative h-66 flex items-center justify-center w-full">
            <img
              src="https://static.wixstatic.com/media/c89a5d_f506d6f580a943efa37d85e4c1bd2ee2~mv2.jpg/v1/fill/w_1899,h_624,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c89a5d_f506d6f580a943efa37d85e4c1bd2ee2~mv2.jpg"
              alt="Header Image"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
              <div className="bg-white bg-opacity-75 rounded p-1 w-full">
                <h1 className="font-bold font-league uppercase text-center text-my-clr-100 text-4xl md:text-6xl lg:text-8xl">
                  Contact Us
                </h1>
              </div>
            </div>
          </div>
          <div className="container mx-auto py-8 flex items-center justify-center">
            <div className="w-full md:w-1/2 px-4">
              <form className="bg-white p-8 shadow-md" onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-bold mb-2 font-league"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full border-b border-gray-300 rounded-none px-4 py-2 focus:outline-none focus:border-my-clr-100"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-bold mb-2 font-league"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full border-b border-gray-300 rounded-none px-4 py-2 focus:outline-none focus:border-my-clr-100"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-bold mb-2 font-league"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="w-full h-24 border-b border-gray-300 rounded-none px-4 py-2 focus:outline-none focus:border-my-clr-100"
                    placeholder="Enter your message"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-my-clr-100 text-black font-bold py-2 px-4 rounded hover:bg-my-clr-100 transition duration-300"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="bg-black py-4 text-center text-white font-league">
          Sunset Sips
        </div>
      </div>

      {/* Response Popup */}
      {responseMessage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
          <div className="bg-black rounded-lg shadow-lg p-8 max-w-sm mx-auto z-50 relative">
            <button
              className="absolute top-2 right-2 text-white text-2xl"
              onClick={handlePopupClose}
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-4 text-white">Form Submission Status</h2>
            <p className="text-white">{responseMessage}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactUsPage;

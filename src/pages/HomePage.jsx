import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import ProductModal from "../components/Product";
import useCartStore from '../stores/cartStore';

const HomePage = () => {
  const [showDrinks, setShowDrinks] = useState(true); // State to track if Drinks section should be displayed
  const [selectedProduct, setSelectedProduct] = useState(null); // State to track the selected product for the modal
  const [showSeasonal, setShowSeasonal] = useState(true);
  const [showDeserts, setShowDeserts] = useState(true);
  const addToCart = useCartStore((state) => state.addToCart);


  const [menu, setMenu] = useState([]);

  const fetchData = async (category) => {
    try {
      const response = await fetch(
        `http://localhost:3001/menu/category/${category}`
      ); 
      const data = await response.json();
      console.log(data);
      setMenu(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleDrinksClick = () => {
    fetchData("Drinks");
    setShowDrinks(!showDrinks); // Toggle the state when Drinks section is clicked
    setShowSeasonal(true); // Close Seasonal Menu when Drinks is clicked
    setShowDeserts(true); // Close Deserts when Drinks is clicked
  };

  const handleSeasonalClick = () => {
    fetchData("signature");
    setShowSeasonal(!showSeasonal); // Toggle the state when Seasonal Menu section is clicked
    setShowDrinks(true); // Close Drinks when Seasonal Menu is clicked
    setShowDeserts(true); // Close Deserts when Seasonal Menu is clicked
  };

  const handleDesertsClick = () => {
    fetchData("icecream");
    setShowDeserts(!showDeserts); // Toggle the state when Seasonal Menu section is clicked
    setShowDrinks(true); // Close Drinks when Deserts is clicked
    setShowSeasonal(true); // Close Seasonal Menu when Deserts is clicked
  };

  const Background = {
    backgroundColor: "rgb(244,239,233)",
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
     // Set the selected product when clicked
     addToCart(product);
   // onClose(); 
  };
  return (
    <div>
      <NavBar />
      <div style={Background} className="h-80">
        <div className="flex items-center justify-center">
          <img
            src="https://i.pinimg.com/564x/37/8d/80/378d805e106747dfc1ea688c247655e4.jpg"
            className="w-90 h-80"
            alt="placeholder"
          />
        </div>
      </div>

      <div
        style={{
          backgroundColor: "black",
          transition: "height 0.8s ease-in-out",
          border: "2px solid rgb(224,124,158)",
        }}
        className="font-quick h-20 flex justify-center items-center cursor-pointer"
        onClick={handleSeasonalClick}
      >
        <p className="text-xl text-white">Signature Deserts</p>
      </div>

      {!showSeasonal && (
        <div
          style={{ backgroundColor: "white" }}
          className="font-retro overflow-hidden"
        >
          <div className="flex flex-wrap justify-center">
            {menu.map((product) => (
              <div
                key={product.id}
                className="cursor-pointer w-1/3 p-4 justify-center flex flex-col items-center"
                onClick={() => handleProductClick(product)}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-40 h-40"
                />
                <p className="text-xl text-stone-700 ">{product.name}</p>
                <p className="text-gray-700">Price: ${product.price}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div
        style={{
          backgroundColor: "black",
          transition: "height 0.8s ease-in-out",
          border: "2px solid rgb(224,124,158)",
        }}
        className={`font-quick h-20 flex justify-center items-center cursor-pointer `}
        onClick={handleDesertsClick}
      >
        <p className="text-xl text-white">Icecream Single Scoop</p>
      </div>

      {!showDeserts && (
        <div
          style={{ backgroundColor: "white" }}
          className="font-retroca overflow-hidden"
        >
          <div className="flex flex-wrap justify-center">
            {menu.map((product) => (
              <div
                key={product.id}
                className="cursor-pointer w-1/3 p-4 justify-center flex flex-col items-center"
                onClick={() => handleProductClick(product)}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-40 h-40"
                />
                <p className="text-xl  text-stone-700 ">{product.name}</p>
                <p className="text-gray-700">Price: ${product.price}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div
        style={{
          backgroundColor: "black",
          transition: "height 0.8s ease-in-out",
          border: "2px solid rgb(224,124,158)",
        }}
        className={`font-quick h-20 flex justify-center items-center cursor-pointer transition-height duration-500 ease-in-out ${
          !showDrinks ? "max-h-screen-1/3" : "max-h-20"
        }`}
        onClick={handleDrinksClick}
      >
        <p className="text-xl text-white ">Coffee & Tea</p>
      </div>

      {!showDrinks && (
        <div
          style={{ backgroundColor: "white" }}
          className="font-retroca overflow-hidden"
        >
          <div className="flex flex-wrap justify-center">
            {menu.map((product) => (
              <div
                key={product.id}
                className="cursor-pointer w-1/3 p-4 justify-center flex flex-col items-center"
                onClick={() => handleProductClick(product)}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-40 h-40"
                />
                <p className="text-xl text-black ">{product.name}</p>
                <p className="text-gray-700">Price: ${product.price}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default HomePage;

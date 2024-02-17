import React, { useState } from "react";
import NavBar from "../components/NavBar";
import ProductModal from "../components/Product";

const HomePage = () => {

    const [showDrinks, setShowDrinks] = useState(true); // State to track if Drinks section should be displayed
    const [selectedProduct, setSelectedProduct] = useState(null); // State to track the selected product for the modal
    const [showSeasonal, setShowSeasonal] = useState(true);
    const [showDeserts, setShowDeserts] = useState(true);
  
    const products = [
      {
        id: 1,
        name: "Assam",
        price: 10,
        image:
          "https://images.squarespace-cdn.com/content/v1/5d90438ef5b2a63a19ca2b80/1575080775012-S1UDRLUGI97IQANU9033/Earl+Gray+Milk+Tea.png?format=1000w",
      },
      {
        id: 2,
        name: "Taro",
        price: 15,
        image:
          "https://images.squarespace-cdn.com/content/v1/5d90438ef5b2a63a19ca2b80/1575081163394-579W2NN6LJ2E1J3QEAG8/Taro+Milk+Tea.png?format=1000w",
      },
      {
        id: 3,
        name: "Matcha",
        price: 20,
        image:
          "https://images.squarespace-cdn.com/content/v1/5d90438ef5b2a63a19ca2b80/1575080916714-4C2EYWSDR8XIB7ONAEDU/Green+Tea+Latte.png?format=1000w",
      },
    ];
  
    const handleDrinksClick = () => {
      setShowDrinks(!showDrinks); // Toggle the state when Drinks section is clicked
      setShowSeasonal(true); // Close Seasonal Menu when Drinks is clicked
      setShowDeserts(true); // Close Deserts when Drinks is clicked
    };
  
    const handleSeasonalClick = () => {
      setShowSeasonal(!showSeasonal); // Toggle the state when Seasonal Menu section is clicked
      setShowDrinks(true); // Close Drinks when Seasonal Menu is clicked
      setShowDeserts(true); // Close Deserts when Seasonal Menu is clicked
    };
  
    const handleDesertsClick = () => {
      setShowDeserts(!showDeserts); // Toggle the state when Seasonal Menu section is clicked
      setShowDrinks(true); // Close Drinks when Deserts is clicked
      setShowSeasonal(true); // Close Seasonal Menu when Deserts is clicked
    };
  
    const Background = {
      backgroundColor: "rgb(244,239,233)",
    };
  
    const handleProductClick = (product) => {
      setSelectedProduct(product); // Set the selected product when clicked
      
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
            backgroundColor: "rgb(230,223,208)",
            transition: "height 0.8s ease-in-out",
          }}
          className="font-quick h-20 flex justify-center items-center cursor-pointer"
          onClick={handleSeasonalClick}
        >
          <p className="text-xl text-yellow-950">Seasonal Menu</p>
        </div>
  
        {!showSeasonal && (
          <div
            style={{ backgroundColor: "rgb(230,223,208)" }}
            className="font-retro overflow-hidden"
          >
            <div className="flex flex-wrap justify-center">
              {products.map((product) => (
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
            backgroundColor: "rgb(219,166,161)",
            transition: "height 0.8s ease-in-out",
          }}
          className={`font-quick h-20 flex justify-center items-center cursor-pointer `}
          onClick={handleDesertsClick}
        >
          <p className="text-xl text-yellow-950">Deserts</p>
        </div>
  
        {!showDeserts && (
          <div
            style={{ backgroundColor: "rgb(219,166,161)" }}
            className="font-retroca overflow-hidden"
          >
            <div className="flex flex-wrap justify-center">
              {products.map((product) => (
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
            backgroundColor: "rgb(208,207,170)",
            transition: "height 0.8s ease-in-out",
          }}
          className={`font-quick h-20 flex justify-center items-center cursor-pointer transition-height duration-500 ease-in-out ${
            !showDrinks ? "max-h-screen-1/3" : "max-h-20"
          }`}
          onClick={handleDrinksClick}
        >
          <p className="text-xl text-yellow-950">Drinks</p>
        </div>
  
        {!showDrinks && (
          <div
            style={{ backgroundColor: "rgb(208,207,170)" }}
            className="font-retroca overflow-hidden"
          >
            <div className="flex flex-wrap justify-center">
              {products.map((product) => (
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

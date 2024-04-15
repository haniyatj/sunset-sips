import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import './pages/styles.css';
const App = () => {
 
  return (

      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/cart"
          element={<CartPage />}
        />
      </Routes>
  
    
  );
};

export default App;

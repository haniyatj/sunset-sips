import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import SucessPage from './pages/success';

import { AnimatePresence } from 'framer-motion';


const App = () => {
  const location = useLocation();

  return (
    <AnimatePresence initial={true}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/success" element={<SucessPage />} />

  
      </Routes>
    </AnimatePresence>
  );
};

export default App;


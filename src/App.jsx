import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import PaymentPage from './pages/PaymentForm';

const App = () => {
  return (
    <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/cart" Component={CartPage} />
        <Route path="/Payment" Component={PaymentPage} />


    </Routes>
  );
};

export default App;

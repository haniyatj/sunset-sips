import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <Routes>
        <Route path="/" Component={HomePage} />
    </Routes>
  );
};

export default App;

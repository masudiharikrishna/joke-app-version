// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Homepage from './components/Homepage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/homepage" element={<Homepage/>} />
        <Route exact path="/" element={<Login/>} />
      </Routes>
    </Router>
  );
};
export default App
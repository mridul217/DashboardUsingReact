import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TableData from './Table.js';
import OrderPage from './Out.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/order-page" element={<OrderPage />} />
          <Route path="/" element={<TableData />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

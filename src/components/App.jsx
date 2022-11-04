import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Books from '../pages/Books';
import Status from '../pages/CheckStatus';
import Header from './Header';

const App = () => (
  <div className="main-container">
    <Header />
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/categories" element={<Status />} />
    </Routes>
  </div>
);

export default App;

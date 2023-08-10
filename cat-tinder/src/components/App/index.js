import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../HomePage';
import CatDisplay from '../CatDisplay';
import AdoptPage from '../AdoptPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/display" element={<CatDisplay />} />
        <Route path="/adoptPage" element={<AdoptPage />} />
        
      </Routes>
    </Router>
  );
};

export default App;
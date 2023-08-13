import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../HomePage';
import CatDisplay from '../CatDisplay';
import AdoptPage from '../AdoptPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/display" element={<CatDisplay />} />
        <Route path="/adopt" element={<AdoptPage />} />
      </Routes>
    </Router>
  );
};

export default App;
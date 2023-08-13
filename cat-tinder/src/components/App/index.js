import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../HomePage';
import CatDisplay from '../CatDisplay';
import AdoptPage from '../AdoptPage';
import NoPage from '../NoPage';



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/display" element={<CatDisplay />} />
        <Route path="/adopt" element={<AdoptPage />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  );
};

export default App;
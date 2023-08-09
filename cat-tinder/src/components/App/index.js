import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from '../HomePage';
import CatDisplay from '../CatDisplay';
import AdoptComponent from '../Adopt';

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={HomePage} />
      <Route path="/display" component={CatDisplay} />
      <Route path="/adopt" component={AdoptComponent} />
    </Router>
  );
};

export default App;
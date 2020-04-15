import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import routes from './Routes';

function App() {
  return (
    <Router>
      <Navigation />
      <div className="container mt-4">
        <Switch>
          { routes }
        </Switch>
      </div>
    </Router>
  );
}

export default App;

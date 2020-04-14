import React from 'react';
import Navigation from './components/Navigation';
import Articulos from './components/Articulos';

function App() {
  return (
    <React.Fragment>
      <Navigation />
      <div className="container mt-4">
        <Articulos />
      </div>
    </React.Fragment>
  );
}

export default App;

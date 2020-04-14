import React from 'react';
import Navigation from './components/Navigation';
// import Articulos from './components/Articulos';
import CrearArticulo from './components/CrearArticulo';

function App() {
  return (
    <React.Fragment>
      <Navigation />
      <div className="container mt-4">
        {/* <Articulos /> */}
        <CrearArticulo />
      </div>
    </React.Fragment>
  );
}

export default App;

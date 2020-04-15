import React from 'react';
import { Route } from 'react-router-dom';
import Articulos from './components/Articulos';
import CrearArticulo from './components/CrearArticulo';

export default [
  <React.Fragment key={"Routes"}>
      <Route exact path="/articulos" component={ Articulos } ></Route>
      <Route exact path="/crear-articulo" component={ CrearArticulo} ></Route>
  </React.Fragment>
];
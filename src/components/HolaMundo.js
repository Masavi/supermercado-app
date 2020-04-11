import React, { Component } from 'react';

class HolaMundo extends Component {
  render() { 
    return ( 
      <React.Fragment>
        <p>Hola desde el componente Hola Mundo</p>
        <p>Soy otro elemento dentro de un mismo nodo :D</p>
      </React.Fragment>
    );
  }
}
 
export default HolaMundo;
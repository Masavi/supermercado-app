import React, { Component } from 'react';
// import axios from 'axios';

class Articulos extends Component {
  state = {
    titulo: "Articulos"
  };

  // el componente se montó
  componentDidMount() {
    // axios.get('')
  }
  
  render() { 
    return (
      <h3>{ this.state.titulo }</h3>
    );
  }
}
 
export default Articulos;
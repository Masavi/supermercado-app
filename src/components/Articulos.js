import React, { Component } from 'react';
import axios from 'axios';
import Articulo from './Articulo';

class Articulos extends Component {
  state = {
    titulo: "Articulos",
    articulos: [],
  };

  // El componente se montó
  componentDidMount() {
    const URL = 'https://supermercado-devf.herokuapp.com/api/v1/articulos';
    axios.get(URL)
      .then(response => {
        console.log('🥎' , response.data);
        const articulos = response.data;
        this.setState({ articulos });
      })
      .catch(err => console.log(err));
  }

  renderizarArticulos() {
    const { articulos } = this.state;
    if (articulos.length === 0) {
      return <span>Cargando artículos...</span>
    } else if (articulos.length > 0) {
      // ¿Cómo itero y muestro cada elemento de mi arreglo de artículos?
      return (
        <React.Fragment>
          <span>Se encontraron {articulos.length} artículos</span>
          { articulos.map(articulo => {
            return (
              <Articulo 
                precio={articulo.precio}
                existencias={articulo.existencias}
                nombre={articulo.nombre} />
            )
          })}
        </React.Fragment>
      )
    }
  }
  
  render() { 
    return (
      <React.Fragment>
        <h3>{ this.state.titulo }</h3>
        { this.renderizarArticulos() }
      </React.Fragment>
    );
  }
}
 
export default Articulos;
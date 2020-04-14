import React, { Component } from 'react';
import axios from 'axios';
import {
  Card, CardText, CardBody, CardTitle,
} from 'reactstrap';

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
              <Card className="mt-3" style={{ backgroundColor: '#ae51f5' }}>
                <CardBody>
                  <CardTitle style={{ color: 'white' }}>{ articulo.nombre }</CardTitle>
                  <CardText style={{ color: 'white' }}>
                    {`Existencias: ${articulo.existencias} - Precio: ${articulo.precio}`}
                  </CardText>
                </CardBody>
              </Card>
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
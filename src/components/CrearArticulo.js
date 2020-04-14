import React, { Component } from 'react';
import { 
  Button, 
  Form, 
  FormGroup, 
  Label, 
  Input,
} from 'reactstrap';
import axios from 'axios';

class CrearArticulo extends Component {
  state = { 
    nombre: '',
    precio: 0,
    existencias: 0,
  }

  cambiarInput = (e) => {
    console.log(e.target.value);
    switch (e.target.name) {
      case 'nombre':
        this.setState({ nombre: e.target.value })
        break;

      case 'precio':
        this.setState({ precio: e.target.value })
        break;

      case 'existencias':
        this.setState({ existencias: e.target.value })
        break;
    
      default:
        break;
    }
  }

  manejarSubmit = () => {
    const jsonSend = this.state;
    const URL = 'https://supermercado-devf.herokuapp.com/api/v1/articulos';
    axios.post(URL, jsonSend)
      .then(res => alert('¡Artículo creado!'))
      .catch(err => alert('Error al crear artículo'))
  };

  render() { 
    return ( 
      <React.Fragment>
        <h3>Crear Artículo</h3>

        <Form>
          <FormGroup>
            <Label>Nombre</Label>
            <Input
              value={this.state.nombre}
              onChange={this.cambiarInput}
              type="text" 
              name="nombre"/>
          </FormGroup>
          <FormGroup>
            <Label>Precio</Label>
            <Input 
              value={this.state.precio}
              onChange={this.cambiarInput}
              type="number"
              name="precio"/>
          </FormGroup>
          <FormGroup>
            <Label>Existencias</Label>
            <Input 
              value={this.state.existencias}
              onChange={this.cambiarInput}
              type="number"
              name="existencias"/>
          </FormGroup>
          <Button onClick={this.manejarSubmit}>Submit</Button>
        </Form>
  
      </React.Fragment>
    );
  }
}
 
export default CrearArticulo;
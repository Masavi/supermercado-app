import React, { Component } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
// import './styles.css'; -> así importas tu propia hoja de estilos

class HolaMundo extends Component {
  render() { 
    return ( 
      <React.Fragment>
        <p>Hola desde el componente Hola Mundo</p>
        <p>Soy otro elemento dentro de un mismo nodo :D</p>
        {/* <div class="card" style="width: 18rem;"> */}

        {/* Codigo tomado directamente de la doc de Bootstrap */}
        {/* <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="google.com" className="btn btn-primary">Go somewhere</a>
          </div>
        </div> */}

        {/* Código tomado de la doc de Reactstrapp */}
        <Card>
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}
 
export default HolaMundo;
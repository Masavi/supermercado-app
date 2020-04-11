import React from 'react';

function App() {
  const nombre = "Mauricio";
  const apellido = "Saavedra";

  const mostrarLorem = () => {
    return (
      <h2>lorem ipsum dolor si amet</h2>
    )
  }

  const mostrarMensajae = () => {
    return (<span> El nombre es: {nombre} </span>)
  }

  const mostrarCondicional = () => {
    if (nombre === "Mauricio") {
      return mostrarLorem()
    } else return mostrarMensajae();
  } 

  return (
    <React.Fragment>
      <h1>Hola Mundo</h1>
      <p>{`${nombre} ${apellido}`}</p>
      {
        mostrarCondicional()
      }
    </React.Fragment>
  );
}

export default App;

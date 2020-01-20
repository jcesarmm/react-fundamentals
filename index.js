import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

function MiComponente(props){
  return <p>Hola Mundo: {props.nombre}</p>
}

class MiComponenteDeClase extends Component{
  render(){
    return <p>Hola soy de la clase!</p>
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    let nombre = "Julio";
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
        <div>
        <MiComponente nombre={nombre}></MiComponente>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

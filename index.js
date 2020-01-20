import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

function MiComponente(props){
  return <p>Hola Mundo: {props.nombre}</p>
}

class Formulario extends Component{

constructor(props){
  super(props);
  this.state={
    email: "",
    password: ""
  };
}
  syncChanges(value, property){
    let state={};
    state[property]=value;
    this.setState(state);
  }
  submitForm = ()=>{
    console.log(this.state);
  }
  render()
  {
    return <div>
      <input 
        type="text"
        value={this.state.email} 
        onChange={(ev)=>{this.syncChanges(ev.target.value,'email')}} placeholder="Email"/>
    <input 
      type="password"
      value={this.state.password}
      placeolder="password"
      onChange={(ev)=>{this.syncChanges(ev.target.value, 'password')}} 
      />
    <button onClick={this.submitForm}>Enviar</button>
    </div>
  }
}


class MiComponenteDeClase extends Component{
  render(){
    return <p>Hola soy de la clase!</p>
  }
}

class Contador extends Component{
  constructor(props){
    super(props);
    this.state={
      contador: 0
    };
  }

  aumentar = ()=>{
    this.setState(
      {
        contador: this.state.contador + 1
      })
  }
  render(){
    return <div><p>Contador: {this.state.contador}</p>
    <button onClick={this.aumentar}>Aumentar</button>
    </div>
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
        <Formulario></Formulario>
        </div>
        <div>
        <Contador></Contador>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import Contador from './Contador'

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

class Blog extends Component{
  constructor(props){
    super(props);
    this.state = {
      articles: ['1','2','3'],
      name: 'julio'
    };
  }
  componentDidMount(){
    let promesa = fetch('https://jsonplaceholder.typicode.com/posts');

    promesa.then((response)=> 
    {
      response.json().then(data=>
      {
        this.setState(
          {
            articles: data
          })
      })
    })
  }
  render(){
    return (<div>
    {this.state.articles.map((article)=>
    {
      return <div className="card" style={{ backgroundColor: 'red',color:'yellow'}}><p>{article.title}</p></div>
    })
    }</div>);
  }
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
        <Formulario></Formulario>
        </div>
        <div>
        <Contador></Contador>
        <Blog></Blog>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

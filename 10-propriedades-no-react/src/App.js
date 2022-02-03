import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class Botao extends Component{
  render(){
    return <button>{this.props.text}</button>
  }
}

class Mensagem extends Component{
  render(){
    return <p>Selcione uma das opções abaixo:</p>
  }
}

class App extends Component{
  render(){
    return(
      <div>
          <Mensagem/>
          <Botao text="Incluir"/>
          <Botao text="Excluir"/>
          <Botao text="Alterar"/>
          <Botao text="Consultar"/>
          <Botao text="Limpar"/>
          
      </div> 
    )
  }
}

export default App;

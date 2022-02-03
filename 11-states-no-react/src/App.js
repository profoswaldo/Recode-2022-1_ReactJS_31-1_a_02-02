import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class Botao extends Component{
  render(){
    return <button onClick={() => {this.props.handleClick(this.props.text)}}>{this.props.text}</button>
  }
}

class Mensagem extends Component{
  render(){
    return <p>Você clicou em: {this.props.text}</p>
  }
}

class App extends Component{

  constructor(props){
    super(props);

    this.state = {
      labelText:''
    }
  }

  setLaberText = (labelText) =>{
      this.setState({labelText})
  }

  
  render(){
    console.log(this.state.labelText);
    return(
      <div>
          <Mensagem text={this.state.labelText}/>
          <Botao handleClick={this.setLaberText} text="Incluir"/>
          <Botao handleClick={this.setLaberText} text="Excluir"/>
          <Botao handleClick={this.setLaberText} text="Alterar"/>
          <Botao handleClick={this.setLaberText} text="Consultar"/>
          <Botao handleClick={this.setLaberText} text="Limpar"/>
          
      </div> 
    )
  }
}

export default App;

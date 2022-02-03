import React from 'react';
import { Component } from 'react';
import Botao from './Botao';
import Mensagem from './Mensagem';


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

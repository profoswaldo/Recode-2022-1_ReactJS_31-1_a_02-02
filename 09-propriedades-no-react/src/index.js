import React from 'react';
import ReactDOM from 'react-dom';

class Componente extends React.Component{

  render(){
    return (
      <div>
        <h1> Bem-vindo  {this.props.funcionario.funcao} {this.props.funcionario.nome}</h1>
      </div>
    )
  }

}

var dadosFuncionario = {
                          funcao:"Professor", 
                          nome:"Oswaldo"
                       };

ReactDOM.render(<Componente funcionario={dadosFuncionario}/>, document.getElementById("root"));
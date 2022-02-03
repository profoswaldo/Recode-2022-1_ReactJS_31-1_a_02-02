import React from 'react';
import ReactDOM from 'react-dom';

class Componente extends React.Component{

  render(){
    return <h1> Bem-vindo Prof. {this.props.nome}</h1>
  }

}

ReactDOM.render(<Componente nome="Oswaldo"/>, document.getElementById("root"));
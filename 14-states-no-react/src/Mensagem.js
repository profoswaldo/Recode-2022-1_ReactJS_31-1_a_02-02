import React from 'react';
import { Component } from 'react';


class Mensagem extends Component{
    render(){
      return <p>Você clicou em: {this.props.text}</p>
    }
  }

export default Mensagem;
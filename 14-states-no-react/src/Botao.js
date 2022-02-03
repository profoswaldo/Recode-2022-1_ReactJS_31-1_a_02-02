import React from 'react';
import { Component } from 'react';



class Botao extends Component{
    render(){
      return <button onClick={() => {this.props.handleClick(this.props.text)}}>{this.props.text}</button>
    }
}

export default Botao;
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Contador extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numero: 0
    };
  }

  handleClick() {
    this.setState({ numero: this.state.numero+1 });
  }

  render() {
    return (
      <>
        <h1>Contando: {this.state.numero}</h1>
        <button onClick={() => this.handleClick()}>Incrementar Contador</button>
      </>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Contador />
  </React.StrictMode>,
  document.getElementById("root")
);
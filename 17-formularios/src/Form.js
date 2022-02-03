import React,{Component} from "react";


class Form extends Component{

    state ={
        nome: ''
    }


    handleInputChange = (e) =>{
        this.setState({
            nome: e.target.value
         })
    }



    render(){
        const {nome} = this.state;
        return(
            <section>
                <form>

                    <label>
                        Nome: 
                        <input type="text" onChange={this.handleInputChange} placeholder="Digite aqui o seu nome"/>
                    </label>
                    <br/> 
                    <button type="submit">Enviar</button>
                    <button type="reset">Cancelar</button>
                </form>
                <h3>{nome}</h3>
            </section>
        )
    }
}

export default Form;

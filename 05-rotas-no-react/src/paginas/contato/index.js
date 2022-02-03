import React from 'react';


function Contato(){
    return(
        <div>
            <h3>Contato</h3>
            <form>
                email: <input type='text'/><br/><br/>
                <input type='submit' value='Enviar'/>
                <input type='reset' value='Cancelar'/>
            </form>
        </div>
    );
} ;

export default Contato;
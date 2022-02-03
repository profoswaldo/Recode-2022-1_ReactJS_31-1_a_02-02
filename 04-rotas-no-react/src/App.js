import React from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';


function App () {
  return(
    <BrowserRouter>
        <h2>Venha fazer parte de nosso Curso</h2>
        <br/>
        <Switch>
            <Route path="/contato">
                <h3>Contato</h3>
                <form>
                    email: <input type='text'/><br/><br/>
                    <input type='submit' value='Enviar'/>
                    <input type='reset' value='Cancelar'/>
                </form>
            </Route>
            <Route path="/sobre">
                <h3>Recode - Lugar para se aprender</h3>
            </Route>
            
        </Switch>        
    </BrowserRouter>
  );
};

export default App;

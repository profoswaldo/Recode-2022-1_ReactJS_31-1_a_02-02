import React from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Sobre from './paginas/sobre';
import Contato from './paginas/contato';


function Routes(){
    return(
        <BrowserRouter>
            <Link to="/contato">Contato</Link><br/>
            <Link to="/sobre">Sobre</Link>
            <br/><br/>
            <h2>Venha fazer parte de nosso Curso</h2>
            <br/><br/>
            <Switch>
                <Route path="/contato">
                    <Contato/>
                </Route>
                <Route path="/sobre">
                    <Sobre/>
                </Route>
                
            </Switch>        
        </BrowserRouter>
    );
};

export default Routes;
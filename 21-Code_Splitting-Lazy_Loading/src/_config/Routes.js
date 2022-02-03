import React, { Suspense, lazy } from 'react'

import { Switch, Router, Route } from 'react-router'

import { history } from './history'

const ComponentePrincipal = lazy(() => import('../components/ComponentePrincipal'))
const ComponenteReact = lazy(() => import('../components/ComponenteReact'))
const ComponenteJava = lazy(() => import('../components/ComponenteJava'))
const ComponenteMongoDB = lazy(() => import('../components/ComponenteMongoDB'))

const Routes = () => (

    <Router history={ history }>
        <Switch>
            <Suspense fallback={ <h1>Renderizando...</h1> }>
                <Route component={ () => <ComponentePrincipal/> } exact path="/"/>
                <Route component={ () => <ComponenteReact/> } exact path="/a"/>
                <Route component={ () => <ComponenteJava/> } exact path="/b"/>
                <Route component={ () => <ComponenteMongoDB/> } exact path="/c"/>
            </Suspense>
        </Switch>
    </Router>

)

export default Routes

import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const ReactAvancado = lazy(()=>import('./components/ReactAvancado'));
const JavaAvancado =lazy(()=>import('./components/JavaAvancado'));
const AlgoritmoAvancado = lazy(()=>import('./components/AlgoritmoAvancado'));
const LinuxAvancado = lazy(()=>import('./components/LinuxAvancado'))

function App() {

  return (
    <div className="App">
      <Router>
      <ul>
          <li>
            <Link to="/ra">React</Link>
          </li>
          <li>
            <Link to="/ja">Java</Link>
          </li>
          <li>
            <Link to="/aa">Algoritmo</Link>
          </li>
          <li>
            <Link to="/la">Linux</Link>
          </li>
        </ul>
        <Suspense fallback={<div>Loading...</div>}>
          <Route 
          exact path="/ra" 
          component={ReactAvancado}
          />
          <Route 
          exact path="/ja" 
          component={JavaAvancado}
          />
          <Route 
          exact path="/aa" 
          component={AlgoritmoAvancado}
          />
          <Route 
          exact path="/la" 
          component={LinuxAvancado}
          />
        </Suspense>
      </Router>
      
    </div>
  );
}

export default App;

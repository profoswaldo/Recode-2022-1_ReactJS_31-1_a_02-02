import React, {lazy, Suspense} from "react";


const MeuComponente = lazy(() => import("./MeuComponente"));



function App() {
  return (
    <Suspense fallback={<h1>Carregando...</h1>}>

      <MeuComponente/>

    </Suspense>
  );
}

export default App;

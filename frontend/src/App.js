import React/*, { useState }*/ from 'react';

import './global.css'

import Routes from './routes'
// import { Route } from 'react-router-dom';


// JSX (Javascript XML)

function App() {
  // const [counter, setCounter]  = useState(0)
  //                 //retorna Array com [valor, funcaoDeAtualizacao]


  // function increment() {
  //   setCounter(counter + 1)
  // }
  
  return (
    // <div>
    //   <Header>Contador: {counter}</Header>
    //   <button onClick={increment}>Incrementar</button>
    // </div>
    <Routes />
  );
}

export default App;

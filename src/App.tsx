<<<<<<< HEAD
import Cadastro from './pages/Cadastro'
import Home from './pages/Home'
import EstiloGlobal, { Container } from './styles'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: 'Novo',
    element: <Cadastro />
  }
])

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <RouterProvider router={rotas} />
      </Container>
    </>
  )
=======
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
>>>>>>> parent of 27a8ffd (Finalizando o Projeto)
}

export default App;

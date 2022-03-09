import ClienteProvider from './contexts/cliente/State.js'
import './App.css';
import React from 'react';
import { Container } from '@material-ui/core';
import FormCadastro from './components/FormCadastro/FormCadastro';
import Login from './components/TelaLogin/Login';
import TabelaClientes from './components/TabelaClientes/TabelaClientes';
/* import Clientes from './components/Clientes'; */


function App() {

  return (
    <ClienteProvider>
      <Container>
        <h1 align="center">CrediBank</h1>
        {/* <Login maxWidth="sm"/> */}
        <FormCadastro maxWidth="sm" />
        <TabelaClientes />
      </Container>
      {/* <Clientes></Clientes> */}
    </ClienteProvider>
  );
}

export default App;

import ClienteProvider from './contexts/cliente/State.js'
import './App.css';
import React from 'react';
import { Container } from '@material-ui/core';
import FormCadastro from './components/FormCadastro/FormCadastro';
import Login from './components/TelaLogin/Login';
import Clientes from './components/Clientes';


function App() {

  return (
    <ClienteProvider>
      <Container maxWidth="sm">
        <h1 align="center">CrediBank</h1>
        {/* <Login /> */}
        <FormCadastro />
      </Container>
      <Clientes></Clientes>
    </ClienteProvider>
  );
}

export default App;

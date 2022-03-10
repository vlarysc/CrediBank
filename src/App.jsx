import ClienteProvider from './contexts/cliente/State.js'
import './App.css';
import React from 'react';
import { Container } from '@material-ui/core';
import FormCadastro from './components/FormCadastro/FormCadastro';
import Login from './components/TelaLogin/Login';
import Error from './components/TelaError/Error404';
import TabelaClientes from './components/TabelaClientes/TabelaClientes';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


function App() {

  return (
    <ClienteProvider>
      <Container>
        <Router>
          <div>
            <Switch>
              <Route exact path="/login">
                <Login maxWidth="sm" />
              </Route>
              <Route exact path="/cadastro">
                <FormCadastro maxWidth="sm" />
              </Route>
              <Route path="/clientes">
                <TabelaClientes />
              </Route>
              <Route>
                <Error />
              </Route>
            </Switch>
          </div>
        </Router>
      </Container>
    </ClienteProvider>
  );
}

export default App;

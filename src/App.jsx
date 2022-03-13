import ClienteProvider from './contexts/cliente/State.js'
import './App.css';
import React from 'react';
import { Container } from '@material-ui/core';
import FormCadastro from './components/FormCadastro/FormCadastro';
import Login from './components/TelaLogin/Login';
import Error from './components/TelaError/Error404';
import TabelaClientes from './components/TabelaClientes/TabelaClientes';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { usuarioAutenticado } from './auth/auth.js';


function App() {

  return (
    <ClienteProvider>
      <Container>
        <Router>
          <div>
            <Switch>
              <Route path="/login">
                <Login />
              </Route>
              <Route exact path="/"
                render={() => usuarioAutenticado() ? <FormCadastro maxWidth="sm" /> : <Redirect to="/login" />}
              >
              </Route>
              <Route exact path="/cadastro"
                render={() => usuarioAutenticado() ? <FormCadastro maxWidth="sm" /> : <Redirect to="/login" />}
              >
              </Route>
              <Route exact path="/clientes"
                render={() => usuarioAutenticado() ? <TabelaClientes maxWidth="sm" /> : <Redirect to="/login" />}
              >
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

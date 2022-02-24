import ClienteProvider from './contexts/State.js'
import './App.css';
import React from 'react';
/* import { Container } from '@material-ui/core';
import FormCadastro from './components/FormCadastro/FormCadastro';
import Notify from './utils/Notify.js';
import {
  valCPF,
  valEmail,
  valTelefone,
  valSenha,
  valSenhaConfirmada,
  valNascimento,
  valNome,
  valSobrenome
} from './utils/Validacoes.js'; */
import Clientes from './components/Clientes'

const App = () => {
  return (
    <ClienteProvider>
      {/*       <Container maxWidth="sm">
        <h1 align="center">CrediBank</h1>
        <FormCadastro
          save={cadastrar}
          valCPF={valCPF}
          valEmail={valEmail}
          valTelefone={valTelefone}
          valSenha={valSenha}
          valSenhaConfirmada={valSenhaConfirmada}
          valNascimento={valNascimento}
          valNome={valNome}
          valSobrenome={valSobrenome}
        />
      </Container> */}
      <Clientes></Clientes>
    </ClienteProvider>
  );
}


/* function cadastrar(dados) {
  const {
    nome,
    sobrenome,
    cpf,
    nascimento,
    email,
    telefone,
    senha,
    senhaConfirmada,
  } = dados;
  if (
    !nome ||
    !sobrenome ||
    !cpf ||
    !nascimento ||
    !email ||
    !telefone ||
    !senha ||
    !senhaConfirmada
  ) {
    Notify('error', 'Campo Obrigatório!');
  }
  if (cpf.length !== 11) {
    Notify('error', 'Campo Obrigatório!');
  }
  if (telefone.length !== 11) {
    Notify('error', 'Campo Obrigatório!');
   
  } else {
    Notify('success', 'Cadastrado com Sucesso!');
    console.log(dados);
  }
} */

export default App;

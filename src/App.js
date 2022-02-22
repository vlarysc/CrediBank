import './App.css';
import React from 'react';
import { Container } from '@material-ui/core';
import FormCadastro from './components/FormCadastro/FormCadastro'
import Notify from './utils/Notify.js'
import { valCPF, valEmail } from './utils/Validacoes.js'

class App extends React.Component {
  render() {
    return (
      <Container maxWidth="sm">
        <h1 align="center">CrediBank</h1>
        <FormCadastro save={cadastrar} valCPF={valCPF} valEmail={valEmail} />
      </Container>
    )
  }
}

function cadastrar(dados) {
  const {
    nome,
    sobrenome,
    cpf,
    nascimento,
    email,
    telefone,
    senha,
    senhaConfirmada
  } = dados;
  if (!nome || !sobrenome || !cpf || !nascimento || !email || !telefone || !senha || !senhaConfirmada) {
    Notify("error", "Campo Obrigatório!");
  }
  if (cpf.length !== 11) {
    Notify("error", "Campo Obrigatório!");
  }
  if (telefone.length !== 11) {
    Notify("error", "Campo Obrigatório!");
    /*  return { valido: false, texto: "Necessário um número de telefone válido!" } */
  }
  else {
    Notify("success", "Cadastrado com Sucesso!");
    console.log(dados)
  }

}

export default App;

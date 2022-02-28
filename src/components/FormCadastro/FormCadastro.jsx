import React, { useState, useContext } from 'react';
import InputMask from 'react-input-mask';
import { TextField, Fab, Typography } from '@material-ui/core';
import { ClienteContext } from '../../contexts/cliente/State.js';
import Notify from '../../utils/Notify.js';
import {
  valCPF,
  valNascimento,
  valEmail,
  valTelefone,
  valSenha,
  valSenhaConfirmada,
} from '../../utils/Validacoes.js';



function FormCadastro() {
  const { saveCliente } = useContext(ClienteContext);
  const [cliente, setCliente] = useState()
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [cpf, setCPF] = useState('');
  const [nascimento, setNascimento] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');
  const [senhaConfirmada, setSenhaConfirmada] = useState('');
  const [erros, setErros] = useState({
    cpf: { valido: true, texto: '' },
    email: { valido: true, texto: '' },
    nascimento: { valido: true, texto: '' },
    telefone: { valido: true, texto: '' },
    senha: { valido: true, texto: '' },
    senhaConfirmada: { valido: true, texto: '' },
  });
  console.log(valCPF)

  function inputChange() {
    setCliente({
      ...cliente,
      nome: nome,
      sobrenome: sobrenome,
      cpf: cpf,
      nascimento: nascimento,
      email: email,
      telefone: telefone,
      senha: senha,
    })
  }

  function salvar(e) {
    e.preventDefault();
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
      saveCliente(cliente);
      console.log("All clientes", cliente)
    }
  }

  return (
    <form
      onSubmit={salvar}
    >
      <TextField
        onChange={(e) => {
          setNome(e.target.value);
          inputChange();
        }}
        value={nome}
        label="Nome"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        onChange={(e) => setSobrenome(e.target.value)}
        value={sobrenome}
        label="Sobrenome"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        onChange={(e) => {
          setCPF(e.target.value);
          inputChange();
        }}
        value={cpf}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        onBlur={() => {
          const validar = valCPF(cpf);
          setErros({ ...erros, cpf: validar });
        }}
        label="CPF"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <InputMask
        mask="99/99/9999"
        onChange={(e) => {
          setNascimento(e.target.value);
          inputChange();
        }}
        value={nascimento}
        error={!erros.nascimento.valido}
        helperText={erros.nascimento.texto}
      >
        {() => (
          <TextField
            label="Nascimento"
            variant="outlined"
            margin="normal"
            fullWidth
          />
        )}
      </InputMask>
      <TextField
        onChange={(e) => {
          setEmail(e.target.value);
          inputChange();
        }}
        value={email}
        error={!erros.email.valido}
        helperText={erros.email.texto}
        onBlur={() => {
          const validar = valEmail(email);
          setErros({ ...erros, email: validar });
        }}
        label="E-mail"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <InputMask
        mask="(99) 9 9999-9999"
        onChange={(e) => {
          setTelefone(e.target.value);
          inputChange();
        }}
        value={telefone}

        onBlur={() => {
          const validar = valTelefone(telefone);
          setErros({ ...erros, telefone: validar });
        }}
      >
        {() => (
          <TextField
            error={!erros.telefone.valido}
            helperText={erros.telefone.texto}
            label="Telefone"
            variant="outlined"
            margin="normal"
            fullWidth
          />
        )}
      </InputMask>
      <TextField
        onChange={(e) => {
          setSenha(e.target.value);
          inputChange();
        }}
        value={senha}
        error={!erros.senha.valido}
        helperText={erros.senha.texto}
        label="Senha"
        variant="outlined"
        margin="normal"
        fullWidth
        type="password"
      />
      <TextField
        onChange={(e) => {
          setSenhaConfirmada(e.target.value);
          inputChange();
        }}
        value={senhaConfirmada}
        error={!erros.senhaConfirmada.valido}
        helperText={erros.senhaConfirmada.texto}
        onBlur={() => {
          const validar = valSenhaConfirmada(senhaConfirmada, senha)
          setSenhaConfirmada({ ...erros, senhaConfirmada: validar })
        }}
        label="Senha"
        variant="outlined"
        margin="normal"
        fullWidth
        type="password"
      />
      <Typography
        component="div"
        variant="body1"
        style={{
          height: 100,
          width: '100%',
          position: 'relative',
        }}
      >
        <Fab
          type="submit"
          variant="extended"
          style={{
            position: 'absolute',
            left: '78%',
          }}
        >
          Cadastrar
        </Fab>
        <Fab
          variant="extended"
          style={{
            position: 'absolute',
          }}
        >
          Retornar
        </Fab>
      </Typography>
    </form>
  );
}

export default FormCadastro;

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
  const [cliente, setCliente] = useState();
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
  const context = useContext(ClienteContext);


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
    });
  }

  function salvar(e) {
    e.preventDefault();
    const clienteFind = context.clientes.filter((obj) =>
      obj.cpf === cpf
    );
    if (clienteFind[0] == undefined) {
      /*  console.log('existe', clienteFind[0]) */
    }

    if (
      !erros.cpf.valido ||
      !erros.nascimento.valido ||
      !erros.email.valido ||
      !erros.senha.valido ||
      !erros.senhaConfirmada.valido
    ) {
      Notify('error', 'Campo Obrigatório!');
    }
    if (clienteFind[0] !== undefined) {
      Notify('error', 'Esse CPF já foi cadastrado!');
    }
    else {
      Notify('success', 'Cadastrado com Sucesso!');
      saveCliente(cliente);
    }
  }

  return (
    <form onSubmit={salvar}>
      <TextField
        onChange={(e) => {
          setNome(e.target.value);
          inputChange();
        }}
        value={nome}
        label="Nome"
        required
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        onChange={(e) => setSobrenome(e.target.value)}
        value={sobrenome}
        label="Sobrenome"
        required
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
        required
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
        onBlur={() => {
          const validar = valNascimento(nascimento);
          setErros({ ...erros, nascimento: validar });
        }}
      >
        {() => (
          <TextField
            required
            error={!erros.nascimento.valido}
            helperText={erros.nascimento.texto}
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
        required
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
            required
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
        onBlur={() => {
          const validar = valSenha(senha);
          setErros({ ...erros, senha: validar });
        }}
        required
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
          const validar = valSenhaConfirmada(senhaConfirmada === senha);
          setErros({ ...erros, senhaConfirmada: validar });
        }}
        required
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

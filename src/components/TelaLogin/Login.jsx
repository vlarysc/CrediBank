import React, { useState } from 'react';
import { TextField, Fab, Typography } from '@material-ui/core';

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  console.log(email, senha);

  // Puxar dados de clientes para validar se existe aquele cliente, caso existir, criar um estado para session

  return (
    <form
      align="center"
      style={{
        background: '#c8d6e567',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0,0,0,.60)',
      }}
    >
      <h1
        style={{
          paddingTop: '20px',
        }}
      >
        Login{' '}
      </h1>
      <TextField
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        value={email}
        style={{
          minWidth: '60%',
        }}
        label="E-mail"
        required
        variant="outlined"
        margin="normal"
      />
      <br />
      <TextField
        onChange={(e) => {
          setSenha(e.target.value);
        }}
        value={senha}
        style={{
          minWidth: '60%',
        }}
        type="password"
        label="Senha"
        required
        variant="outlined"
        margin="normal"
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
            left: '58%',
            marginTop: '20px',
          }}
        >
          Entrar
        </Fab>
        <Fab
          variant="extended"
          style={{
            position: 'absolute',
            left: '20%',
            marginTop: '20px',
          }}
        >
          Cadastrar
        </Fab>
      </Typography>
    </form>
  );
};

export default Login;

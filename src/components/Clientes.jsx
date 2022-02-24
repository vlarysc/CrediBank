import React, { useContext } from 'react';
import ListCliente from './ListCliente'
import ClienteProvider from '../contexts/State.js'

const Clientes = () => {
  const context = useContext(ClienteProvider);
  console.log(context);
  const data = context.clientes.map(cliente => (
    <ListCliente cliente={cliente}> </ListCliente>
  ));
  console.log(data);
  return (
    <h1>{data}</h1>
  )
}

export default Clientes;
import React, { useContext } from 'react';
import ListCliente from './ListCliente'
import { ClienteContext } from '../contexts/cliente/State.js'

const Clientes = () => {
  const context = useContext(ClienteContext);
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
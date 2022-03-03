import React, { useContext } from 'react';
import ListCliente from './ListCliente'
import { ClienteContext } from '../contexts/cliente/State.js'

const Clientes = () => {
  const context = useContext(ClienteContext);
  /*   console.log(context.clientes); */
  const data = context.clientes.map(cliente => (
    <ListCliente cliente={cliente}> </ListCliente>
  ));


  /*   const clienteFind = data.filter((obj) => obj.cpf === "05006748377");
    console.log("oi", { clienteFind }); */
  return (
    <h1>{data}</h1>
  )
}

export default Clientes;
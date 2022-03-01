import React from 'react';


function ListCliente({ cliente }) {

  return (
    <div>
      {cliente.nome} -
      {cliente.sobrenome} -
      {cliente.cpf} -
      {cliente.nascimento} -
      {cliente.email} -
      {cliente.telefone} -
      {cliente.senha}
    </div>
  )
}

export default ListCliente;
import React from 'react';


function Clientes({ cliente }) {

  return (
    <div>
      {cliente.nome}
      {cliente.sobrenome}
      {cliente.cpf}
      {cliente.nascimento}
      {cliente.email}
      {cliente.telefone}
      {cliente.senha}
    </div>
  )
}

export default Clientes;
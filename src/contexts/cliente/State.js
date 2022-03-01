import React, { useState, createContext } from 'react';

export const ClienteContext = createContext();

const ClienteProvider = ({ children }) => {
  const [clientes, setClientes] = useState([
    {
      nome: "Manoel",
      sobrenome: "Alves",
      cpf: "05006748377",
      nascimento: "11071993",
      email: "dsa@gmail.com",
      telefone: "5499999999",
      senha: "852165785",
    },
    {
      nome: "Debora",
      sobrenome: "Seco",
      cpf: "61825646015",
      nascimento: "11071993",
      email: "dsa@gmail.com",
      telefone: "5499999999",
      senha: "852165785",
    }
  ]);
  const saveCliente = cliente => {
    const novoCliente = {
      nome: cliente.nome,
      sobrenome: cliente.sobrenome,
      cpf: cliente.cpf,
      nascimento: cliente.nascimento,
      email: cliente.email,
      telefone: cliente.telefone,
      senha: cliente.senha,
    }
    setClientes([...clientes, novoCliente])
  }

  return (
    <ClienteContext.Provider value={{ clientes, saveCliente }}>
      {children}
    </ClienteContext.Provider>
  )
}

export default ClienteProvider;
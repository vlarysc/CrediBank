import React, { useState, createContext } from 'react';

export const ClienteContext = createContext();

const ClienteProvider = ({ children }) => {
  const clienteExiste = () => {
    if (JSON.parse(localStorage.getItem("clientes"))) {
      return JSON.parse(localStorage.getItem("clientes"))
    }
    return [{
      id: 1,
      nome: "Manoel",
      sobrenome: "Neto",
      cpf: "69574883060",
      nascimento: "11/07/1994",
      email: "manoelfranciscose@gmail.com",
      telefone: "(54) 9 9690-1309",
      senha: "69574883060"
    }]
  }
  const [clientes, setClientes] = useState(clienteExiste());

  const saveCliente = cliente => {
    let id = clientes.length + 1;
    const novoCliente = {
      id,
      ...cliente
    }
    setClientes([...clientes, novoCliente]);
    localStorage.setItem("clientes", JSON.stringify([...clientes, novoCliente]))
  }
  return (
    <ClienteContext.Provider value={{ clientes, saveCliente, setClientes }}>
      {children}
    </ClienteContext.Provider>
  )
}

export default ClienteProvider;
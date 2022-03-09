import React, { useState, createContext } from 'react';

export const ClienteContext = createContext();

const ClienteProvider = ({ children }) => {
  const clienteExiste = () => {
    if (JSON.parse(localStorage.getItem("clientes"))) {
      return JSON.parse(localStorage.getItem("clientes"))
    }
    return []
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
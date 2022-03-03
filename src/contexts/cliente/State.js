import React, { useState, createContext, useEffect } from 'react';

export const ClienteContext = createContext();

const ClienteProvider = ({ children }) => {
  const [clientes, setClientes] = useState([]);
  /*   let getDados = JSON.parse(localStorage.getItem("clientes"));
    useEffect(() => {
      setClientes(getDados);
          console.log("Json", getDados);
    }, [getDados]); */

  /* fazer um map e para cada cliente que existir no localStorage
  puxar um por um usando o saveCliente */

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
    setClientes([...clientes, novoCliente]);
  }
  //Eu vou adicionar alguns clientes e depois vou apagar o comando de adicionar ao localStorage e vou começar a tentar pegar os valores e joga-los no meu estado
  /*   clientes.length !== 0 ? localStorage.setItem("clientes", JSON.stringify([...clientes])) :
      console.log(clientes.length) */
  return (
    <ClienteContext.Provider value={{ clientes, saveCliente }}>
      {children}
    </ClienteContext.Provider>
  )
}

export default ClienteProvider;
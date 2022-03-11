import React, { useState, createContext } from 'react';

export const FuncionarioContext = createContext();

const FuncionarioProvider = ({ children }) => {
  const clienteExiste = () => {
    if (JSON.parse(localStorage.getItem("funcionarios"))) {
      return JSON.parse(localStorage.getItem("funcionarios"))
    }
    return [{
      id: 1,
      nome: "Manoel",
      sobrenome: "Neto",
      cpf: "69574883060",
      nascimento: "11/07/1994",
      contatos: {
        email: "manoelfranciscose@gmail.com",
        telefone: "(54) 9 9690-1309",
      },
      senha: "69574883060",
      cargo: "Administrador",
      permissao: ["adm"],
      equipe: {
        superiorId: null,
        coordenadorId: null,
        gerenteId: null,
      },
      enderecos: {
        residencial: {
          cep: 95090040,
          rua: "Batista Tissot",
          numero: 46,
          bairro: "Galópolis",
          cidade: "Caxias do Sul",
          estado: "RS"
        },
        trabalho: {
          cep: 95090040,
          rua: "Batista Tissot",
          numero: 46,
          bairro: "Galópolis",
          cidade: "Caxias do Sul",
          estado: "RS"
        }
      },
      contas: {
        contaCorrente: {
          agencia: 7322,
          conta: 37729,
          digito: 5,
          saldo: 100,
          senha: "9999"
        },
        contaPoupanca: {
          agencia: 7322,
          conta: 32575,
          digito: 9,
          saldo: 500,
          senha: "9999"
        }
      }
    }]
  }
  const [funcionarios, setFuncionarios] = useState(clienteExiste());

  const saveFuncionario = cliente => {
    let id = funcionarios.length + 1;
    const novoFuncionario = {
      id,
      ...cliente
    }
    setFuncionarios([...funcionarios, novoFuncionario]);
    localStorage.setItem("funcionarios", JSON.stringify([...funcionarios, novoFuncionario]))
  }
  return (
    <FuncionarioContext.Provider value={{ funcionarios, saveFuncionario, setFuncionarios }}>
      {children}
    </FuncionarioContext.Provider>
  )
}

export default FuncionarioProvider;
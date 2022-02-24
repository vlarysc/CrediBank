import validator from 'validator';

export function valCPF(cpf) {
  if (cpf.length !== 11) {
    return { valido: false, texto: "CPF deve ter 11 digitos." }
  } else {
    return { valido: true, texto: "" }
  }
}

export const valEmail = (email) => {
  if (!validator.isEmail(email)) {
    return { valido: false, texto: "Necessário um e-mail válido!" }
  } else {
    return { valido: true, texto: '' }
  }
}

export function valTelefone(telefone) {
  if (telefone.length !== 11) {
    return { valido: false, texto: "CPF deve ter 11 digitos." }
  } else {
    return { valido: true, texto: "" }
  }
}
export function valSenha(senha) {
  if (senha.length !== 11) {
    return { valido: false, texto: "CPF deve ter 11 digitos." }
  } else {
    return { valido: true, texto: "" }
  }
}
export function valSenhaConfirmada(senhaConfirmada, senha) {
  if (senhaConfirmada !== senha) {
    return { valido: false, texto: "Senhas não coicidem!" }
  } else {
    return { valido: true, texto: "" }
  }
}
export function valNascimento(nascimento) {
  if (nascimento.length !== 11) {
    return { valido: false, texto: "CPF deve ter 11 digitos." }
  } else {
    return { valido: true, texto: "" }
  }
}

export function valNome(nome) {
  if (nome.length !== 11) {
    return { valido: false, texto: "CPF deve ter 11 digitos." }
  } else {
    return { valido: true, texto: "" }
  }
}
export function valSobrenome(sobrenome) {
  if (sobrenome.length !== 11) {
    return { valido: false, texto: "CPF deve ter 11 digitos." }
  } else {
    return { valido: true, texto: "" }
  }
}
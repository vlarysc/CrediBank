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

export function valTelefone(cpf) {
  if (cpf.length !== 11) {
    return { valido: false, texto: "CPF deve ter 11 digitos." }
  } else {
    return { valido: true, texto: "" }
  }
}
export function valSenha(cpf) {
  if (cpf.length !== 11) {
    return { valido: false, texto: "CPF deve ter 11 digitos." }
  } else {
    return { valido: true, texto: "" }
  }
}
export function valSenhaConfirmada(cpf) {
  if (cpf.length !== 11) {
    return { valido: false, texto: "CPF deve ter 11 digitos." }
  } else {
    return { valido: true, texto: "" }
  }
}
export function val(cpf) {
  if (cpf.length !== 11) {
    return { valido: false, texto: "CPF deve ter 11 digitos." }
  } else {
    return { valido: true, texto: "" }
  }
}
import validator from 'validator';

export function valCPF(cpf) {
  if (cpf.length !== 11) {
    return { valido: false, texto: "CPF deve ter 11 digitos." }
  } else {
    return { valido: true, texto: "" }
  }
}

export function valNascimento(nascimento) {
  if (nascimento === "__/__/____" || nascimento.replace(/\D/g, "").length !== 8) {
    console.log(nascimento.length);
    return { valido: false, texto: "Campo obrigatório" }
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
  if (telefone.replace(/\D/g, "").length < 10 || telefone === "(__) _ ____-____") {
    return { valido: false, texto: "Telefone obrigatório!" }
  } else {
    return { valido: true, texto: "" }
  }
}
export function valSenha(senha) {
  if (senha.length < 11) {
    return { valido: false, texto: "Sua senha deve ter no mínimo 11 digitos." }
  } else {
    return { valido: true, texto: "" }
  }
}
export function valSenhaConfirmada(senhaConfirmada, senha) {
  if (!senhaConfirmada) {
    return { valido: false, texto: "Senhas não coincidem!" }
  } else {
    return { valido: true, texto: "" }
  }
}
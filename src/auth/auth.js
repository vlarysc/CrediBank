export const usuarioAutenticado = () => {
  let status = JSON.parse(localStorage.getItem("statusAutenticado"))
  return status
};

export const autenticandoUsuario = (usuario, usuarios) => {

  if (usuario) {
    let findUser = usuarios.filter(function (e) {
      return e.email === usuario.email;
    })
    const { senha } = findUser[0];

    if (usuario.senha === senha) {
      console.log("logouuuuuu")
      localStorage.setItem("statusAutenticado", JSON.stringify(true))
    } else {
      console.log("senha incorreta")
    }
  } else {
    return false
  }
}

//jogar o true ou false no localStorage


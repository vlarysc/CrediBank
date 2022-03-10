import React from 'react'
import imagem from './doguito404.svg'
import './Error404.css'

const Pagina404 = () => {
  return (
    <main >
      <div className="centered">
        <img className="doguito-imagem" src={imagem} alt="ilustração doguito" />
      </div>
      <div className="centered">
        <h1>404</h1>
      </div>
      <p className="naoencontrado-texto centered">
        Ops, Essa página não existe!
      </p>
    </main>
  )
}

export default Pagina404
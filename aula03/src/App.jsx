import React from 'react'
import EstouConseguindoAprenderReact from './components/EstouConseguindoAprenderReact'
import Aluno from './components/Aluno'

const App = () => {
  return (
//    <div>
//      <EstouConseguindoAprenderReact estouConseguindo={true} />
//    </div>

    <div>
      {
        [
          {nome: "João", email: "joão@gmail", curso: "Sistema para Intenet", media: 7},
          {nome: "Maria", email: "maria@gmail", curso: "Sistema para Intenet", media: 8},
          {nome: "Pedro", email: "pedro@gmail", curso: "Publicidade", media: 5}
        ].map((aluno) =>
          <Aluno nome={aluno.nome} email={aluno.email} curso={aluno.curso} media={aluno.media}/>
        )
      }
    </div>
  )
}

export default App
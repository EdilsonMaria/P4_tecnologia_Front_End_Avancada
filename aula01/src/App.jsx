import React from 'react'
import Adicao from './components/Adicao'
import Subtração from './components/Subtração'
import Multiplicacao from './components/Multiplicacao'
import Divisao from './components/Divisao'
import PrecisoEstudar from './components/PrecisoEstudar'

const App = () => {
  return (
    <div>
      <Adicao num1={2} num2={2}/>
      <Subtração num1={2} num2={2}/>
      <Multiplicacao num1={2} num2={2}/>
      <Divisao num1={2} num2={2}/>
      <PrecisoEstudar nome_tecnologia={'FrontEnd'}/>
    </div>
  )
}

export default App
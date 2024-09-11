import React from 'react'
import { useState } from 'react'

const HookContador = () => {

    const [contador, setContador] = useState(1)

    function incremetarContador() {
        setContador(contador+1)
    }

  return (
    <div>
        <h1>Contador UserState</h1>
        <button onClick={incremetarContador}>Incrementar Contador</button>
        <h1>O contador esta em: {contador}</h1>
    </div>
  )
}

export default HookContador
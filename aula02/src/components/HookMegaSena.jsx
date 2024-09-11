import React from 'react'
import { useState } from 'react'

const HookMegaSena = () => {

    const [sorteado, setSorteado] = useState()
    const [listaDeSorteados, setListaDeSorteados] = useState([])

    function sortarNumero() {
        if (listaDeSorteados.length < 6) {
            let numSorteado = Math.floor(Math.random() * 60) + 1
            setSorteado(numSorteado)
            setListaDeSorteados([...listaDeSorteados, numSorteado])
        } else {
            alert("Ja temos os 6 numeros sorteados!")
        }
    }

  return (
    <div>
        <h1>Sorteador da Mega em React! :)</h1>
        <button onClick={sortarNumero}>Sortear Numero</button>

        <h1>Últinom numero sorteado: {sorteado}</h1>
        <h1>Sorteados: {listaDeSorteados.join (" - ")}</h1>
    </div>
  )
}

export default HookMegaSena
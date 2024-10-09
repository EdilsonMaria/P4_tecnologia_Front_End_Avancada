import React from 'react'
import style from './Campanha.module.css'

const Campanha = (props) => {

    function defineMensagem(mes) {
        if (mes === "Setembro") {
            return "Prevenção ao suicidio"
        } else if (mes === "Outubro") {
            return "Conscientização do cancer de mama"
        } else if (mes === "Novembro") {
            return "Prevenção e combate ao cancer de prostata"
        }
    }

    function defineCorDeFundo(mes) {
        if (mes === 'Setembro') {
            return style.setembro
        } else if (mes === 'Outubro') {
            return style.outubro
        } else if (mes === 'Novembro') {
            return style.novembro
        }
    }

  return (
    <div className={defineCorDeFundo(props.mes)}>
        {defineMensagem(props.mes)}        
    </div>
  )
}

export default Campanha
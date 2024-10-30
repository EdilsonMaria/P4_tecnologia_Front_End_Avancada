import React, { useEffect, useState } from 'react'

const url = "http://localhost:3000/noticias"

const Noticias = () => {

  const [noticias, setNoticias] = useState([])

  useEffect(() =>{
    async function fetchData() {
      const res = 
    }
  })

  return (
    <div>
        Aqui sera a pagina de noticias...
    </div>
  )
}

export default Noticias
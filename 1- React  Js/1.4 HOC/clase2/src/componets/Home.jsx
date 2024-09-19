import React, { useEffect, useState } from 'react'

const Home = ({name}) => {
    console.log(name)
const [stateName, setStateName]= useState(name)

useEffect(() => {
  console.log("cargue el Virtual DOM", stateName)
}, [stateName])

  return (
    <div>
      <h1>Saludos : {stateName} </h1>
      <button onClick={()=>setStateName(name + "Apellido")}>Cambiar estado</button>
    </div>
  )
}

export default Home

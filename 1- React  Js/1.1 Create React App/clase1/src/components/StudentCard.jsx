import React from 'react'

const StudentCard = ({ estudiante }) => {
  console.log(estudiante)
  function editar () {

  }

  return (
    <div>
      <h1>{estudiante.nombre}</h1>
      <h2>{estudiante.edad}</h2>
    </div>
  )
}

export default StudentCard
import React from 'react'
import StudentCard from './StudentCard'

const Welcome = ({ usuario, estudiantes }) => {
  return (
    <div>
      <h1>
        Hola, mi nombre es {usuario.nombre} y tengo {usuario.edad} años
      </h1>
      <p>Esto es un componente de React</p>

      <h1>Mi lista de estudiantes es esta: </h1>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
      {estudiantes.map(estudiante => {
        return (
          <StudentCard estudiante={estudiante} />
        )
      })}
      </div>
    </div>
  )
}

export default Welcome

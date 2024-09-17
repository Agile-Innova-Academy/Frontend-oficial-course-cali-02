import React from 'react'
import estilosDeLista from './Estudiantes.module.css'
import styled from 'styled-components'
import { MiBoton } from '../styles/globalComponents'

const Estudiantes = ({ estudiantes, profesor, saludo }) => {
  const divStyle = {
    color: '#f00',
    padding: '1rem'
  }

  // const MiBoton = styled.button`
  //   background-color: #B4FFD8;
  //   border: none;
  //   border-radius: 20px;
  //   padding: 0.5rem;
  //   color: #fff
  // `

  return (
    <div
      style={{
        border: '1px solid #eee',
        backgroundColor: '#00f',
        ...divStyle
      }}
    >
      <div>Estudiantes:</div>
      <ul>
        {estudiantes.map((estudiante, index) => (
          <li style={estilosDeLista.li} key={index}>
            {estudiante.nombre} - {estudiante.edad}
          </li>
        ))}
      </ul>
      <div>Profesor: {profesor}</div>
      <button onClick={saludo}>Saludar al profesor</button>
      <MiBoton>Iniciar con Google</MiBoton>
      <MiBoton>Iniciar con Facebook</MiBoton>
    </div>
  )
}

export default Estudiantes

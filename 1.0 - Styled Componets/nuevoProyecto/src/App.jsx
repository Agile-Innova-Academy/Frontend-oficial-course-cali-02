import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Estudiantes from './components/Estudiantes'
import Botones from './components/Botones'

function App () {
  const arrayEstudiantes = [
    { nombre: 'Emanuel', edad: 22 },
    { nombre: 'Daniel', edad: 21 },
    { nombre: 'William', edad: 23 },
    { nombre: 'Yesenia', edad: 20 },
    { nombre: 'Miguel', edad: 24 }
  ]

  const nombreProfesor = 'Sebastian'

  function SayHi () {
    alert('Hola!')
  }

  return (
    <>
      <Estudiantes
        estudiantes={arrayEstudiantes}
        profesor={nombreProfesor}
        saludo={SayHi}
      />
      <Botones />

      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App

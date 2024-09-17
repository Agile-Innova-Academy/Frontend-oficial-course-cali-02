import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './components/Welcome'

function App() {
  const userName = "Emanuel"
  const edad = 22

  const usuario = {
    nombre: userName,
    edad: edad,
  }

  const studentsArray = [
    { id: 1, nombre: 'Daniel', edad: 18 },
    { id: 2, nombre: 'Yesenia', edad: 17 },
    { id: 3, nombre: 'William', edad: 15 },
  ]

  function Saludar () {
    alert('Hola, bienvenido a la API de películas!');
  }

  return (
    <>
      <Welcome usuario={usuario} estudiantes={studentsArray} />
      <button onClick={Saludar}>CLICKEAME</button>
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

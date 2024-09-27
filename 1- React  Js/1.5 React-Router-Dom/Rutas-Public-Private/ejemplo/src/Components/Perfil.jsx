import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

const Perfil = () => {
    const {state} = useContext(AuthContext)

    console.log(state)
  return (
    <div>
        <h1>Estoy en Perfilllllllllllllllllllllllllllllllllllllllll</h1>
        <h3>{state?.email}</h3>
        </div>
  )
}

export default Perfil
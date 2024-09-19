import React from 'react'
import useForm from '../Hooks/useForm'

const Product = () => {
       const [dataForm, handleChange, reset] = useForm({
       nombre:"",
       email: "",
       pass: "",
       telefono: "",
       edad: ""
    })
    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log("Dentro de submit", e, dataForm)
        reset()
    }
  return (
    <div> <form onSubmit={handleSubmit}>
        <input id="nombre" name="nombre" placeholder='Ingrese Nombre' onChange={handleChange}/>
       <input id="email" name="email" placeholder='Ingrese Email' onChange={handleChange}/>

        <input id="pass" name="pass" placeholder='Ingrese Contraseña' onChange={handleChange}/>

        <input id="telefono" name="telefono" placeholder='Ingrese telef' onChange={handleChange}/>
        <input id="edad" name="edad" placeholder='Ingrese edad' onChange={handleChange}/>
<button type='submit'>Registrar</button>
      </form></div>
  )
}

export default Product
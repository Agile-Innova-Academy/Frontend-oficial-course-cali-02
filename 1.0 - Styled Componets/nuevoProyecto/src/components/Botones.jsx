import React from 'react'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { MiBoton, MiBoton2 } from '../styles/globalComponents'
import '../styles/fixedStyles.css'

const Botones = () => {
  return (
    <>
      <MiBoton>Boton1</MiBoton>
      <MiBoton2>Boton2</MiBoton2>
      <ButtonGroup variant="outlined" aria-label="Basic button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </>
  )
}

export default Botones
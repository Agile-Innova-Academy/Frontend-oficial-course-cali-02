import React, { useState } from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import DeleteIcon from '@mui/icons-material/Delete'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import EditIcon from '@mui/icons-material/Edit'
import { postData } from '../helpers/postData'
import { favoritesAPIUrl } from '../constants/constants'
import { useLocation } from 'react-router-dom'
import { Box, Modal, TextField } from '@mui/material'
import useForm from '../hooks/useForm'
import { patchData } from '../helpers/patchData'
import Swal from 'sweetalert2'
import { deleteData } from '../helpers/deleteData'

export default function CharacterCard ({ data, setElementDeleted }) {
  // Añadir favorito
  async function addFavorite () {
    await postData(favoritesAPIUrl, data)
  }

  //Editar Favorito
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
  }

  async function deleteFavorite () {
    await postData(favoritesAPIUrl, data)
  }

  const { pathname } = useLocation()

  const { formValues, handleInputChange, resetFormValues } = useForm({
    name: data.name,
    status: data.status,
    species: data.species,
    image: data.image,
    location: data.location.name
  })

  const editFavorite = async (e) => {
    e.preventDefault()
    await patchData(favoritesAPIUrl, data.id, formValues)
  }

  // Eliminar favorito
  async function deleteFavorite () {
    await Swal.fire({
      title: "Do you really want to delete this item?",
      showDenyButton: true,
      confirmButtonColor: '#f00',
      confirmButtonText: "Eliminar",
      denyButtonColor: '#eee',
      denyButtonText: `Conservar`
    }).then(async (result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        await deleteData(favoritesAPIUrl, data.id)
        setElementDeleted(true)
        Swal.fire("Elemento eliminado", "", "success");
      }
    });
  }

  return (
    <Card sx={{ width: 300 }}>
      <Button
        variant='contained'
        color={
          data.status === 'Alive'
            ? 'success'
            : data.status === 'Dead'
            ? 'error'
            : 'secondary'
        }
        sx={{ position: 'absolute', margin: '1rem 13rem' }}
      >
        {data.status}
      </Button>
      <CardMedia sx={{ height: 300 }} image={data.image} title='green iguana' />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {data.name}
        </Typography>
        <Typography variant='body2' sx={{ color: 'text.secondary' }}>
          Ultima ubicación conocida: {data.location.name}
          <br />
          Especie: {data.species}
        </Typography>
      </CardContent>
      <CardActions>
        {pathname === '/characters' ? (
          <Button
            onClick={addFavorite}
            variant='contained'
            color='info'
            startIcon={<ThumbUpIcon />}
          >
            Añadir a Favoritos
          </Button>
        ) : (
          <>
            <Button
              onClick={handleOpen}
              variant='contained'
              color='warning'
              startIcon={<EditIcon />}
            >
              Editar
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby='modal-modal-title'
              aria-describedby='modal-modal-description'
            >
              <Box sx={style}>
                <form onSubmit={editFavorite}>
                  <fieldset>
                    <legend>Editar</legend>
                    <label htmlFor='name'>Nombre:</label>
                    <TextField
                      type='text'
                      id='name'
                      name='name'
                      onChange={handleInputChange}
                      value={formValues.name}
                      required
                    />
                    <br />
                    <label htmlFor='status'>Status:</label>
                    <TextField
                      type='text'
                      id='status'
                      name='status'
                      onChange={handleInputChange}
                      value={formValues.status}
                      required
                    />
                    <br />
                    <label htmlFor='species'>Especie:</label>
                    <TextField
                      type='text'
                      id='species'
                      name='species'
                      onChange={handleInputChange}
                      value={formValues.species}
                      required
                    />
                    <br />
                    <label htmlFor='image'>Imagen:</label>
                    <TextField
                      type='text'
                      id='image'
                      name='image'
                      onChange={handleInputChange}
                      value={formValues.image}
                      required
                    />
                    <br />
                    <label htmlFor='location'>Ubicación:</label>
                    <TextField
                      type='text'
                      id='location'
                      name='location'
                      onChange={handleInputChange}
                      value={formValues.location}
                    />
                    <br />
                    <Button
                      type="submit"
                      variant='contained'
                      color='success'
                    >
                      Update
                    </Button>
                  </fieldset>
                </form>
              </Box>
            </Modal>
            <Button
              onClick={deleteFavorite}
              variant='contained'
              color='error'
              startIcon={<DeleteIcon />}
            >
              Eliminar
            </Button>
          </>
        )}
      </CardActions>
    </Card>
  )
}

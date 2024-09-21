import React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

export default function CharacterCard ({ data }) {
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
    </Card>
  )
}

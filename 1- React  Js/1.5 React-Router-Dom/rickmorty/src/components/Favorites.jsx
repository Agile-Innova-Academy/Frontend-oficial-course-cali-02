import React, { useEffect, useState } from 'react'
import { favoritesAPIUrl } from '../constants/constants'
import { Box, Grid2, Pagination, Paper, Stack, styled } from '@mui/material'
import CharacterCard from './CharacterCard'
import axios from 'axios'

const Favorites = () => {
  const [characters, setCharacters] = useState([])
  const [elementDeleted, setElementDeleted] = useState(false)

  // Fetch favorites characters from API
  useEffect(() => {
    console.log(elementDeleted);
    const fetchCharacters = async () => {
      await axios.get(favoritesAPIUrl)
        .then(({data}) => {
          data.length > 0 ? setCharacters(data) : null
        })
    }

    fetchCharacters()
  }, [elementDeleted])

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027'
    })
  }))

  return (
    <>
      <Grid2 container spacing={2}>
        <Grid2
          size={12}
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '2rem',
            padding: '1rem',
            alignItems: 'center',
            flexDirection: 'column'
          }}
        >
          {/* <Grid2 size={12}>
            <Stack spacing={2}>
              <Pagination count={pages} color='primary' page={currentPage} onChange={handleChange}  />
            </Stack>
          </Grid2> */}
          <Grid2
            size={12}
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              justifyContent: 'center'
            }}
          >
            {characters?.map(personaje => (
              <CharacterCard data={personaje} setElementDeleted={setElementDeleted} key={personaje.id}/>
            ))}
          </Grid2>
        </Grid2>
      </Grid2>
      {/* <Box component='section' sx={{ p: 2, display: 'flex' }}>
        <Box component='section'>Filtros</Box>
        <Box component='section'>Personajes</Box>
      </Box> */}
    </>
  )
}

export default Favorites

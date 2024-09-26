import React, { useEffect, useState } from 'react'
import { apiUrl } from '../constants/constants'
import { Box, Grid2, Pagination, Paper, Stack, styled } from '@mui/material'
import CharacterCard from './CharacterCard'

const Characters = () => {
  const [characters, setCharacters] = useState([])
  const [pages, setPages] = useState(1)
  const [currentPage, setCurrentPage] = useState(1);
  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  // Fetch characters from API
  useEffect(() => {
    const fetchCharacters = async () => {
      await fetch(`${apiUrl}/character/?page=${currentPage}`)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          setCharacters(data.results)
          setPages(data.info.pages)
        })
    }

    fetchCharacters()
  }, [currentPage])

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
      <Box component='section' sx={{ p: 2, border: '1px dashed grey' }}>
        Barra de Busqueda
      </Box>
      <Grid2 container spacing={2}>
        <Grid2 size={3}>
        
          <Item>Filtros</Item>
        </Grid2>
        <Grid2
          size={9}
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '2rem',
            padding: '1rem',
            alignItems: 'center',
            flexDirection: 'column'
          }}
        >
          <Grid2 size={12}>
            <Stack spacing={2}>
              <Pagination count={pages} color='primary' page={currentPage} onChange={handleChange}  />
            </Stack>
          </Grid2>
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
              <CharacterCard data={personaje} parent='characters' key={personaje.id} />
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

export default Characters

import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img className="logoImg" src="https://1000logos.net/wp-content/uploads/2022/03/Rick-and-Morty.png" />
          </Typography>
          {/* <a href=""></a> */}
          <NavLink to='/characters'>
            <Button color="inherit">Characters</Button>
          </NavLink>
          <NavLink to='/episodes'>
            <Button color="inherit">Episodes</Button>
          </NavLink>
          <NavLink to='/locations'>
            <Button color="inherit">Locations</Button>
          </NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
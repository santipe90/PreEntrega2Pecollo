import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import CartWidget from './CartWidget';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';


const pages = ['Productos', 'Asesoramiento', 'Nosotros'];

const NavBar = () => {
    const handleNameSection = (section) =>{
        console.log(section);
    }
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <PhoneAndroidIcon/>
         <Typography
            variant="h6"
            noWrap
            component="a"
            href="#navbar"
            sx={{
              mr: 4,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            MR ROBOT
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                // onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <CartWidget handleNameSection={handleNameSection}/>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
  
export default NavBar
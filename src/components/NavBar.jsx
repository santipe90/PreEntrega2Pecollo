import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Button';
import CartWidget from './CartWidget';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import { NavLink } from 'react-router-dom';


const pages = ['GamePad', 'Joystick', 'VR'];

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
              fontFamily: 'roboto',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            MR ROBOT
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', padding: '8px' } }}>
            <Link>
            <NavLink
              to="/category/Joystick"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Joystick
            </NavLink>
            <NavLink
              to="/category/GamePad"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Gamepad
            </NavLink>
            <NavLink
              to="/category/VR"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              VR
            </NavLink>
            </Link>
          </Box>
          <CartWidget handleNameSection={handleNameSection}/>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
  
export default NavBar
import { Box, IconButton } from '@mui/material'
import React from 'react'
import Logo from '../logo.png'
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget = ({handleNameSection}) => {

  return (
    <Box sx={{ flexGrow: 0 }}>
       {/* <Tooltip title="Open Settings"> */}
            <IconButton 
                onClick={()=>handleNameSection("estamos en el Carrito")} 
                sx={{ p: 0 }}
            >
              <Badge badgeContent={4} color="error">
              <ShoppingCartIcon fontSize='large'/>
          </Badge>
          
            </IconButton>
        {/* </Tooltip> */}
    </Box>
  )
}

export default CartWidget
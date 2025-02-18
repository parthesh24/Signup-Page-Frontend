import React from 'react'
import { Box, Typography } from '@mui/material'
import balogo from '../images/balogo.svg'

const Header = () => {
  return (
    <Box
    width="100%" 
    sx={{background: "linear-gradient(135deg,rgb(0, 0, 134),rgb(251, 164, 157))"}}  
    display='flex'
    alignItems="center" 
    justifyContent="flex-start"
    >
      <a href='/'>
    <Box 
      display='flex' 
      alignItems="center" 
      bgcolor='white' 
      ml={1} mt={1} mb={1}
      position='relative'
      >
    <img 
    src={balogo} alt="" height={50} width={130}
    
    />
    </Box>
    </a>
        <Typography variant="h5" fontWeight="bold" color='white' textAlign='center' flexGrow={1} ml={-20}>
          Blue Altair - Employee Signup
        </Typography>
      </Box>
      
  )
}

export default Header
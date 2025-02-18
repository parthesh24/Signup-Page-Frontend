import React from 'react'
import { Button, Box, Card, FormLabel } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/account-details');
    }
  return (
    <Card sx={{ width: "100%", maxWidth: 500, mt: 4,mb:4, p: 2, boxShadow: 3 }}>
      <FormLabel component="legend" sx={{fontWeight: 'bold', fontSize: '2.0rem'}}>Welcome!</FormLabel>
    <Box
        padding= '50px'
        alignItems= 'center'
        justifyContent= 'center'
        bgcolor='white'
        color='black'
    >
        <h2>Employee Sign in</h2>
        <Button variant="contained" sx={{bgcolor:"#000086"}} onClick={handleClick}>Sign in</Button>
    </Box>
    </Card>
  )
}

export default Home
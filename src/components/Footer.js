import React from 'react'
import { Box, Typography } from '@mui/material'
import linkedin from '../images/linkedin-brands-solid.svg'
import facebook from '../images/square-facebook-brands-solid.svg'
import twitter from '../images/x-twitter-brands-solid.svg'
import instagram from '../images/square-instagram-brands-solid.svg'


export const Footer = () => {
  return (
    <Box 
        width="100%" 
         
        // mt={4} 
        sx={{background: "linear-gradient(135deg,rgb(251, 164, 157), rgb(0, 0, 134))",
        color:"white",
        textAlign:"center",
        // display:'flex',
        justifyContent: 'left',
        position: 'relative',
        bottom: '0',
        marginTop: 'auto',
      }}  
      >
        <Box display="flex" justifyContent="left" alignItems="center" mt={1}>
        <div style={{marginLeft:'4px' , marginRight: '4px' }}><a href='https://www.linkedin.com/company/blue-altair' style={{ display: 'inline-block' }}><img src={linkedin} alt="linkedin" style={{width: '30px', height: '30px'}} /></a></div>
        <div style={{marginLeft:'4px' , marginRight: '4px' }}><a href='https://twitter.com/bluealtair1' style={{ display: 'inline-block' }}><img src={twitter} alt="twitter" style={{width: '30px', height: '30px'}} /></a></div>
        <div style={{marginLeft:'4px' , marginRight: '4px' }}><a href='https://www.facebook.com/bluealtair1/' style={{ display: 'inline-block' }}><img src={facebook} alt="facebook" style={{width: '30px', height: '30px'}} /></a></div>
        <div style={{marginLeft:'4px' , marginRight: '4px' }}><a href='https://www.instagram.com/bluealtair1' style={{ display: 'inline-block' }}><img src={instagram} alt="instagram" style={{width: '30px', height: '30px'}} /></a></div>
        </Box>

        <Typography variant="body2" textAlign="left" pb={1} pl={1}>
        Copyright © 2025 Blue Altair. All rights reserved. Terms and Conditions Privacy Policy Cookie Policy
        </Typography>
      </Box>
  )
}

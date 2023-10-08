import { Box } from '@mui/material'
import React from 'react'
import SubFooter from './ContentFooter/SubFooter'


const Footer = () => {
  return (
    <Box id={'contact'}>
  
    <SubFooter/>
    <footer style={{backgroundColor:'#262626 ',textAlign:'center',padding:'10px',height:'40px', fontFamily: "Poppins",color:'white',fontWeight:'500',alignItems:'center'}}>
      <Box></Box>
      
      <p className='text-xs'>Copyright © 2023 | Online Shopping</p>
    </footer>

  </Box>
  )
}

export default Footer
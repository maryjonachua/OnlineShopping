import { Typography } from '@mui/material'
import React from 'react'

const SubText = ({text}) => {
  return (
    <>
    <Typography variant="body2" sx={{'&:hover': {
                textDecoration:'underline', 
              },}} >{text}</Typography>
    
    </>
  )
}

export default SubText
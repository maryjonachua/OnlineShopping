import React from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const ShoppingIcon = ({cart,login}) => {
  return (
    <>
    <ShoppingCartOutlinedIcon style={{cursor:'pointer'}}/>
      <span >{login?(cart.length):(0)}</span>
    
    </>
  )
}

export default ShoppingIcon
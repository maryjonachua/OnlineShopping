import React from 'react'
import './ItemCard.css'
import Item from './Item';
import { Box } from '@mui/material';

const ItemCard = ({item}) => {

  return (
    <>
    <div  className='itemCard  p-5'>

      <Item item={item}/>
      

    </div>
    
    </>
  )
}

export default ItemCard
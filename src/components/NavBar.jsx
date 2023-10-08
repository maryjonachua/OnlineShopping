import React, { useState } from 'react'
import './NavBar.css'
import logo from '/logo2.png'
import SearcBar from './SearcBar'

import ShoppingIcon from './ShoppingIcon';
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { Avatar, Box, IconButton, Tooltip, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';

const NavBar = ({products,setLogin,login}) => {
  
 
  const [anchorEl, setAnchorEl] = useState(null);
  const open = (anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
   
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const cart = useSelector(state => state.cart.cart)
  console.log(cart);

  const navigate = useNavigate()
  const navigateToCart = () =>{
    if(login === true)
    {
      navigate("/cart")
    }
  
  }

  const navigateToOrders = () =>{
    if(login === true){
      navigate("/orders")
    }
    
  }

  const handleLogout=()=>{
    navigate('/')
    setLogin(false)
  }

  const handleHome = ()=>{
    if(login === true){
    navigate('/home')
    }
  }
  return (
    <>
    <nav style={{borderBottom:'1px solid '}}>
   
     <div className="logo-container" >
   
        <Typography onClick={handleHome}variant='body2'sx={{
          textDecoration:'none', cursor:'pointer',
         wordSpacing:'0px',
         fontWeight:'500',
         marginLeft:'20px',
         fontFamily:'Poppins'
        }}>Online Shopping</Typography>
    
     </div>

     <div className='search-bar-container' >
      <SearcBar login={login} products={products} />
    
     </div>

     <div onClick={navigateToCart} className='cart-container'>
     
      <ShoppingIcon login={login} cart={cart}/>
   
    
     </div>

     <div onClick={navigateToOrders} style={{margin:'10px'}}>
      <Tooltip title="Orders">
      <p className='NavText' >Orders</p>
      </Tooltip>
      
     </div>

     
    <Box sx={{marginRight:'40px',display:'flex',alignItems:'center',gap:'2px'}}>
      <PersonIcon sx={{fontSize:'20px',cursor:'hover'}}/>
      <Tooltip title='Account'>
      <p onClick={handleClick} className='NavText' >Account</p>
      </Tooltip>
        {login ?(<Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >

        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>):(<></>)}
      

    </Box>
    
    </nav>
   
   
   
    </>
  )
}

export default NavBar
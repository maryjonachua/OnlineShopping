import React from "react";
import './Item.css'

import { useDispatch, useSelector } from "react-redux";
import { addToCart, } from '../../redux/CartSlice';
import { Box, Typography } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const Item = ({item}) => {
  
  const cart = useSelector(state => state.cart.cart)

  const dispatch = useDispatch()

  // Add to cart
  const addItemToCart = (item) => {
    dispatch(addToCart(item))
    toast.success("Item added to your cart", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
   
  }

  return (
    <>
   <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    <Box sx={{height:'70%',display:'flex',justifyContent:'center',cursor:'pointer'}} className='overflow-hidden'>
      {/* Item Image */}
      <img className="ItemImage h-full w-full " src={item.image} />
    </Box>


    <div className="productDesc relative hover:text-gray-700  " style={{fontFamily:'Poppins',cursor:'pointer',marginTop:'5px'}}>  
    <Box  className='relative group '>
      {/* Item Title */}
      <p className="itemTitle">
        {item.title.length > 20 ? item.title.substr(0, 20) : item.title}
      </p>

      <p className="rate">Rate: {item.rating.rate} ({item.rating.count})</p>
      {/* Item Price */}
      <p>${item.price}</p>
      </Box>
      
      <Box className='absolute top-0 left-0 w-full h-full bg-white opacity-0 hover:opacity-100 flex justify-center items-center transition-opacity duration-300 ease-in-out 'onClick={()=>addItemToCart(item)} >
        <Typography sx={{fontWeight:'600'}}>Add To Cart</Typography>
      </Box>
    </div>
 
  
  

    
    </>
  );
};

export default Item;

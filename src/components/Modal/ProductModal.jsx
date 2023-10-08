import React, { useState } from "react";

import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));
const ProductModal = ({selectedProduct,open, handleClose}) => {
  const cart = useSelector((state) => state.cart.cart);

  
  return (
    <>
     {open&&( <div>
        
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
       
        >
          <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
            Product Details
          </DialogTitle>
          <IconButton
            aria-label="close"
            onClick={()=>handleClose(selectedProduct)}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
            }}
          >
            <CloseIcon sx={{ color: "red" }} />
          </IconButton>
          <DialogContent dividers >
           {selectedProduct&&( <Box sx={{display:'flex',gap:'10px',}}>
        <Box sx={{display:'flex',gap:'20px',alignItems:'center'}}> 
        <Box sx={{width:'40%',display:'flex',justifyContent:'center'}} >
          <img style={{width:'100%'}} src={selectedProduct.image}/>
        </Box>

       <Box sx={{display:'flex',flexDirection:'column',width:'50%', }}>
        <Box sx={{height:'55%',}} >
         <Typography variant="h6" sx={{fontWeight:'600',fontFamily:'Poppins',lineHeight:'25px'}}>{selectedProduct.title}</Typography>
         <Typography variant="body2" sx={{fontSize:'12px',textAlign:'justify',color:'#6D6D6D',marginTop:'10px'}}>{selectedProduct.description}</Typography>
         <Typography sx={{marginTop:'10px'}}>${selectedProduct.price}</Typography>
        </Box>
        <Box sx={{height:'50%'}} >
       
        </Box>
        <Box sx={{display:'flex', justifyContent:'center' }}>
        <Button
          sx={{
            color: "white",
            backgroundColor: "#262626",
            padding: "10px",
            "&:hover": {
                backgroundColor: "#404040", 
                color: "white",
              },
              justifyContent:'center'
          }}
          autoFocus
          onClick={handleClose}
        >
          Add To Cart
        </Button>
        </Box>
        </Box>
        </Box>
        </Box>
        )}
          </DialogContent>
        </BootstrapDialog>
      </div>)}
    </>
  );
};

export default ProductModal;

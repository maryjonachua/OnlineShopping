import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import SubText from "./SubText";
import logo from '/logo.png'



const ContentFooter = () => {
    const [url, setUrl] = useState('https://fakestoreapi.com/products/categories');
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState([]);
  
    useEffect(() => {
      setLoading(true);
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
            setCategories(data);
        })
        .catch((error) => {
          console.error("Error fetching Categories data:", error);
          setLoading(false);
        });
    }, []);




  return (
    <>
    <Box sx={{display:"flex",justifyContent:'center',alignItems:'center'}}>
      
    {/* <img style={{width:'15%'}} src={logo} alt="Logo"/> */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "5px",
          color: "white",
       
          alignItems: "flex-start",

        }}
      >
         
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "2px",
            width:'100%',
            marginRight:'90px',
            flexWrap: "wrap",
          }}
        >
            
          <LocationOnIcon />
          <Typography variant="body2" sx={{'&:hover': {
                textDecoration:'underline', 
              },}}>Parada, Valenzuela City</Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: "2px", flexGrow: 1, }}>
          <PhoneIcon />
          <Typography variant="body2"sx={{'&:hover': {
                textDecoration:'underline', 
              },}}>333-33-33 / 09222222222</Typography>
        </Box>
        </Box>
      </Box>


  {/* container for services list */}
      <Box sx={{ display:'flex',flexDirection:'column', flexGrow: 1,color:'white',gap:'2px', cursor:'pointer',justifyContent:'center'}}>
        <Typography sx={{fontWeight:'600',}}>Categories</Typography>
        <hr style={{width:'5%',marginBottom:'6px'}}/>

        {categories.map((c,index)=>(
            <Typography key={index} variant="body2" sx={{textTransform:'capitalize','&:hover': {
                textDecoration:'underline', 
                
              },}} >{c}</Typography>
        ))}
       
        
      </Box>

      

      <Box sx={{ display:'flex',flexDirection:'column', flexGrow: 1,color:'white',gap:'2px', cursor:'pointer',justifyContent:'center'}}>
        <Typography sx={{fontWeight:'600',}}>Best Selling Products</Typography>
        <hr style={{width:'5%',marginBottom:'6px'}}/>
        
        <SubText text={'Electronics'}/>
         <SubText text={"Women's clothing"}/>
         <SubText text={"Men's clothing"}/>
         <SubText text={"Jewelries"}/>
       
      </Box>
      <Box sx={{ display:'flex',flexDirection:'column', flexGrow: 1,color:'white',gap:'2px', cursor:'pointer',justifyContent:'center'}}>
        <Typography sx={{fontWeight:'600',}}>Your Account</Typography>
        <hr style={{width:'5%',marginBottom:'6px'}}/>
        
      
         <SubText text={'Profile'}/>
         <SubText text={'Orders'}/>
         <SubText text={'Account Details'}/>
         <SubText text={'Payment Options'}/>
     
       
        
      </Box>
    
    
    </>
  );
};

export default ContentFooter;

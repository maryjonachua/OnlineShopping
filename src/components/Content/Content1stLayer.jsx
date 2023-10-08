import { Typography } from '@mui/material'
import React from 'react'

const Content1stLayer = () => {
  return (
    <div className="m-auto flex justify-center items-center text-center bg-[#F5F5F3]" >
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
   
    <br/>
    <br/>
    <br/>
    <br/>
        <Typography className="md:mx-10 font-semibold text-2xl md:text-3xl lg:text-4xl"
          variant="h6"
          sx={{ margin: "50px", fontFamily: "Poppins", fontWeight: "600" }}
        >
          Retail Therapy
          <Typography className="text-lg md:text-xl lg:text-2xl text-center md:mx-10 mt-4 font-medium" sx={{ fontFamily: "Poppins", fontWeight: "500" }}>
            Unleash Your Style with Our Latest Collections
          </Typography>{" "}
          <Typography className=" text-[#6D6D6D] md:mx-10 text-justify mt-4 text-base md:12px lg:text-xl m-auto sm:w-1/2 "sx={{ justifyContent:'center', textAlign: "justify", margin: "60px",width:'90%' }}>
            {" "}
            Dive into a world of endless possibilities! Discover the latest
            trends and must-have essentials that will elevate your style and
            make every day feel like a fashion show. From chic apparel to
            irresistible accessories, our collection has something for every
            taste and occasion. Shop now and indulge in the joy of finding the
            perfect pieces that express your unique personality. It's time to
            treat yourself to a shopping experience that leaves you feeling
            confident and inspired. Join us on this stylish journey, where
            fashion meets affordability, and every click leads to a new
            adventure in self-expression. Your dream wardrobe awaits!
          </Typography>{" "}
        </Typography>
      </div>
  )
}

export default Content1stLayer
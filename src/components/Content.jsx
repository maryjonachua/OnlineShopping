import React from "react";
import "./Content.css";
import ItemCard from "./Content/ItemCard";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";
import Content1stLayer from "./Content/Content1stLayer";

const Content = ({ products }) => {
  const cart = useSelector((state) => state.cart.cart);
console.log(products);
  return (
    <>
    
      <Content1stLayer/>
      <div className="product-container p-10 group">
        
        {products.map((item,index)=>(
        <ItemCard item={item} key={index} />
        
       ))}

      </div>
    </>
  );
};

export default Content;

import React from 'react'
import NavBar from '../components/NavBar'
import Content from '../components/content'
import CarouselComponent from '../components/CarouselComponent'
import Footer from '../components/Footer'
import ProductModal from '../components/Modal/ProductModal'



const Home = ({products,selectedProduct,setSelectedProduct}) => {
  console.log(products);
  return (
    <>

    
    <div className="home">

   

      <ProductModal products={products} />
      <CarouselComponent products={products}/>
     
      <Content products={products}/>

     
    </div>
    
    </>
  )
}

export default Home
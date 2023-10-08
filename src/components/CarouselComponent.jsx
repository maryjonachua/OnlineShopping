import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import data from './data/SrcImage'

const CarouselComponent = ({}) => {

  
  return (
    <>
<Carousel autoPlay={true} showThumbs={false} showStatus={false} startIndex={0} interval={2000}>
   
{data.map((d,index)=>(


<div key={index} style={{height:'90vh'}}>
<img style={{height:'90%'}} src={d.image} loading='priority' />
         
</div>


))}
   
    
              
                 </Carousel>
  
    
    </>
  )
}

export default CarouselComponent
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import data from './data/SrcImage'
import image1 from '/bannerImgOne.webp' 
import image2 from '/bannerImgTwo.webp'  
import image3 from '/womens_fashion.jpg'

const CarouselComponent = ({}) => {

  
  return (
    <>
<Carousel autoPlay={true} showThumbs={false} showStatus={false} startIndex={0} interval={2000}>
   
{/* {data.map((d,index)=>( */}


<div  style={{height:'90vh'}}>
<img style={{height:'90%'}} src={image1} loading='priority' />
<img style={{height:'90%'}} src={image2} loading='priority' />
<img style={{height:'90%'}} src={image3} loading='priority' />

         
</div>


{/* ))} */}
   
    
              
                 </Carousel>
  
    
    </>
  )
}

export default CarouselComponent
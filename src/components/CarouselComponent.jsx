import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import data from "./data/SrcImage";
import image1 from "/bannerImgOne.webp";

import image2 from "/bannerImgTwo.webp";
import image3 from "/womens_fashion.jpg";

const CarouselComponent = ({}) => {
  return (
    <>
    <div style={{height:'200px'}} >
      <Carousel
        autoPlay={true}
        showThumbs={false}
        showStatus={false}
        startIndex={0}
        interval={2000}
      >
        <div >
          <img src={image1} loading="priority" />
        </div>
        <div>
          <img  src={image2} loading="priority" />
        </div>
        {/* <div>
          <img  src={image3} loading="priority" />
        </div> */}
      </Carousel>
      </div>
    </>
  );
};

export default CarouselComponent;

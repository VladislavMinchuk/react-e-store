import Slider from "react-slick";
import React, { useState } from 'react';
// Styles
import '../assets/styles/components/ProductCarousel.scss'

type CarouselProps = {
  imagesArray: string[]
};

const settings = {
  dots: true,
  autoplay: false,
  touchMove: false,
  speed: 0,
  draggable: false,
  slidesToShow: 1,
  // fade: true,
};

const ProductCarousel:React.FC<CarouselProps> = ({ imagesArray }) => {

  return (
    <div className="product-carousel">
      <Slider {...settings}>
        {imagesArray.map((imageSrc, index) => (
          <div className="main-img-wrap" key={index}>
            <img src={imageSrc} style={{ width: '100%' }} alt="image item" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductCarousel;
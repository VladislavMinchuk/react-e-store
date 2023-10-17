import Slider from "react-slick";
import React, { useState } from 'react';
// Styles
import '../assets/styles/components/CardPreviewCarousel.scss';

type CarouselProps = {
  imagesArray: string[]
};

const settings = {
  dots: false,
  autoplay: false,
  touchMove: false,
  speed: 0,
  draggable: false,
  slidesToShow: 1,
  fade: true,
  arrows: false
};

const CardPreviewCarousel:React.FC<CarouselProps> = ({ imagesArray }) => {
  const [mainNavSlider, setMainNavSlider] = useState<Slider>();
  const [activeImgIndex, setActiveImgIndex] = useState<Number>(0);

  const sliderMouseEnterHandler = (index: number) => {
    setActiveImgIndex(index);
    mainNavSlider?.slickGoTo(index);
  }
  
  const afterChangeSlickHandler = (index: number) => {
    setActiveImgIndex(index);
  }

  return (
    <div className="card-preview-carousel">
      <Slider className="card-preview-carousel__main-imgs" {...settings} ref={(slider1: Slider) => setMainNavSlider(slider1)}>
        {imagesArray.map((imageSrc, index) => (
          <div className="main-img-wrap" key={index}>
            <img src={imageSrc} style={{ width: '100%' }} alt="image item" />
          </div>
        ))}
      </Slider>
      <Slider
        className="card-preview-carousel__nav-carousel"
        infinite={true}
        asNavFor={mainNavSlider}
        slidesToShow={3}
        beforeChange={(_, newIndex) => {afterChangeSlickHandler(newIndex)}}
      >
        {imagesArray.map((imageSrc, index) => (
          <div
            key={index}
            onMouseEnter={() => sliderMouseEnterHandler(index)}
            className={ `img-nav-wrap ${activeImgIndex === index ? 'img-active' : ''}` }
          >
            <img src={imageSrc} style={{ width: 'calc(18rem/3)' }} alt="image item" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardPreviewCarousel;
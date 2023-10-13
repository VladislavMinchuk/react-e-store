import Slider from "react-slick";
import { useRef, useState } from 'react';
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

const CardPreviewCarousel = ({ imagesArray }: CarouselProps) => {
  const [nav1, setNav1] = useState<Slider>();
  const [activeImgIdx, setActiveImgIdx] = useState<Number>(0);

  const sliderItemHandler = (idx: number) => {
    console.log(idx);
    setActiveImgIdx(idx);
    nav1?.slickGoTo(idx);
  }

  return (
    <div className="card-preview-carousel">
      <Slider {...settings} ref={(slider1: Slider) => setNav1(slider1)}>
        {imagesArray.map((imageSrc, idx) => (
          <div key={idx}>
            <img src={imageSrc} style={{ width: '100%' }} alt="image item" />
          </div>
        ))}
      </Slider>
      <Slider className="card-preview-carousel__nav-carousel" asNavFor={nav1} slidesToShow={3}>
        {imagesArray.map((imageSrc, idx) => (
          <div
            key={idx}
            onMouseEnter={() => sliderItemHandler(idx)}
            className={ `img-nav-wrap ${activeImgIdx === idx ? 'img-active' : ''}` }
          >
            <img src={imageSrc} style={{ width: 'calc(18rem/3)' }} alt="image item" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardPreviewCarousel;
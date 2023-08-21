import Carousel from 'react-bootstrap/Carousel';
import ImgH_1 from '../assets/images/shoes-img-holder.jpg';
import ImgH_2 from '../assets/images/shoes-img-holder-2.jpg';
import ImgH_3 from '../assets/images/shoes-img-holder-3.jpg';

const MainCarouselHolder = () => {
  const arr = [ImgH_1, ImgH_2, ImgH_3]; // Static images

  return (
    <Carousel controls={false}>
      {arr.map((image, idx) => (
        <Carousel.Item key={idx}>
          <div className="img-bg-holder" style={{
            backgroundImage: `url(${image})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            height: '100vh'
          }}></div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default MainCarouselHolder;

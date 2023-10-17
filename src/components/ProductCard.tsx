import React, { ElementRef, useRef } from "react";
import { Card, Button } from "react-bootstrap";
import previewImg_01 from '../assets/images/adid_or_spez_01_sm.webp';
import previewImg_02 from '../assets/images/adid_or_spez_02_sm.webp';
import previewImg_03 from '../assets/images/adid_or_spez_03_sm.webp';
import previewImg_04 from '../assets/images/adid_or_spez_04_sm.webp';
import previewImg_05 from '../assets/images/adid_or_spez_05_sm.webp';
import previewImg_06 from '../assets/images/adid_or_spez_06_sm.webp';
import previewImg_07 from '../assets/images/adid_or_spez_07_sm.webp';
import previewImg_08 from '../assets/images/adid_or_spez_08_sm.jpg';
import CardPreviewCarousel from "./CardPreviewCarousel";
import '../assets/styles/components/ProductCard.scss';

export type ProductCardProps = {
  cardWidth?: string
}

const ProductCard:React.FC<ProductCardProps> = ({ cardWidth = 'auto' }) => {
  const previewImgs = [previewImg_01, previewImg_02, previewImg_03, previewImg_04, previewImg_05, previewImg_06, previewImg_07, previewImg_08]; // static imgs

  const cardRef = useRef<HTMLDivElement>(null);

  const mouseEnterHandler = () => {
    console.log(cardRef?.current?.offsetHeight);
  }

  const mouseLeaveHandler = () => {
    console.log(cardRef?.current?.offsetHeight);
  }

  return (
    <Card
      ref={cardRef}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      className="product-card my-0 mx-auto"
      style={{ width: cardWidth }}
    >
      <div className="card-img-wrap">
        {/* Favorite  icon */}
        <CardPreviewCarousel imagesArray={previewImgs}></CardPreviewCarousel>
        {/* Price info */}
      </div>
      {/* Slick should be here */}
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Colors: 3
        </Card.Text>
        <Button variant="warning">View</Button>
      </Card.Body>
    </Card>
  )
}

export default ProductCard;
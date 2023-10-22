import React, { useRef, useState } from "react";
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
import { Link } from "react-router-dom";

export type ProductCardProps = {
  cardWidth?: string
}

const ProductCard:React.FC<ProductCardProps> = ({ cardWidth = 'auto' }) => {
  const previewImgs = [previewImg_01, previewImg_02, previewImg_03, previewImg_04, previewImg_05, previewImg_06, previewImg_07, previewImg_08]; // static imgs
  const [cardHeight, setCardHeight] = useState('auto');
  const [activeCard, setActiveCard] = useState('');

  const cardRef = useRef<HTMLDivElement>(null);

  const mouseEnterHandler = () => {
    setCardHeight(`${cardRef?.current?.offsetHeight}px`);
    setActiveCard('isActive');
  }
  
  const mouseLeaveHandler = () => {
    setCardHeight('auto');
    setActiveCard('');
  }

  return (
    <Card
      ref={cardRef}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      className={`${activeCard} product-card my-0 mx-auto`}
      style={{ width: cardWidth, height: cardHeight }}
    >
      <div className="product-card__content-wrap">
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
          {/* TODO: move action buttons to the img wrapper */}
          <div className="d-flex justify-content-between">
            {/* static router ID */}
            <Link to="/product/1" className="link-light btn btn-info text-center">
              View
            </Link>
            <Button variant="success">Add to cart</Button>
          </div>
        </Card.Body>
      </div>
    </Card>
  )
}

export default ProductCard;
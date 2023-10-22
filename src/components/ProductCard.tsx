import React, { useRef, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { productImagesArr } from "../constans";
import CardPreviewCarousel from "./CardPreviewCarousel";
import '../assets/styles/components/ProductCard.scss';

export type ProductCardProps = {
  cardWidth?: string
}

const ProductCard:React.FC<ProductCardProps> = ({ cardWidth = 'auto' }) => {
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
          <CardPreviewCarousel imagesArray={productImagesArr}></CardPreviewCarousel>
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
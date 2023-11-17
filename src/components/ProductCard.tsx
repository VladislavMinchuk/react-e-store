import React, { useRef, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import CardPreviewCarousel from "./CardPreviewCarousel";
import { IProductItem } from "../interfaces";
import '../assets/styles/components/ProductCard.scss';

export type ProductCardProps = IProductItem & {
  cardWidth?: string,
  addToCartItem?: (productId: number) => void
};

const ProductCard:React.FC<ProductCardProps> = ({
  cardWidth = 'auto',
  addToCartItem,
  id,
  title,
  price,
  images,
  shoesSize,
  description
}) => {
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
          <CardPreviewCarousel imagesArray={images}></CardPreviewCarousel>
          {/* Price info */}
        </div>
        <Card.Body>
          <Card.Title>{ title }</Card.Title>
          <Card.Text>
            Colors: 3
          </Card.Text>
          {/* TODO: move action buttons to the img wrapper */}
          <div className="d-flex justify-content-between">
            <Link to={`/product/${id}`} className="link-light btn btn-primary text-center">
              View
            </Link>
            <Button
              variant="secondary"
              className="text-white"
              onClick={() => addToCartItem && addToCartItem(id)}
            >Add to cart</Button>
          </div>
        </Card.Body>
      </div>
    </Card>
  )
}

export default ProductCard;
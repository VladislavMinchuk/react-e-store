import React, { useRef, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import CardPreviewCarousel from "./CardPreviewCarousel";
import { IProductItem } from "../interfaces";
import "../assets/styles/components/ProductCard.scss";
import ColorList from "./ColorList";

export type ProductCardProps = IProductItem & {
  cardWidth?: string;
  alreadyInCart?: boolean,
  addToCartItem?: (productId: number) => void;
};

const ProductCard: React.FC<ProductCardProps> = ({
  cardWidth = "auto",
  addToCartItem,
  id,
  title,
  price,
  images,
  alreadyInCart,
  colors,
  shoesSize,
  description,
}) => {
  const [cardHeight, setCardHeight] = useState("100%");
  const [activeCard, setActiveCard] = useState("");

  const cardRef = useRef<HTMLDivElement>(null);

  const mouseEnterHandler = () => {
    setCardHeight(`${cardRef?.current?.offsetHeight}px`);
    setActiveCard("isActive");
  };

  const mouseLeaveHandler = () => {
    setCardHeight("100%");
    setActiveCard("");
  };

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
          {/* Buttons wrapper */}
          <div className="product-card__btn-wrap d-flex justify-content-between px-3 pt-2">
            <Link to={`/product/${id}`} className="link-light btn btn-primary text-center">
              View
            </Link>
            {
              alreadyInCart ?
                <Link to={'/cart'} className="btn btn-warning text-center">
                  Order
                </Link>
                :
                <Button variant="secondary" className="text-white" onClick={() => addToCartItem && addToCartItem(id)}>
                  Add to cart
                </Button>
            }
          </div>
        </div>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text className="mb-1">
            <ColorList maxItemsVisible={3} colors={colors}></ColorList>
          </Card.Text>
          <Card.Text> Price: <strong>{price}$</strong> </Card.Text>
        </Card.Body>
      </div>
    </Card>
  );
};

export default ProductCard;
// ? чому ми передаємо id в addToCartItem, якщо экшен addCartItem чекаэ на обжект?
//

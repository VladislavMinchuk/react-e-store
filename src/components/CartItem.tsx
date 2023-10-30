import React from "react";
import InputCounter from "./InputCounter";
import '../assets/styles/components/CartItem.scss'

export type CartItemProps = {
  id: number,
  title: string,
  productImage: string, // url
  price: number,
  quantity: number | string,
  size: string,
  removeHandler: (productId: number) => void
};

const CartItem:React.FC<CartItemProps> = ({
  id,
  title,
  productImage,
  price,
  quantity,
  size,
  removeHandler
}) => {
  const quantityHandler = (quantityValue: string | number): void => {};


  return (
    <div className="cart-item d-md-flex align-items-center p-3">
      <div className="cart-item__img-wrap text-center me-md-3">
        <img src={productImage} alt="product image" />
      </div>
      <div className="cart-item__info">
        <h4>{title}</h4>
        <p className="mb-1"><strong>Price:</strong> {price} $</p>
        <p><strong>Size:</strong> {size} $</p>
        <InputCounter defaultValue={quantity} inputChangeHandler={quantityHandler}/>
      </div>
      <button
        className="cart-item__remove-btn"
        aria-label="remove cart item"
        onClick={() => {removeHandler(id)}}
      ></button>
    </div>
  );
};

export default CartItem;

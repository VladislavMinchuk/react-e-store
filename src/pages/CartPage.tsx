import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import CartItem, { IRemoveHandlerArgs, IUpdateQuantityArgs } from "../components/CartItem";
import { productImagesArr } from "../constans";

// Statis list TODO: move to state, cretate interface for the list item
const cartList = [
  {
    id: 1,
    title: 'Origin Shoes star',
    productImage: productImagesArr[0],
    price: 120,
    size: '39',
    quantity: 2,
  },
  {
    id: 2,
    title: 'Origin Shoes star',
    productImage: productImagesArr[1],
    price: 80,
    size: '36',
    quantity: 1,
  }
];

const CartPage:React.FC = () => {
  const removeCartItem = ({ productId }: IRemoveHandlerArgs): void => {
    console.log(productId);
  };

  const updateCartItemQuantity = (updatedItem: IUpdateQuantityArgs): void => {
    console.log(updatedItem);
  }

  return (
    <section className="cart-section py-5">
      <Container>
        <header className="d-flex align-items-center mb-3 mb-lg-5">
          <h2 className="mb-0 me-auto">Your cart</h2>
        </header>
        <Row>
          <Col xs={12} lg={2} xl={3} className="order-lg-2">
            <Button variant="info" className="cart-section__order-btn w-100 mb-3">Continue order</Button>
            <p><strong>Total:</strong> should count total amount $</p>
          </Col>
          <Col xs={12} lg={10} xl={9} className="order-lg-1">
            <ul>
              {cartList.map((productItem) => {
                return (
                  <li key={productItem.id} className="mb-2">
                    <CartItem
                      {...productItem}
                      removeHandler={removeCartItem}
                      updateQuantity={updateCartItemQuantity}
                    />
                  </li>
                );
              })}
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default CartPage;
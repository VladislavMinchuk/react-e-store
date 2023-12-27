import React, { useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import CartItem, { IRemoveHandlerArgs, IUpdateQuantityArgs } from "../components/CartItem";
import {  useAppDispatch, useTypedSelector } from "../store";
import { removeCartItem as removeCartItemAction, updateItemQuantity } from "../store/actions/cart.action";
import { IProductCartItem } from "../interfaces";
import { calculateTotalPayment } from "../store/slices/cart.slice";
import Loader from "../components/Loader";

// Statis list TODO: move to state, cretate interface for the list item

// const cartList = [
//   {
//     id: 1,
//     title: "Origin Shoes star",
//     productImage: productImagesArr[0],
//     price: 120,
//     size: "39",
//     quantity: 2,
//   },
//   {
//     id: 2,
//     title: "Origin Shoes star",
//     productImage: productImagesArr[1],
//     price: 80,
//     size: "36",
//     quantity: 1,
//   },
// ];
// const cartEntity: ICartEntity = {
//   cartId: 1,
//   products: cartList,
//   payment: {
//     total: 0,
//   },
// };
const CartPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const userCart = useTypedSelector((state) => state.cartSlice.userCart);
  const isLoading = useTypedSelector((state) => state.global.isLoading);

  const removeCartItem = ({ productId }: IRemoveHandlerArgs): void => {
    dispatch(removeCartItemAction(productId));
  };

  const updateCartItemQuantity = (updatedItem: IUpdateQuantityArgs): void => {
    dispatch(updateItemQuantity(updatedItem));
  };

  useEffect(() => {
    dispatch(calculateTotalPayment());
  }, [userCart]);

  return (
    <section className="cart-section py-5">
      <Container>
        <header className="d-flex align-items-center mb-3 mb-lg-5">
          <h2 className="mb-0 me-auto">Your cart</h2>
        </header>
        <Row>
          <Col xs={12} lg={2} xl={3} className="order-lg-2">
            <Button variant="info" className="cart-section__order-btn w-100 mb-3">
              Continue order
            </Button>
            <p>
              <strong>Total:</strong> {userCart?.payment.total} ${isLoading && <Loader positionValue="static" />}
            </p>
          </Col>
          <Col xs={12} lg={10} xl={9} className="order-lg-1">
            <ul>
              {userCart?.products.map((productItem: IProductCartItem) => {
                return (
                  <li key={productItem.id} className="mb-2">
                    <CartItem {...productItem} removeHandler={removeCartItem} updateQuantity={updateCartItemQuantity} />
                  </li>
                );
              })}
            </ul>
            {!userCart?.products.length && <p>Cart is empty...</p>}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CartPage;

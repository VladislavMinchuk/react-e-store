import React, { useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import CartItem, { IRemoveHandlerArgs, IUpdateQuantityArgs } from "../components/CartItem";
import {  useAppDispatch, useTypedSelector } from "../store";
import { removeCartItem as removeCartItemAction, updateItemQuantity, getUserCart } from "../store/actions/cart.action";
import { IProductCartItem } from "../interfaces";
import { updateTotalPayment } from "../store/slices/cart.slice";
import Loader from "../components/Loader";

const CartPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const userCart = useTypedSelector((state) => state.cartSlice.userCart);
  const userCartError = useTypedSelector((state) => state.cartSlice.error);
  const isLoading = useTypedSelector((state) => state.global.isLoading);

  const removeCartItem = ({ productId }: IRemoveHandlerArgs): void => {
    dispatch(removeCartItemAction(productId));
  };

  const updateCartItemQuantity = (updatedItem: IUpdateQuantityArgs): void => {
    dispatch(updateItemQuantity(updatedItem));
  };

  useEffect(() => {
    dispatch(updateTotalPayment());
  }, [userCart]);

  useEffect(() => { // TODO: move to <App> ?
    dispatch(getUserCart(1))    
  }, []);

  // TODO: create separete component or impl toast lib
  if (userCartError) return (<p>
      'Something went wrong ...'
      {JSON.stringify(userCartError)}
  </p>)

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
            <div>
              <strong>Total:</strong> {userCart?.payment.total} ${isLoading && <Loader positionValue="static" />}
            </div>
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

import React, { useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Loader from "../components/Loader";
import CartItem, { IRemoveHandlerArgs, IUpdateQuantityArgs } from "../components/CartItem";
import { IProductCartItem } from "../interfaces";
import {  useAppDispatch, useTypedSelector } from "../store";
import { getProductList, getTotalPayment, updateTotalPayment } from "../store/slices/cart.slice";
import { removeCartItem as removeCartItemAction, updateItemQuantity, getUserCart } from "../store/actions/cart.action";

const CartPage: React.FC = () => {
  const dispatch      = useAppDispatch();
  const totalPayment  = useTypedSelector(({ cartSlice }) => getTotalPayment(cartSlice));
  const productList   = useTypedSelector(({ cartSlice }) => getProductList(cartSlice));
  const userCartError = useTypedSelector(({ cartSlice }) => cartSlice.error);
  const isLoading     = useTypedSelector(({ global }) => global.isLoading);

  const removeCartItem = ({ productId }: IRemoveHandlerArgs): void => {
    dispatch(removeCartItemAction(productId));
  };

  const updateCartItemQuantity = (updatedItem: IUpdateQuantityArgs): void => {
    dispatch(updateItemQuantity(updatedItem));
  };

  useEffect(() => {
    dispatch(updateTotalPayment());
  }, [productList]);

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
              <strong>Total:</strong> {totalPayment} ${isLoading && <Loader positionValue="static" />}
            </div>
          </Col>
          <Col xs={12} lg={10} xl={9} className="order-lg-1">
            <ul>
              {productList?.map((productItem: IProductCartItem) => {
                return (
                  <li key={productItem.id} className="mb-2">
                    <CartItem {...productItem} removeHandler={removeCartItem} updateQuantity={updateCartItemQuantity} />
                  </li>
                );
              })}
            </ul>
            {!productList?.length && <p>Cart is empty...</p>}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CartPage;

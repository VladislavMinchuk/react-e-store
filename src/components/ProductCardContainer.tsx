import { FC } from "react";
import ProductCard from "../components/ProductCard";
import { IProductCartItem, IProductItem } from "../interfaces";
import { RootState, useAppDispatch, useTypedSelector } from "../store";
import { addCartItem } from "../store/actions/cart.action";
import { selectProductCartById } from "../store/slices/cart.slice";

export type ProductContainerProps = {
  productItem: IProductItem;
};

const ProductContainer: FC<ProductContainerProps> = ({ productItem }) => {
  const dispatch = useAppDispatch();
  const productInCart = useTypedSelector(({cartSlice}: RootState) => selectProductCartById(cartSlice, productItem.id))
  // TODO: component re-renders several times (back to this fix)
  const addProductToCart = (productId: number) => {
    const { price, title } = productItem;
    const newProduct: IProductCartItem = {
      id: productId,
      price,
      title,
      size: productItem.shoesSize[0].size,
      productImage: productItem.images[0],
      quantity: 1,
    };
    dispatch(addCartItem(newProduct));
  };

  return <ProductCard {...productItem } alreadyInCart={!!productInCart} addToCartItem={addProductToCart}></ProductCard>;
};

export default ProductContainer;

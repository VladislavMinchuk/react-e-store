import { FC } from "react";
import ProductCard from "../components/ProductCard";
import { IProductCartItem, IProductItem } from "../interfaces";
import { useAppDispatch } from "../store";
import { addCartItem } from "../store/actions/cart.action";

export type ProductContainerProps = {
  productItem: IProductItem;
};

const ProductContainer: FC<ProductContainerProps> = ({ productItem }) => {
  const dispatch = useAppDispatch();
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

  return <ProductCard {...productItem} addToCartItem={addProductToCart}></ProductCard>;
};

export default ProductContainer;

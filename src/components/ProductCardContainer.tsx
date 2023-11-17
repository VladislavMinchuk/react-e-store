import { FC } from "react";
import ProductCard from "../components/ProductCard";
import { IProductItem } from "../interfaces";

export type ProductContainerProps = {
  productItem: IProductItem
};

const ProductContainer:FC<ProductContainerProps> = ({ productItem }) => {
  const addProductToCart = (productId: number) => {
    console.log(productId);
  }

  return (
    <ProductCard {...productItem} addToCartItem={addProductToCart}></ProductCard>
  );
};

export default ProductContainer;
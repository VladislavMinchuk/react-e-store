import { productImagesArr } from "../constans";
import { ICartEntity, IProductItem } from "../interfaces";

export const singleProduct: IProductItem = {
  id: 1,
  title: 'Shoes product title',
  price: 120,
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, facere! At, magni eaque? Nobis.",
  images: productImagesArr,
  shoesSize: [
    {size: '36', id: 1},
    {size: '37', id: 2},
    {size: '38', id: 3},
    {size: '39', id: 4},
  ]
};

export const staticProductList: IProductItem[] = [
  singleProduct,
  { ...singleProduct, id: 2 },
  { ...singleProduct, id: 3 },
  { ...singleProduct, id: 4 },
  { ...singleProduct, id: 5 },
  { ...singleProduct, id: 6 },
  { ...singleProduct, id: 7 },
];

export const staticProductCartItem = {
  id: 1,
  title: 'Org snnnn',
  productImage: productImagesArr[1],
  price: 40,
  quantity: 1,
  size: '36'
};

export const staticCart: ICartEntity = {
  cartId: 1,
  products: [staticProductCartItem, staticProductCartItem],
  payment: {
    total: 120
  }
}
import { productImagesArr } from "../constans";
import { ICartEntity, IProductItem } from "../interfaces";

const getRandomPrice = () => {
  const price = Math.floor(Math.random() * 101);
  return price < 1 ? 5 : price;
};

export const staticColors = [
  { id: 1, title: 'red', colorCode: '#FF0000' },
  { id: 2, title: 'black', colorCode: '#000000' },
  { id: 3, title: 'orange', colorCode: '#FFA500' },
  { id: 4, title: 'white', colorCode: '#FFFFFF' },
];

export const singleProduct: IProductItem = {
  id: 1,
  title: "Shoes product title",
  price: 25,
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, facere! At, magni eaque? Nobis.",
  images: productImagesArr,
  shoesSize: [
    { size: "36", id: 1 },
    { size: "37", id: 2 },
    { size: "38", id: 3 },
    { size: "39", id: 4 },
  ],
  colors: staticColors
};

export const staticProductList: IProductItem[] = [
  singleProduct,
  {
    ...singleProduct,
    id: 2,
    price: getRandomPrice(),
    shoesSize: [{ size: "36", id: 1 }],
    colors: []
  },
  { ...singleProduct, id: 3, price: getRandomPrice(), shoesSize: [{ size: "37", id: 1 }], colors: [staticColors[1]] },
  { ...singleProduct, id: 4, price: getRandomPrice(), shoesSize: [{ size: "38", id: 2 }], colors: [staticColors[1], staticColors[0]] },
  { ...singleProduct, id: 5, price: getRandomPrice(), shoesSize: [{ size: "36", id: 3 }], colors: [staticColors[2]] },
  { ...singleProduct, id: 6, price: getRandomPrice(), shoesSize: [{ size: "37", id: 3 }], colors: [] },
  { ...singleProduct, id: 7, price: getRandomPrice(), shoesSize: [{ size: "39", id: 3 }] },
];

export const staticProductCartItem = {
  id: 1,
  title: "Org snnnn",
  productImage: productImagesArr[1],
  price: 40,
  quantity: 1,
  size: "40",
};
export const staticProductCartItem1 = {
  id: 2,
  title: "Org snnnn",
  productImage: productImagesArr[1],
  price: 35,
  quantity: 1,
  size: "36",
};
export const staticCart: ICartEntity = {
  cartId: 99,
  products: [],
  payment: {
    total: 0,
  },
};

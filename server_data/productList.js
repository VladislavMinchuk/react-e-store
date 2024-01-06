import { singleProduct } from "./singleProduct.js";


const getRandomPrice = () => {
    const price = Math.floor(Math.random() * 101);
    return price < 1 ? 5 : price;
};
// люта хуйня 
// не виходить нормально організувати данні 
// и зображення не читае
export const productList = [
    { ...singleProduct },
    {
        ...singleProduct,
        id: 2,
        price: getRandomPrice(),
        shoesSize: [{ size: "36", id: 1 }],
    },

];
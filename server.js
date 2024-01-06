import { writeFileSync } from 'fs';
// 
import { singleProduct } from './server_data/singleProduct.js';
import {productList } from './server_data/productList.js';






const combineData = {
    productList,
    singleProduct,
}



writeFileSync('db.json', JSON.stringify(combineData, null, 2));
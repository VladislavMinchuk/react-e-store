import { writeFileSync } from 'fs';
// 
import { singleProduct } from './server_data/singleProduct.js';





const combineData = {
    singleProduct
}



writeFileSync('db.json', JSON.stringify(combineData, null, 2));
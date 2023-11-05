import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IProductItem, IPaginationRequest } from '../../interfaces';

const initialState: {
  singleProduct: IProductItem | null
  productList: IProductItem[] | [],
} = {
  singleProduct: null,
  productList: [],
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getProdcutById: (state, action: PayloadAction<number>) => {
      // GET request
    },
    getProductList: (state, action: PayloadAction<IPaginationRequest>) => {
      // GET request
    },
  }
});
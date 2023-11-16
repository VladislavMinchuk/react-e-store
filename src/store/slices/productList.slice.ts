import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IProductItem, IPaginationRequest } from '../../interfaces';
import { getProductList } from '../actions/productList.action';

interface IInitialState {
  productList: IProductItem[] | [],
  error: any
};

const initialState: IInitialState = {
  productList: [],
  error: null
};

export const defaultRequestParams: IPaginationRequest = {
  page: 1,
  perPage: 10
};

export const productListSlice = createSlice({
  name: 'productList',
  initialState,
  reducers: {},
  // Temp solution with extraReducers and the fake api requests
  extraReducers: (builder) => {
    builder.addCase(getProductList.fulfilled, (state, action: PayloadAction<IProductItem[] | []>) => {
      // handle loading state as needed
      state.productList = action.payload;
    });
    builder.addCase(getProductList.rejected, (state, action) => {
      // handle loading state as needed
      state.error = action.error.message;
    });
  }
});

export default productListSlice.reducer;

import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IProductItem } from '../../interfaces';
import { getProductByID } from '../actions/product.action';

interface IInitialState {
  singleProduct: IProductItem | null
  error: any,
};

const initialState: IInitialState = {
  singleProduct: null,
  error: null,
};

export const productDetailsSlice = createSlice({
  name: 'productDetails',
  initialState,
  reducers: {},
  // Temp solution with extraReducers and the fake api requests
  extraReducers: (builder) => {
    builder.addCase(getProductByID.fulfilled, (state, action: PayloadAction<IProductItem | null>) => {
      // handle loading state as needed
      state.singleProduct = action.payload;
    });
    builder.addCase(getProductByID.rejected, (state, action) => {
      // handle loading state as needed
      state.error = action.error.message;
    });
  }
});

export default productDetailsSlice.reducer;

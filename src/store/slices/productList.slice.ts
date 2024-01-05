import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProductItem, IPaginationRequest } from "../../interfaces";
import { getProductList } from "../actions/productList.action";

export interface IProductListSlice {
  productList: IProductItem[] | [];
  error: any;
}

export const defaultRequestParams: IPaginationRequest = {
  page: 1,
  perPage: 10,
};

// -------------------------------------------------------------

const initialState: IProductListSlice = {
  productList: [],
  error: null,
};

export const productListSlice = createSlice({
  name: "productList",
  initialState,
  reducers: {},
  // Temp solution with extraReducers and the fake api requests
  extraReducers: (builder) => {
    builder.addCase(getProductList.fulfilled, (state, action: PayloadAction<IProductItem[] | []>) => {
      if (state.productList.length) return state;

      // handle loading state as needed
      state.productList = action.payload;
    });
    builder.addCase(getProductList.rejected, (state, action) => {
      // handle loading state as needed
      state.error = action.error.message;
    });
  },
});
export const {} = productListSlice.actions;
export default productListSlice.reducer;

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import productDetails, { IProductDetailsSlice } from "./slices/product.slice";
import productList, { IProductListSlice } from "./slices/productList.slice";
import global, { IGlobalSlice } from "./slices/global.slice";
import cartSlice, { ICartSlice } from "./slices/cart.slice";
import { productDetailsApi } from "../api"; // Doesn't work without API

export interface RootState {
  productDetails: IProductDetailsSlice;
  productList: IProductListSlice;
  global: IGlobalSlice;
  cartSlice: ICartSlice;
  [productDetailsApi.reducerPath]: ReturnType<typeof productDetailsApi.reducer>;
}

const store = configureStore({
  reducer: combineReducers({
    productDetails,
    productList,
    global,
    cartSlice,
    [productDetailsApi.reducerPath]: productDetailsApi.reducer, // Doesn't work without API
  }),
  middleware: (getDefM) => getDefM().concat(productDetailsApi.middleware),
});

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;

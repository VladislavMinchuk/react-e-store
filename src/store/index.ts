import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import productDetails from './slices/product.slice';
import productList from './slices/productList.slice';
import global from './slices/global.slice';
import cartSlice from "./slices/cart.slice";
import { productDetailsApi } from '../api'; // Doesn't work without API

const store = configureStore({
  reducer: combineReducers({
    productDetails,
    productList,
    global,
    cartSlice,
    [productDetailsApi.reducerPath]: productDetailsApi.reducer // Doesn't work without API
  }),
  middleware: (getDefM) => getDefM().concat(productDetailsApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
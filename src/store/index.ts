import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import productDetails from './slices/product.slice';
import productList from './slices/productList.slice';
import global from './slices/global.slice';

const store = configureStore({
  reducer: combineReducers({
    productDetails,
    productList,
    global
  })
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
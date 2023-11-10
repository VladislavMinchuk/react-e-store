import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from './slices/count.slice';
import productDetailsReducer from './slices/product.slice';
import productListReducer from './slices/productList.slice';
import globalReducer from './slices/global.slice';
import { useDispatch } from "react-redux";

const store = configureStore({
  reducer: combineReducers({
    counter: counterReducer,
    productDetails: productDetailsReducer,
    productList: productListReducer,
    global: globalReducer
  })
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
import { createAsyncThunk } from "@reduxjs/toolkit";
import { staticCart } from "../../mock-data";
import { setGloablLoading } from "../slices/global.slice";
import { IProductCartItem } from "../../interfaces";

export const getUserCart = createAsyncThunk(
  'getUserCart',
  async (cartId: number, { dispatch }) => {
    // GET request
    return new Promise((resolve: (value: any) => void, reject) => {
      dispatch(setGloablLoading(true)); // Show page loader
      
      setTimeout(() => {
        dispatch(setGloablLoading(false)); // Hide page loader
        resolve(staticCart);
      }, 3000);
    });
  }
);

export const addCartItem = createAsyncThunk(
  'addCartItem',
  async (cartItem: IProductCartItem, { dispatch }) => {
    // GET request
    return new Promise((resolve: (value: any) => void, reject) => {
      dispatch(setGloablLoading(true)); // Show page loader
      
      setTimeout(() => {
        dispatch(setGloablLoading(false)); // Hide page loader
        resolve(cartItem); // Should return updated cart
      }, 3000);
    });
  }
);

export const removeCartItem = createAsyncThunk(
  'removeCartItem',
  async (productId: number, { dispatch }) => {
    // GET request
    return new Promise((resolve: (value: any) => void, reject) => {
      dispatch(setGloablLoading(true)); // Show page loader
      
      setTimeout(() => {
        dispatch(setGloablLoading(false)); // Hide page loader
        resolve(productId); // Should return updated cart
      }, 3000);
    });
  }
);

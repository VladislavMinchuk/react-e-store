import {  createAsyncThunk } from "@reduxjs/toolkit";
import { setGloablLoading } from "../slices/global.slice";
import { ICartEntity, IProductCartItem } from "../../interfaces";
import { IUpdateQuantityArgs } from "../../components/CartItem";

export const getUserCart = createAsyncThunk("getUserCart", async (userCart: ICartEntity, { dispatch }) => {
  // GET request
  return new Promise((resolve: (value: any) => void, reject) => {
    dispatch(setGloablLoading(true)); // Show page loader
    setTimeout(() => {
      dispatch(setGloablLoading(false)); // Hide page loader
      resolve(userCart);
    }, 500);
  });
});

export const addCartItem = createAsyncThunk("addCartItem", async (cartItem: IProductCartItem, { dispatch }) => {
  // GET request
  return new Promise((resolve: (value: any) => void, reject) => {
    dispatch(setGloablLoading(true)); // Show page loader

    setTimeout(() => {
      dispatch(setGloablLoading(false)); // Hide page loader
      resolve(cartItem); // Should return updated cart
    }, 500);
  });
});

export const removeCartItem = createAsyncThunk("removeCartItem", async (productId: number, { dispatch }) => {
  // GET request
  return new Promise((resolve: (value: any) => void, reject) => {
    dispatch(setGloablLoading(true)); // Show page loader

    setTimeout(() => {
      dispatch(setGloablLoading(false)); // Hide page loader
      resolve(productId); // Should return updated cart
    }, 500);
  });
});
export const updateItemQuantity = createAsyncThunk(
  "updateItemQuantity",
  async (updatedItem: IUpdateQuantityArgs, { dispatch }) => {
    // GET request
    return new Promise((resolve: (value: any) => void, reject) => {
      dispatch(setGloablLoading(true));

      setTimeout(() => {
        dispatch(setGloablLoading(false));
        resolve(updatedItem);
      }, 500);
    });
  }
);


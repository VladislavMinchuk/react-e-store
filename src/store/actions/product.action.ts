import { createAsyncThunk } from "@reduxjs/toolkit";
import { singleProduct } from "../../mock-data";
import { setGloablLoading } from "../slices/global.slice";

export const getProductByID = createAsyncThunk(
  'getProductByID',
  async (userId: number, { dispatch }) => {
    // GET request
    // const response = await productApi.fetchById(userId);
    // return response.data
    return new Promise((resolve: (value: any) => void, reject) => {
      dispatch(setGloablLoading(true)); // Show page loader
      
      setTimeout(() => {
        dispatch(setGloablLoading(false)); // Hide page loader
        resolve(singleProduct);
      }, 3000);
    });
  }
);

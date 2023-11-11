import { createAsyncThunk } from "@reduxjs/toolkit";
import { IPaginationRequest } from "../../interfaces";
import { staticProductList } from "../../mock-data";
import { setGloablLoading } from "../slices/global.slice";

export const getProductList = createAsyncThunk(
  'getProductList',
  async (listParams: IPaginationRequest, { dispatch }) => {
    // GET request
    // const response = await productApi.fetchById(userId);
    // return response.data
    return new Promise((resolve: (value: any) => void, reject) => {
      dispatch(setGloablLoading(true)); // Show page loader

      setTimeout(() => {
        dispatch(setGloablLoading(false)); // Hide page loader
        resolve(staticProductList);
      }, 3000);
    });
  }
);
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IProductCartItem, ICartEntity } from '../../interfaces';

const initialState: {
  userCart: ICartEntity | null,
} = {
  userCart: null,
};

export const productSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Adding product entity (IProductCartItem)
    addCartItem: (state, action: PayloadAction<IProductCartItem>) => {
      // POST request
    },
    // Should be removing by ID
    removeCartItem: (state, action: PayloadAction<number>) => {
      // DELETE request
    },
    getCart: (state, action: PayloadAction<number>) => {
      // GET request
    }
  }
});
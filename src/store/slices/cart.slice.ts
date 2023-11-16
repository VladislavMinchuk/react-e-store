import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IProductCartItem, ICartEntity } from '../../interfaces';
import { addCartItem, getUserCart, removeCartItem } from '../actions/cart.action';

const initialState: {
  userCart: ICartEntity | null,
  error: any,
} = {
  userCart: null,
  error: null,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  // Temp solution with extraReducers and the fake api requests
  extraReducers: (builder) => {
    builder.addCase(getUserCart.fulfilled, (state, action: PayloadAction<ICartEntity | null>) => {
      state.userCart = action.payload;
    });
    // Add new ProductCartItem
    builder.addCase(addCartItem.fulfilled, (state, action: PayloadAction<IProductCartItem>) => {
      const { payload: newCartItem } = action;
      const hasItem = state.userCart?.products.find((p: IProductCartItem) => p.id === newCartItem.id);
      if (hasItem) return state; // Return the same state if item already exist
      // Add new item
      state.userCart?.products.push(action.payload);
    });
    builder.addCase(removeCartItem.fulfilled, (state, action: PayloadAction<number>) => {
      const { payload: productId } = action;
      if (!state.userCart?.products) return state;
      state.userCart.products = state.userCart?.products.filter(p => p.id !== productId);
    });
  }
});

export default cartSlice.reducer;
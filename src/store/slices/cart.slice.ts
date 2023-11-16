import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IProductCartItem, ICartEntity } from '../../interfaces';
import { getUserCart } from '../actions/cart.action';

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
  extraReducers: (builder) => {
    builder.addCase(getUserCart.fulfilled, (state, action: PayloadAction<ICartEntity | null>) => {
      // handle loading state as needed
      state.userCart = action.payload;
    });
    builder.addCase(getUserCart.rejected, (state, action) => {
      // handle loading state as needed
      state.error = action.error.message;
    });
  }
});

export default cartSlice.reducer;
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProductCartItem, ICartEntity } from "../../interfaces";
import { addCartItem, getUserCart, removeCartItem, updateItemQuantity } from "../actions/cart.action";
import { IUpdateQuantityArgs } from "../../components/CartItem";

export interface ICartSlice {
  userCart: ICartEntity | null;
  error: unknown | null;
}

const initialState: ICartSlice = {
  userCart: null,
  error: null,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    updateTotalPayment: (state) => {
      if (state.userCart) {
        state.userCart.payment.total = (state.userCart?.products || []).reduce(
          (acc, cur) => acc + cur.price * Number(cur.quantity),
          0
        );
      }
    },
    // SOMNITELNO but OKEY???
    getSumOfCartItems: (state, action) => {
      const itemPrice = action.payload;
      return state.userCart?.products.reduce((acc, cur) => acc + cur.price, itemPrice);
    },
  },

  // Temp solution with extraReducers and the fake api requests
  extraReducers: (builder) => {
    builder.addCase(getUserCart.fulfilled, (state, action: PayloadAction<ICartEntity | null>) => {
      if (state.userCart) return;
      state.userCart = action.payload;
    });
    //Catch errors
    builder.addCase(getUserCart.rejected, (state, action: PayloadAction<unknown>) => {
      state.error = action.payload;
    });
    // Add new ProductCartItem
    builder.addCase(addCartItem.fulfilled, (state, action: PayloadAction<IProductCartItem>) => {
      const { payload: newCartItem } = action;
      const hasItem = state.userCart?.products.find((p: IProductCartItem) => p.id === newCartItem.id);
      if (hasItem) return state; // Return the same state if item already exist
      // Add new item

      const sumOfProducts = cartSlice.caseReducers.getSumOfCartItems(state, { payload: newCartItem.price, type: "" });
      const mockCart = {
        cartId: Date.now(),
        products: state.userCart ? [...state.userCart.products, newCartItem] : [newCartItem],
        payment: { total: sumOfProducts },
      };
      state.userCart = mockCart;
    });
    builder.addCase(removeCartItem.fulfilled, (state, action: PayloadAction<number>) => {
      if (!state.userCart?.products) return;
      const { payload: productId } = action;
      state.userCart.products = state.userCart?.products.filter((p) => p.id !== productId);
    });
    builder.addCase(updateItemQuantity.fulfilled, (state, action: PayloadAction<IUpdateQuantityArgs>) => {
      if (!state.userCart?.products) return;
      const { payload: updatedItem } = action;
      const { id, quantity } = updatedItem;
      const currProduct = state.userCart.products.find((p) => p.id === id);
      if (currProduct) currProduct.quantity = quantity;
    });
  },
});
export const { updateTotalPayment } = cartSlice.actions;
export default cartSlice.reducer;

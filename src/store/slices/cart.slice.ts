import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProductCartItem, ICartEntity } from "../../interfaces";
import { addCartItem, getUserCart, removeCartItem, updateItemQuantity } from "../actions/cart.action";
import { IUpdateQuantityArgs } from "../../components/CartItem";

export interface ICartSlice {
  userCart: ICartEntity | null;
  error: unknown | null;
}
// REMINDER: create adapter for products list
const initialState: ICartSlice = {
  userCart: {
    cartId: 9,
    products: [],
    payment: { total: 0 }
  },
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
    builder.addCase(addCartItem.fulfilled, ({ userCart }, action: PayloadAction<IProductCartItem>) => {
      const { payload: newCartItem } = action;
      userCart?.products.push(newCartItem);
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
export const selectProductCartById = ({ userCart }: ICartSlice, id: number) =>
  userCart?.products.find(p => p.id === id);

export default cartSlice.reducer;

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProductCartItem, ICartEntity } from "../../interfaces";
import { addCartItem, getUserCart, removeCartItem, updateItemQuantity } from "../actions/cart.action";
import { IUpdateQuantityArgs } from "../../components/CartItem";

export interface ICartSlice {
  userCart: ICartEntity | null;
  error: unknown | null;
}

const getProductById = ({ userCart }: ICartSlice, id: number) =>
  userCart?.products.find(p => p.id === id);

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
    updateTotalPayment: ({ userCart }) => {
      if (userCart) {
        userCart.payment.total = (userCart?.products || []).reduce(
          (acc, cur) => acc + cur.price * Number(cur.quantity),
          0
        );
      }
    },
  },

  // Temp solution with extraReducers and the fake api requests
  extraReducers: (builder) => {
    builder.addCase(getUserCart.fulfilled, ({ userCart }, action: PayloadAction<ICartEntity | null>) => {
      if (action.payload) userCart = action.payload;
    });
    // Catch errors
    builder.addCase(getUserCart.rejected, ({ error }, action: PayloadAction<unknown>) => {
      error = action.payload;
    });
    /**
     I have removed 'mockCart' and 'if (!state.userCart?.products)' condition
     becouse set default 'userCart' obj based on ICartEntity
     alse we should take 'userCart' obj from api on the CartPage and some of the root components
     (every time when user opens the app)
     * */
    // Add new ProductCartItem
    builder.addCase(addCartItem.fulfilled, (state, action: PayloadAction<IProductCartItem>) => {
      const { payload: newCartItem } = action;
      const hasItem = getProductById(state, newCartItem.id);
      
      if (hasItem) return state; // Return the same state if item already exist

      state.userCart?.products.push(newCartItem);
    });
    builder.addCase(removeCartItem.fulfilled, ({ userCart }, { payload: productId } : PayloadAction<number>) => {
      if (!userCart?.products) return;
      userCart.products = userCart?.products.filter((p) => p.id !== productId);
    });
    builder.addCase(updateItemQuantity.fulfilled, (state, { payload }: PayloadAction<IUpdateQuantityArgs>) => {
      const { id, quantity } = payload;
      const currProduct = getProductById(state, id);
      if (currProduct) currProduct.quantity = quantity;
    });
  },
});

export const { updateTotalPayment } = cartSlice.actions;

export const getProductCartById = getProductById;
export const getTotalPayment = ({ userCart }: ICartSlice) => userCart?.payment.total;
export const getProductList = ({ userCart }: ICartSlice) => userCart?.products;

export default cartSlice.reducer;

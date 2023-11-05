import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState = { count: 0 };

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addOne: (state) => {
      state.count += 1;
    },
    addSome: (state, action: PayloadAction<number>) => {
      // state.count.firstName += action.payload.firstName;
    },
  },
});

export const { addOne, addSome } = counterSlice.actions;

export default counterSlice.reducer;
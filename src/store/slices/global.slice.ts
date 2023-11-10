import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IGlobalSliceInitialState {
  isLoading: boolean;
}

export const initialState: IGlobalSliceInitialState = {
  isLoading: false,
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setGloablLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setGloablLoading } = globalSlice.actions;

export default globalSlice.reducer;
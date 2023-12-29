import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IGlobalSlice {
  isLoading: boolean;
}

export const initialState: IGlobalSlice = {
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
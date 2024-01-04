import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IGlobalSlice {
  isLoading: boolean;
  isFirstRender: boolean;
}

export const initialState: IGlobalSlice = {
  isLoading: false,
  isFirstRender: true,
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setGloablLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setRenderCondition: (state, action: PayloadAction<boolean>) => {
      state.isFirstRender = action.payload;
    },
  },
});

export const { setGloablLoading, setRenderCondition } = globalSlice.actions;

export default globalSlice.reducer;

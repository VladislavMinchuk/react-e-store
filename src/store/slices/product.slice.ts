import { PayloadAction, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IProductItem } from '../../interfaces';
import { singleProduct } from '../../mock-data';
import { setGloablLoading } from './global.slice';

interface IInitialState {
  singleProduct: IProductItem | null
  error: any,
}

const initialState: IInitialState = {
  singleProduct: null,
  error: null,
};

export const getProductByID = createAsyncThunk(
  'getProductByID',
  async (userId: number, { dispatch }) => {
    // GET request
    // const response = await productApi.fetchById(userId);
    // return response.data
    return new Promise((resolve: (value: any) => void, reject) => {
      dispatch(setGloablLoading(true)); // Show page loader
      
      setTimeout(() => {
        dispatch(setGloablLoading(false)); // Hide page loader
        resolve(singleProduct);
      }, 3000);
    });
  }
)

export const productDetailsSlice = createSlice({
  name: 'productDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductByID.fulfilled, (state, action: PayloadAction<IProductItem | null>) => {
      // handle loading state as needed
      state.singleProduct = action.payload;
    });
    builder.addCase(getProductByID.rejected, (state, action) => {
      // handle loading state as needed
      state.error = action.error.message;
    });
  }
});

export default productDetailsSlice.reducer;

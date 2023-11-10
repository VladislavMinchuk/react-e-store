import { PayloadAction, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IProductItem, IPaginationRequest } from '../../interfaces';
import { staticProductList } from '../../mock-data';

const initialState: {
  productList: IProductItem[] | [],
  error: any
} = {
  productList: [],
  error: null
};

const getProductList = createAsyncThunk(
  'getProductList',
  async (listParams: IPaginationRequest) => {
    // GET request
    // const response = await productApi.fetchById(userId);
    // return response.data
    return new Promise((resolve: (value: any) => void, reject) => {
      setTimeout(() => {
        resolve(staticProductList);
      }, 3000);
    });
  }
)

export const productListSlice = createSlice({
  name: 'productList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductList.fulfilled, (state, action: PayloadAction<IProductItem[] | []>) => {
      // handle loading state as needed
      state.productList = action.payload;
    });
    builder.addCase(getProductList.rejected, (state, action) => {
      // handle loading state as needed
      state.error = action.error.message;
    });
  }
});

export default productListSlice.reducer;

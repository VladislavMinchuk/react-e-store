import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProductItem, IPaginationRequest } from "../../interfaces";
import { getProductList } from "../actions/productList.action";
import { singleProduct } from "../../mock-data";

export interface IProductListSlice {
  productList: IProductItem[] | [];
  filteredProductList: IProductItem[] | [];
  productFilters: ProductFiltersT;
  error: any;
}
type ProductFiltersT = {
  price: { max: number; min: number };
  // probably other fields
  discount?: number;
  sizes: { available: string[]; chosen: string[] };
  collection?: any;
};
export enum productSortTypes {
  LOW_FIRST = "low_First",
  HIGH_FIRST = "high_First",
  NEW_FIRST = "new_First",
}
export const defaultRequestParams: IPaginationRequest = {
  page: 1,
  perPage: 10,
};
const productFiltersInitialState = {
  price: { max: 0, min: 0 },
  sizes: {
    available: [...singleProduct.shoesSize.map((s) => s.size)],
    chosen: [...singleProduct.shoesSize.map((s) => s.size)],
  },
  discount: 0,
  collection: null,
};

// -------------------------------------------------------------

const initialState: IProductListSlice = {
  productList: [],
  filteredProductList: [],
  productFilters: productFiltersInitialState,
  error: null,
};

export const productListSlice = createSlice({
  name: "productList",
  initialState,
  reducers: {
    sortProductsByType(state, payload) {
      const type = payload.payload;
      switch (type) {
        case productSortTypes.LOW_FIRST:
          state.filteredProductList.sort((a, b) => a.price - b.price);
          break;
        case productSortTypes.HIGH_FIRST:
          state.filteredProductList.sort((a, b) => b.price - a.price);
          break;
        case productSortTypes.NEW_FIRST:
          break;
        default:
          return state;
      }
    },
    filterProductsByPrice(state, payload) {
      const maxPrice = payload.payload;
      state.filteredProductList = state.productList.filter((p) => p.price <= maxPrice);
    },
    getMinPrice(state) {
      const minPrice = Math.min(...state.productList.map((p) => p.price));
      state.productFilters.price.min = minPrice;
    },
    getMaxPrice(state) {
      const maxPrice = Math.max(...state.productList.map((p) => p.price));
      state.productFilters.price.max = maxPrice;
    },
    updateChosenSizes(state, payload) {
      const { payload: newSize } = payload;
      const { productFilters } = state;
      const { chosen } = productFilters.sizes;
      productFilters.sizes.chosen = chosen.includes(newSize)
        ? chosen.filter((s) => s !== newSize)
        : [...chosen, newSize];
    },
    filterProductsBySize(state) {
      // TODO SPLIT NESTED methods
      const chosenSizes = state.productFilters.sizes.chosen;

      state.filteredProductList = state.productList.filter((product) =>
        product.shoesSize.some((size) => chosenSizes.includes(size.size))
      );
    },
    resetFilters(state) {
      //
    },
  },
  // Temp solution with extraReducers and the fake api requests
  extraReducers: (builder) => {
    builder.addCase(getProductList.fulfilled, (state, action: PayloadAction<IProductItem[] | []>) => {
      if (state.productList.length) return state;

      // handle loading state as needed
      state.productList = action.payload;
      state.filteredProductList = action.payload;

      productListSlice.caseReducers.getMinPrice(state);
      productListSlice.caseReducers.getMaxPrice(state);
    });
    builder.addCase(getProductList.rejected, (state, action) => {
      // handle loading state as needed
      state.error = action.error.message;
    });
  },
});
export const {
  sortProductsByType,
  filterProductsByPrice,
  getMaxPrice,
  getMinPrice,
  updateChosenSizes,
  filterProductsBySize,
} = productListSlice.actions;
export default productListSlice.reducer;

// фільтри працюють лише по одинці, бо за вихідний массив береться productList,
// а filteredProductList  для рендеру.

// можно зробити наступним чином:
// вибрали усі потрібні фільтри натиснули OK, отримали фільтрований массив по всім параметрам

// або

// додавати temp list[],  кожен раз після фільтрації ,
// ....
// ???
// ???
//  

/*
  TODO: update filters

  API FLOW
    - 'filtersObj' { size, color, seasons ... }
    - available sizes/colors/seasons gets from API ex: sizes - [{ id: 1, name: '36' }]
    - render filters UI based on 'filtersObj'
    - updated filters UI > updated 'filtersObj'
    - single function for request to API with the 'filtersObj' 
        REQ obj: { sizes_ids: [1,3,4 ...], colors_ids: [5,3...] } IDs only
*/ 

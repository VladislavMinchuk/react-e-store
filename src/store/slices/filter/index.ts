import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { staticProductList } from "../../../mock-data";

import { IProductFilters, filterOptionsDefault, productSortTypes } from "./model";

const initialState: IProductFilters = {
  filteredProductList: staticProductList,
  referenceProductList: staticProductList,
  filterOptions: filterOptionsDefault,
};

export const productFiltersSlice = createSlice({
  name: "productFiltersSlice",
  reducers: {
    setPriceFilter(state, action: PayloadAction<{ min: number; max: number }>) {
      state.filterOptions.price = action.payload;
    },
    setSizeFilter(state, action: PayloadAction<string>) {
      const newSize = action.payload;
      const sizeFilterArr = state.filterOptions.sizes;
      state.filterOptions.sizes = sizeFilterArr.includes(newSize)
        ? sizeFilterArr.filter((s) => s !== newSize)
        : [...sizeFilterArr, newSize];
    },
    setSortType(state, action: PayloadAction<productSortTypes>) {
      state.filterOptions.sortTypes = action.payload;
    },

    sortByTypeAction(state) {
      const type = state.filterOptions.sortTypes;

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
    filterByPriceAction(state) {
      const { max, min } = state.filterOptions.price;
      state.filteredProductList = state.referenceProductList.filter((p) => p.price <= max && p.price >= min);
    },
    filterBySizeAction(state) {
      const chosenSizes = state.filterOptions.sizes;
      state.filteredProductList = state.filteredProductList.filter((product) =>
        product.shoesSize.some((size) => chosenSizes.includes(size.size))
      );
    },

    resetFilters(state) {
      state.filterOptions = filterOptionsDefault;
    },
  },
  initialState,
});

export const {
  setPriceFilter,
  setSizeFilter,
  setSortType,
  resetFilters,
  filterByPriceAction,
  filterBySizeAction,
  sortByTypeAction,
} = productFiltersSlice.actions;

export default productFiltersSlice.reducer;

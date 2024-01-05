import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { staticProductList } from "../../../mock-data";
import { IProductFilters, filterOptionsDefault, productSortTypes } from "./model";

const initialState: IProductFilters = {
  filteredProductList: staticProductList,
  referenceProductList: staticProductList,
  filterOptions: filterOptionsDefault,
};
interface SizeFilterPayload {
  size: string;
  checked: boolean;
}
interface PriceFilterPayload {
  min: number;
  max: number;
}

export const productFiltersSlice = createSlice({
  name: "productFilters",
  initialState,
  reducers: {
    setPriceFilter(state, action: PayloadAction<PriceFilterPayload>) {
      state.filterOptions.price = action.payload;
    },
    setSizeFilter(state, action: PayloadAction<SizeFilterPayload>) {
      const { size, checked } = action.payload;
      const sizeFilterArr = state.filterOptions.sizes;
      state.filterOptions.sizes = checked ? [...sizeFilterArr, size] : sizeFilterArr.filter((s) => s !== size);
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
    resetFiltersAction(state) {
      state.filterOptions = filterOptionsDefault;
      state.filteredProductList = state.referenceProductList;
    },
  },
});

export const {
  setPriceFilter,
  setSizeFilter,
  setSortType,
  resetFiltersAction,
  filterByPriceAction,
  filterBySizeAction,
  sortByTypeAction,
} = productFiltersSlice.actions;

export default productFiltersSlice.reducer;

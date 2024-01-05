import { IProductItem } from "../../../interfaces";
import { singleProduct } from "../../../mock-data";

export interface IProductFilters {
  filteredProductList: IProductItem[] | [];
  referenceProductList: IProductItem[] | [];
  filterOptions: IFilterOptions;
}

export enum productSortTypes {
  LOW_FIRST = "low_First",
  HIGH_FIRST = "high_First",
  NEW_FIRST = "new_First",
}

interface IFilterOptions {
  sortTypes: productSortTypes | null;
  sizes: string[];
  price: { min: number; max: number };
  discount: number | null;
  collection: string | null;
}

export const filterOptionsDefault = {
  sortTypes: null,
  price: {
    min: 1,
    max: 100,
  },
  sizes: [...singleProduct.shoesSize.map((s) => s.size)],
  collection: null,
  discount: null,
};

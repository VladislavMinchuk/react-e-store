import ProductListGrid from "../blocks/ProductsListGrid";
import ProductFilters from "../components/ProductFilters";

import ProductsLayout from "../layouts/ProductsLayout";
import { useAppDispatch, RootState, useTypedSelector } from "../store";
import { useEffect } from "react";
import { defaultRequestParams, getMaxPrice, getMinPrice } from "../store/slices/productList.slice";
import { getProductList } from "../store/actions/productList.action";
import Loader from "../components/Loader";

const ProductListPage = () => {
  const dispahtch = useAppDispatch();
  const isLoading = useTypedSelector((state: RootState) => state.global.isLoading);
  const productList = useTypedSelector((state: RootState) => state.productList.productList);
  const productListToRender = useTypedSelector((state: RootState) => state.productList.filteredProductList);

  useEffect(() => {
    dispahtch(getProductList(defaultRequestParams)); // Get product list by pagination params
  }, []);

  return (
    <div>
      {isLoading && <Loader positionValue="position-fixed" />}
      {/* TODO: create message component */}
      {!productListToRender.length && !isLoading && <div className="text-center">filter is too strict</div>}

      {productList.length > 0 && (
        <ProductsLayout
          title="Product list"
          aside={<ProductFilters />}
          mainContent={<ProductListGrid productList={productListToRender} />}
        />
      )}
    </div>
  );
};

export default ProductListPage;

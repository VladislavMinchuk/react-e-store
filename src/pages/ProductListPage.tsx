import ProductListGrid from "../blocks/ProductsListGrid";
import ProductFilters from "../components/ProductFilters";

import ProductsLayout from "../layouts/ProductsLayout";
import { useAppDispatch, useTypedSelector } from "../store";
import { useEffect } from "react";
import { defaultRequestParams } from "../store/slices/productList.slice";
import { getProductList } from "../store/actions/productList.action";
import Loader from "../components/Loader";

const ProductListPage = () => {
  const dispahtch = useAppDispatch();
  const isLoading = useTypedSelector((state) => state.global.isLoading);
  const productList = useTypedSelector((state) => state.productList.productList);
  const { filteredProductList } = useTypedSelector((state) => state.productFilters);
  

  useEffect(() => {
    console.log(filteredProductList);
    dispahtch(getProductList(defaultRequestParams)); // Get product list by pagination params
    
  }, []);

  return (
    <div>
      {isLoading && <Loader positionValue="position-fixed" />}
      {/* TODO: create message component */}
      {!filteredProductList.length && !isLoading && <div className="text-center">filter is too strict</div>}

      {productList.length > 0 && (
        <ProductsLayout
          title="Product list"
          aside={<ProductFilters />}
          mainContent={<ProductListGrid productList={filteredProductList} />}
        />
      )}
    </div>
  );
};

export default ProductListPage;

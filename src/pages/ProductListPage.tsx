import { useSelector } from "react-redux";
import ProductListGrid from "../blocks/ProductsListGrid";
import ProductFilters from "../components/ProductFilters";
import { staticProductList } from "../mock-data";
import ProductsLayout from "../layouts/ProductsLayout";
import { useAppDispatch, RootState } from "../store";
import { useEffect } from "react";
import { defaultRequestParams } from "../store/slices/productList.slice";
import { getProductList } from "../store/actions/productList.action";

const ProductListPage = () => {
  const dispahtch = useAppDispatch();
  const isLoading = useSelector((state: RootState) => state.global.isLoading);
  const productList = useSelector((state: RootState) => state.productList.productList);
  
  useEffect(() => {
    dispahtch(getProductList(defaultRequestParams)); // Get product list by pagination params
  }, []);
  
  return (
    <div>
      { isLoading && 'Loading ... ' }
      { (!isLoading && productList.length > 0) &&
        <ProductsLayout
          title="Product list"
          aside={ <ProductFilters /> }
          mainContent={<ProductListGrid productList={staticProductList} />}
        />
      }
    </div>
  )
}

export default ProductListPage;

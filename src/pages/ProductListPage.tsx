import ProductListGrid from "../blocks/ProductsListGrid";
import ProductFilters from "../components/ProductFilters";
import { staticProductList } from "../constans/api";
import ProductsLayout from "../layouts/ProductsLayout";

const ProductListPage = () => {
  return (
    <ProductsLayout
      title="Product list"
      aside={ <ProductFilters /> }
      mainContent={<ProductListGrid productList={staticProductList} />}
    />
  )
}

export default ProductListPage;

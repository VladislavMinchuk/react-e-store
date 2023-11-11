import { Container } from "react-bootstrap"
import MainCarouselHolder from "../blocks/MainCarouselHolder"
import SpecialProductsSection from "../blocks/SpecialProductsSection"
import { useSelector } from "react-redux";
import { useAppDispatch, RootState } from "../store";
import { useEffect } from "react";
import { getProductList } from "../store/actions/productList.action";
import { defaultRequestParams } from "../store/slices/productList.slice";

const HomePage = () => {
  const dispahtch = useAppDispatch();
  const isLoading = useSelector((state: RootState) => state.global.isLoading);
  const productList = useSelector((state: RootState) => state.productList.productList);
  
  useEffect(() => {
    dispahtch(getProductList(defaultRequestParams)); // Get product list by pagination params
  }, []);
  
  return (
    <div className="home-page">
      { isLoading && 'Loading ... ' }
      {
        (!isLoading && productList.length > 0) && // TODO: upd solution based on multiply async requests
        <Container>
          <MainCarouselHolder></MainCarouselHolder>
          <SpecialProductsSection productList={productList}></SpecialProductsSection>
        </Container>
      }
    </div>
  )
}

export default HomePage

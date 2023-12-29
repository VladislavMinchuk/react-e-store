import { Container } from "react-bootstrap";
import MainCarouselHolder from "../blocks/MainCarouselHolder";
import SpecialProductsSection from "../blocks/SpecialProductsSection";
import { useAppDispatch, useTypedSelector } from "../store";
import { useEffect } from "react";
import { getProductList } from "../store/actions/productList.action";
import { defaultRequestParams } from "../store/slices/productList.slice";
import Loader from "../components/Loader";

const HomePage = () => {
  const dispahtch = useAppDispatch();
  const isLoading = useTypedSelector((state) => state.global.isLoading);
  const productList = useTypedSelector((state) => state.productList.productList);

  useEffect(() => {
    dispahtch(getProductList(defaultRequestParams)); // Get product list by pagination params
  }, []);

  return (
    <div className="home-page">
      {isLoading && <Loader positionValue="position-fixed" />}
      {productList.length > 0 && ( // TODO: upd solution based on multiply async requests
        <Container>
          <MainCarouselHolder></MainCarouselHolder>
          <SpecialProductsSection productList={productList}></SpecialProductsSection>
        </Container>
      )}
    </div>
  );
};

export default HomePage;

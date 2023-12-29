// import ProductsLayout from "../layouts/ProductsLayout";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import ProductCarousel from "../components/ProductCarousel";
import ProductOrderQuickForm from "../components/ProductOrderQuickForm.";
import { useAppDispatch, useTypedSelector } from "../store";
import { getProductByID } from "../store/actions/product.action";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const dispahtch = useAppDispatch();
  const isLoading = useTypedSelector((state) => state.global.isLoading);
  const singleProduct = useTypedSelector((state) => state.productDetails.singleProduct);

  useEffect(() => {
    dispahtch(getProductByID(Number(id))); // Get product by ID
  }, []);

  // Show loader TODO: create global Lodaer component

  return (
    <div className="container py-4">
      {isLoading && "Loading ... "}

      {!isLoading &&
        singleProduct && ( // Check singleProduct
          <div className="single-product-page">
            <section className="single-product-page__main-section">
              {/* breadcrumbs navigation */}
              <Row>
                <Col lg={8}>
                  <div className="single-product-page__content-wrap">
                    <ProductCarousel imagesArray={singleProduct.images}></ProductCarousel>
                    <p>{singleProduct.description}</p>
                  </div>
                </Col>
                <Col lg={4}>
                  <aside>
                    <h2>{singleProduct.title}</h2>
                    <p>Price: {singleProduct.price}$</p>
                    <ProductOrderQuickForm shoesSize={singleProduct.shoesSize}></ProductOrderQuickForm>
                  </aside>
                </Col>
              </Row>
            </section>
            <section>{/* Recomended section */}</section>
          </div>
        )}
    </div>
  );
};

export default ProductDetailsPage;

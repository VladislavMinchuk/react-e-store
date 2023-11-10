// import ProductsLayout from "../layouts/ProductsLayout";
import { useParams } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import ProductCarousel from "../components/ProductCarousel";
import { productImagesArr } from "../constans";
import ProductOrderQuickForm from "../components/ProductOrderQuickForm.";
import { useSelector } from "react-redux";
import { useAppDispatch, RootState } from "../store";
import { getProductByID } from "../store/slices/product.slice";
import { useEffect } from "react";


const ProductDetailsPage = () => {
  const { id } = useParams();
  const dispahtch = useAppDispatch();
  const isLoading = useSelector((state: RootState) => state.global.isLoading);
  const singleProduct = useSelector((state: RootState) => state.productDetails.singleProduct);

  useEffect(() => {
    dispahtch(getProductByID(Number(id))); // Get product by ID
  }, []);

  // Show loader TODO: create global Lodaer component
  if (isLoading) return (<p>loading ...</p>)

  return (
    <div className="container py-4">
      {JSON.stringify(singleProduct)}

      
      <div className="single-product-page">
        {
          singleProduct && // Check singleProduct
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
        }
        <section>
          {/* Recomended section */}
        </section>
      </div>
    </div>
  )
}

export default ProductDetailsPage;

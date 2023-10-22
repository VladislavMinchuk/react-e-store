// import ProductsLayout from "../layouts/ProductsLayout";
import { useParams } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import ProductCarousel from "../components/ProductCarousel";
import { productImagesArr } from "../constans";


const ProductDetailsPage = () => {
  const { id } = useParams();
  const productObject = {
    id,
    title: 'Shoes product title',
    price: 120,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, facere! At, magni eaque? Nobis.",
    images: productImagesArr
  };

  return (
    <div className="container py-4">
      <div className="single-product-page">
        <section className="single-product-page__main-section">
          {/* breadcrumbs navigation */}
          <Row>
            <Col lg={8}>
              <div className="single-product-page__content-wrap">
                <ProductCarousel imagesArray={productObject.images}></ProductCarousel>
                <p>{productObject.description}</p>
                {/* imgs carousel */}
                {/* description block */}
              </div>
            </Col>
            <Col lg={4}>
              <aside>
                <h2>{productObject.title}</h2>
                <p>Price: {productObject.price}$</p>
                {/* select size */}
                {/* action buttons (add to cart) */}
              </aside>
            </Col>
          </Row>
        </section>
        <section>
          {/* Recomended section */}
        </section>
      </div>
    </div>
  )
}

export default ProductDetailsPage;
